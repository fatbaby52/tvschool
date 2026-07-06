/** Tool Deal Finder — app (v1). Kit-math grading + brand/type/brushless filters + pricing-model cross-check (QA-only). */
const ToolUtils = {
  bestPrice(t){ const s=t.prices.filter(p=>p.inStock); if(s.length) return s.reduce((a,b)=>b.currentPrice<a.currentPrice?b:a); return null; },
  dealScore(t){ const p=this.bestPrice(t); if(!p||!t.fairValue) return null; return (t.fairValue-p.currentPrice)/t.fairValue; },
  verdict(ds){ if(ds==null) return {text:"…",subtitle:"Verifying price",cls:"verdict-na"};
    if(ds>=0.25) return {text:"A",subtitle:"Great Deal",cls:"verdict-a"};
    if(ds>=0) return {text:"B",subtitle:"Good Deal",cls:"verdict-b"};
    if(ds>=-0.10) return {text:"C",subtitle:"Fair Price",cls:"verdict-c"};
    if(ds>=-0.25) return {text:"D",subtitle:"Not Recommended",cls:"verdict-d"};
    return {text:"F",subtitle:"Not Recommended",cls:"verdict-f"}; },
  fmt(v){ return v==null?"—":"$"+Number(v).toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2}); },
  kitMath(t){ const c=t.config||{}; const parts=[];
    if(c.bareToolValue) parts.push(["Tool",c.bareToolValue]);
    (c.batteries||[]).forEach(b=>parts.push([`${b.qty}× ${b.ah}Ah battery`,b.unitValue*b.qty]));
    if(c.chargerValue) parts.push(["Charger",c.chargerValue]);
    if(c.caseValue) parts.push(["Case/bag",c.caseValue]);
    return parts; }
};

/* ===== Bare-tool pricing model v1 (2026-07-05) =====
   expected bare = base[toolType] × brandFactor[brand] × brushedFactor(if explicitly brushed)
   Hand-tuned + anchored to verified street prices. Runs as a CROSS-CHECK only:
   it does NOT drive grades. Surfaced behind ?qa=1 for Alex to spot where hand-set
   bare values disagree with the model (usually a missing spec dimension). */
const MODEL = {
  version: "v2-2026-07-05",
  threshold: 0.20,
  brushedFactor: 0.78,             // discount ONLY when specs.brushless === false
  base: { impact_driver:150, drill:160, circular_saw:175, recip_saw:170, grinder:130,
          impact_wrench:240, blower:190, mower:280, trimmer:180 },
  // sub-type base overrides within a tool type (compact vs full-size wrench; driver/hammer/premium drill)
  subBase: { impact_wrench:{compact:150,mid:240,high:300}, drill:{driver:150,hammer:185,premium:215} },
  brandFactor: { "DeWalt":1.0, "Milwaukee":1.05, "Makita":1.0, "Metabo HPT":0.95,
                 "Ryobi":0.62, "Ridgid":0.72, "EGO":1.0,
                 "Hercules":0.42, "Bauer":0.28, "Festool":1.6 },
  skip: new Set(["battery","combo_kit","specialty"]),
  _ftlbs(t){ const m=String(t.specs?.torque||"").match(/([\d.]+)\s*ft-lbs/); return m?parseFloat(m[1]):null; },
  subType(t){
    const n=(t.fullName||"").toLowerCase(), tt=t.toolType;
    if(tt==="impact_wrench"){ const ft=this._ftlbs(t);
      if(/stubby|compact|3\/8/.test(n) || (ft&&ft<400)) return "compact";
      if(/high-torque|high torque/.test(n) || (ft&&ft>=700)) return "high";
      return "mid"; }
    if(tt==="drill"){
      if(/xgt|40v|flexvolt|60v/.test(n)) return "premium";
      if(/hammer/.test(n)) return "hammer";
      return "driver"; }
    return null;
  },
  specAdjust(t){   // spec input: torque-relative nudge within impact-wrench sub-type
    if(t.toolType==="impact_wrench"){ const ft=this._ftlbs(t), st=this.subType(t);
      const ref={compact:250,mid:600,high:1000}[st];
      if(ft&&ref) return Math.max(0.88,Math.min(1.12,Math.pow(ft/ref,0.25))); }
    return 1.0;
  },
  expectedBare(t){
    const tt=t.toolType;
    if(this.skip.has(tt)) return null;
    const st=this.subType(t);
    let base = st ? (this.subBase[tt]||{})[st] : undefined;
    if(base==null) base=this.base[tt];
    if(base==null) return null;
    const bl=t.specs?.brushless;
    const f = bl===false ? this.brushedFactor : 1.0;
    return Math.round(base*(this.brandFactor[t.brand]??1.0)*f*this.specAdjust(t));
  },
  crossCheck(t){
    const exp=this.expectedBare(t); const hs=t.config?.bareToolValue;
    if(exp==null || !hs) return null;
    const pct=(hs-exp)/exp;
    return {exp, hs, pct, flag:Math.abs(pct)>=this.threshold};
  }
};
const QA = new URLSearchParams(location.search).get("qa")==="1";

