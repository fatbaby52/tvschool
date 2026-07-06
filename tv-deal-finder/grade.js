/* Deals Academy — canonical TV grade rule (single source of truth).
 * Loaded on every page (via Netlify Snippet Injection) so the rule holds
 * even if the build pipeline regenerates data.js or the static product pages.
 * Rule: price at or below projected value => at least B.
 *   A: 25%+ below | B: at or below value | C: up to 10% above | D/F: more above
 */
(function () {
  function verdict(ds) {
    if (ds >= 0.25) return { text: "A", subtitle: "Great Deal", class: "verdict-a" };
    if (ds >= 0)    return { text: "B", subtitle: "Good Deal", class: "verdict-b" };
    if (ds >= -0.10) return { text: "C", subtitle: "Fair Price", class: "verdict-c" };
    if (ds >= -0.25) return { text: "D", subtitle: "Not Recommended", class: "verdict-d" };
    return { text: "F", subtitle: "Not Recommended", class: "verdict-f" };
  }
  window.TV_GRADE = verdict;

  // 1) Override the finder's util (main grid + dynamic product template),
  //    re-applying briefly in case data.js loads after this snippet.
  function applyOverride() { if (window.TVDataUtils) window.TVDataUtils.getVerdict = verdict; }
  applyOverride();
  var n = 0, iv = setInterval(function () { applyOverride(); if (++n > 25) clearInterval(iv); }, 200);

  // 2) Self-correct a baked static product-page badge from its own Deal Score.
  function fixBadge() {
    var badge = document.querySelector(".buy-button-grade");
    if (!badge) return;
    var m = (document.body.innerText || "").match(/Deal Score\s*([+\-−]?)\s*([\d.]+)\s*%/);
    if (!m) return;
    var val = parseFloat(m[2]);
    var ds = (m[1] === "-" || m[1] === "−") ? -val / 100 : val / 100;
    var v = verdict(ds);
    badge.className = "buy-button-grade " + v.class;
    badge.textContent = v.text + " - " + v.subtitle;
  }
  if (document.readyState !== "loading") fixBadge();
  else document.addEventListener("DOMContentLoaded", fixBadge);
})();
