/** Tool Deal Finder — app (v0). Reuses TV finder patterns; platform filter is the hero. */
const ToolUtils = {
  bestPrice(t){ const s=t.prices.filter(p=>p.inStock); if(s.length) return s.reduce((a,b)=>b.currentPrice<a.currentPrice?b:a); return null; },
  dealScore(t){ const p=this.bestPrice(t); if(!p||!t.fairValue) return null; return (t.fairValue-p.currentPrice)/t.fairValue; },
  verdict(ds){ if(ds==null) return {text:"…",subtitle:"Verifying price",cls:"verdict-na"};
    if(ds>=0.25) return {text:"A",subtitle:"Great Deal",cls:"verdict-a"};
    if(ds>=0.10) return {text:"B",subtitle:"Good Deal",cls:"verdict-b"};
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
const S={platform:null,useCase:null,minDS:-Infinity,sort:"dealScore",ownBatteries:false};
const UC=[["diy","🏠 DIY"],["remodel","🔨 Remodel"],["auto","🚗 Automotive"],["electrical","⚡ Electrical"],["yard","🌲 Yard"],["pro","👷 Jobsite Pro"]];

function adjScore(t){
  // "I own batteries" mode: grade kits against bare-tool value only (batteries as sunk value credit)
  const p=ToolUtils.bestPrice(t); if(!p||!t.fairValue) return null;
  if(!S.ownBatteries) return ToolUtils.dealScore(t);
  const c=t.config||{}; const batVal=(c.batteries||[]).reduce((a,b)=>a+b.unitValue*b.qty,0);
  const fv=t.fairValue; const adjFv=fv-batVal*0.5; // owned-platform battery marginal value ~50%
  return (adjFv-p.currentPrice)/adjFv;
}
function filtered(){
  let r=TOOL_DATA.tools.slice();
  if(S.platform) r=r.filter(t=>t.platform===S.platform);
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
  return `<article class="tv-card" data-id="${t.id}">
    ${t.image ? `<div class="tv-card-image tool-card-image"><img src="${t.image}" alt="${t.fullName}" loading="lazy"></div>` : ""}
    <div class="tv-card-content">
      <div class="tv-card-brand">${brandLine}</div>
      <h3 class="tv-card-title">${t.fullName}</h3>
      <div class="tv-card-specs">${Object.entries(t.specs||{}).slice(0,3).map(([k,v2])=>`<span class="tv-card-spec">${v2===true?k:v2}</span>`).join("")}</div>
      <div class="kit-math">${km}</div>
      <div class="tv-card-pricing"><div class="tv-card-price-grade-row">
        <div class="price-section">${priceBlock}</div>
        <div class="grade-section"><span class="deal-badge ${v.cls}"><span class="grade">${v.text}</span><span class="grade-subtitle">${v.subtitle}</span></span></div>
      </div><div class="tv-card-deal-row">${dsTxt}</div>${buyLink}</div>
    </div></article>`;
}
function render(){
  const r=filtered();
  document.getElementById("tool-grid").innerHTML=r.map(card).join("")||`<div class="no-results"><h3>No tools match your filters</h3></div>`;
  document.getElementById("tool-count").textContent=`${r.length} tools`;
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