const TYPE_LABELS={drill:"Drill/Driver",impact_driver:"Impact Driver",impact_wrench:"Impact Wrench",
  circular_saw:"Circular Saw",recip_saw:"Recip Saw",grinder:"Grinder",blower:"Blower",mower:"Mower",
  trimmer:"Trimmer",combo_kit:"Combo Kit",battery:"Battery",specialty:"Specialty"};

const S={platform:null,useCase:null,minDS:-Infinity,sort:"dealScore",ownBatteries:false,
  brands:new Set(),types:new Set(),brushlessOnly:false};
const UC=[["diy","🏠 DIY"],["remodel","🔨 Remodel"],["auto","🚗 Automotive"],["electrical","⚡ Electrical"],["yard","🌲 Yard"],["pro","👷 Jobsite Pro"]];

function adjScore(t){
  const p=ToolUtils.bestPrice(t); if(!p||!t.fairValue) return null;
  if(!S.ownBatteries) return ToolUtils.dealScore(t);
  const c=t.config||{}; const batVal=(c.batteries||[]).reduce((a,b)=>a+b.unitValue*b.qty,0);
  const fv=t.fairValue; const adjFv=fv-batVal*0.5;
  return (adjFv-p.currentPrice)/adjFv;
}
function filtered(){
  let r=TOOL_DATA.tools.slice();
  if(S.platform) r=r.filter(t=>t.platform===S.platform);
  if(S.brands.size) r=r.filter(t=>S.brands.has(t.brand));
  if(S.types.size) r=r.filter(t=>S.types.has(t.toolType));
  if(S.brushlessOnly) r=r.filter(t=>t.specs?.brushless===true);
  if(S.useCase) r=r.filter(t=>(t.useCaseScores?.[S.useCase]||0)>=7.0);
  r=r.filter(t=>{const ds=adjScore(t); return ds==null?true:ds>=S.minDS;});
  if(S.sort==="dealScore") r.sort((a,b)=>(adjScore(b)??-9)-(adjScore(a)??-9));
  if(S.sort==="priceLow") r.sort((a,b)=>(ToolUtils.bestPrice(a)?.currentPrice??9e9)-(ToolUtils.bestPrice(b)?.currentPrice??9e9));
  if(S.sort==="priceHigh") r.sort((a,b)=>(ToolUtils.bestPrice(b)?.currentPrice??0)-(ToolUtils.bestPrice(a)?.currentPrice??0));
  return r;
}
function card(t){
  const p=ToolUtils.bestPrice(t); const ds=adjScore(t); const v=ToolUtils.verdict(ds);
  const km=ToolUtils.kitMath(t).map(([l,val])=>`<span class="km-row">${l}: ${ToolUtils.fmt(val)}</span>`).join("");
  const priceBlock = p
    ? `<div class="price-labeled"><span class="price-label">Price</span><span class="tv-card-price">${ToolUtils.fmt(p.currentPrice)}</span></div>
       ${p.retailPrice&&p.retailPrice>p.currentPrice?`<div class="price-labeled msrp"><span class="price-label">List</span><span class="tv-card-retail">${ToolUtils.fmt(p.retailPrice)}</span></div>`:""}
       <div class="tv-card-retailer">at ${TOOL_DATA.retailers[p.retailerId]?.name||p.retailerId} · checked ${String(p.lastChecked).slice(0,10)}</div>`
    : `<div class="tv-card-retailer">Price being verified — check retailer</div>`;
  const dsTxt = ds==null?"":`<span class="deal-score ${ds>=0?"positive":"negative"}">${ds>=0?"":"+"}${Math.abs(ds*100).toFixed(1)}% ${ds>=0?"below":"above"} fair value (${ToolUtils.fmt(t.fairValue)})</span>`;
  const brandLine = t.platformName.toLowerCase().startsWith(t.brand.toLowerCase())
    ? t.platformName
    : `${t.brand} · ${t.platformName}`;
  const buyLink = (p && p.url)
    ? `<a class="tool-buy-link" href="${p.url}" target="_blank" rel="noopener">View at ${TOOL_DATA.retailers[p.retailerId]?.name||p.retailerId} →</a>`
    : "";
  let qaBadge="";
  if(QA){ const cc=MODEL.crossCheck(t);
    if(cc) qaBadge=`<div class="model-badge ${cc.flag?"model-flag":"model-ok"}">model bare ${ToolUtils.fmt(cc.exp)} vs hand ${ToolUtils.fmt(cc.hs)} (${cc.pct>=0?"+":""}${(cc.pct*100).toFixed(0)}%)${cc.flag?" ⚠":""}</div>`;
    else qaBadge=`<div class="model-badge model-skip">model: n/a for this type</div>`;
  }
  return `<article class="tv-card" data-id="${t.id}">
    ${t.image ? `<div class="tv-card-image tool-card-image"><img src="${t.image}" alt="${t.fullName}" loading="lazy"></div>` : ""}
    <div class="tv-card-content">
      <div class="tv-card-brand">${brandLine}</div>
      <h3 class="tv-card-title">${t.fullName}</h3>
      <div class="tv-card-specs">${Object.entries(t.specs||{}).slice(0,3).map(([k,v2])=>`<span class="tv-card-spec">${v2===true?k:v2}</span>`).join("")}</div>
      <div class="kit-math">${km}</div>
      ${qaBadge}
      <div class="tv-card-pricing"><div class="tv-card-price-grade-row">
        <div class="price-section">${priceBlock}</div>
        <div class="grade-section"><span class="deal-badge ${v.cls}"><span class="grade">${v.text}</span><span class="grade-subtitle">${v.subtitle}</span></span></div>
      </div><div class="tv-card-deal-row">${dsTxt}</div>${buyLink}</div>
    </div></article>`;
}
function renderQASummary(rows){
  const el=document.getElementById("model-qa"); if(!el) return;
  if(!QA){ el.style.display="none"; return; }
  let checked=0,flagged=0;
  rows.forEach(t=>{const cc=MODEL.crossCheck(t); if(cc){checked++; if(cc.flag) flagged++;}});
  el.style.display="block";
  el.innerHTML=`<strong>Pricing model ${MODEL.version} — cross-check (QA view)</strong>: `+
    `${checked-flagged}/${checked} priceable tools within ±${Math.round(MODEL.threshold*100)}% of hand-set bare value, `+
    `<span class="${flagged?"model-flag-txt":""}">${flagged} flagged</span>. Model is advisory only — grades still use verified hand-set values.`;
}
function render(){
  const r=filtered();
  document.getElementById("tool-grid").innerHTML=r.map(card).join("")||`<div class="no-results"><h3>No tools match your filters</h3></div>`;
  document.getElementById("tool-count").textContent=`${r.length} tools`;
  renderQASummary(r);
}
function multiChipGroup(container, items, stateSet){
  container.innerHTML=items.map(([k,l])=>`<button class="filter-chip" data-k="${k}">${l}</button>`).join("");
  container.querySelectorAll(".filter-chip").forEach(b=>b.addEventListener("click",()=>{
    const on=b.classList.toggle("active");
    if(on) stateSet.add(b.dataset.k); else stateSet.delete(b.dataset.k);
    render();
  }));
}
function init(){
  const pc=document.getElementById("platform-filters");
  pc.innerHTML=Object.entries(TOOL_DATA.platforms).map(([k,n])=>`<button class="filter-chip" data-p="${k}">${n}</button>`).join("");
  pc.querySelectorAll(".filter-chip").forEach(b=>b.addEventListener("click",()=>{
    const on=b.classList.toggle("active");
    pc.querySelectorAll(".filter-chip").forEach(x=>{if(x!==b)x.classList.remove("active");});
    S.platform=on?b.dataset.p:null; try{localStorage.setItem("toolPlatform",S.platform||"");}catch(e){} render();
  }));
  try{const saved=localStorage.getItem("toolPlatform"); if(saved){S.platform=saved; pc.querySelector(`[data-p="${saved}"]`)?.classList.add("active");}}catch(e){}

  // Brand filter (multi-select) — distinct brands present, sorted
  const brands=[...new Set(TOOL_DATA.tools.map(t=>t.brand))].sort();
  const bc=document.getElementById("brand-filters");
  if(bc) multiChipGroup(bc, brands.map(b=>[b,b]), S.brands);

  // Tool-type filter (multi-select) — distinct types present, labeled, sorted by label
  const types=[...new Set(TOOL_DATA.tools.map(t=>t.toolType))].sort((a,b)=>(TYPE_LABELS[a]||a).localeCompare(TYPE_LABELS[b]||b));
  const tc=document.getElementById("type-filters");
  if(tc) multiChipGroup(tc, types.map(t=>[t,TYPE_LABELS[t]||t]), S.types);

  // Brushless toggle (single)
  const brl=document.getElementById("brushless-toggle");
  if(brl) brl.addEventListener("change",e=>{S.brushlessOnly=e.target.checked;render();});

  const uc=document.getElementById("usecase-filters");
  uc.innerHTML=UC.map(([k,l])=>`<button class="filter-chip" data-u="${k}">${l}</button>`).join("");
  uc.querySelectorAll(".filter-chip").forEach(b=>b.addEventListener("click",()=>{
    const on=b.classList.toggle("active");
    uc.querySelectorAll(".filter-chip").forEach(x=>{if(x!==b)x.classList.remove("active");});
    S.useCase=on?b.dataset.u:null; render();
  }));
  document.getElementById("own-batteries").addEventListener("change",e=>{S.ownBatteries=e.target.checked;render();});
  document.getElementById("grade-slider").addEventListener("input",e=>{
    S.minDS=[-Infinity,-0.25,-0.10,0.10,0.25][+e.target.value];
    document.getElementById("grade-value").textContent=["All Grades","D or Better","C or Better","B or Better","A Only"][+e.target.value]; render();});
  document.getElementById("sort-select").addEventListener("change",e=>{S.sort=e.target.value;render();});
  render();
}
document.addEventListener("DOMContentLoaded",init);
