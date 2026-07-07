/**
 * Laptop Deal Finder - Main Application
 */

// Application state
const AppState = {
  laptops: [],
  filteredLaptops: [],
  filters: {
    minSize: 13,
    maxSize: 18,
    selectedSizes: [],
    brands: [],
    cpuBrands: [],
    gpuBrands: [],
    minRam: 0,
    displayTypes: [],
    minDealScore: -Infinity,
    minPrice: 0,
    maxPrice: Infinity,
    useCase: null, // Active use-case preset
    // Benchmark filters
    minCpuPerf: 0,      // Cinebench R23 Multi
    minGpuPerf: 0,      // 3DMark Time Spy
    minGamingFps: 0     // Avg FPS @ 1080p
  },
  sortBy: 'dealScore'
};

// Benchmark thresholds for sliders
const BENCHMARK_THRESHOLDS = {
  cpu: [0, 8000, 12000, 16000, 20000],     // Cinebench R23 Multi
  gpu: [0, 5000, 8000, 11000, 14000],      // 3DMark Time Spy
  fps: [0, 60, 90, 120, 144]               // Avg FPS @ 1080p
};

// Fair value calculation based on performance
function calculateFairValue(laptop) {
  const benchmarks = laptop.benchmarks || {};

  // Base value from performance
  let perfValue = 0;

  // CPU contribution (productivity value)
  const cpuScore = benchmarks.cinebenchR23Multi || 0;
  if (cpuScore >= 20000) perfValue += 600;
  else if (cpuScore >= 16000) perfValue += 450;
  else if (cpuScore >= 12000) perfValue += 350;
  else if (cpuScore >= 8000) perfValue += 250;
  else perfValue += 150;

  // GPU contribution (gaming/creative value)
  const gpuScore = benchmarks.timeSpyGraphics || 0;
  if (gpuScore >= 14000) perfValue += 800;
  else if (gpuScore >= 11000) perfValue += 600;
  else if (gpuScore >= 8000) perfValue += 400;
  else if (gpuScore >= 5000) perfValue += 250;
  else perfValue += 100;

  // Gaming FPS bonus
  const gamingFps = benchmarks.gaming1080pAvgFps || 0;
  if (gamingFps >= 144) perfValue += 200;
  else if (gamingFps >= 120) perfValue += 150;
  else if (gamingFps >= 90) perfValue += 100;
  else if (gamingFps >= 60) perfValue += 50;

  // RAM adjustment
  const ram = laptop.ram || 16;
  perfValue += (ram - 16) * 12; // ~$12 per GB above 16GB

  // Storage adjustment (assume NVMe)
  const storageGB = parseInt(laptop.storage) || 512;
  if (storageGB >= 2000) perfValue += 150;
  else if (storageGB >= 1000) perfValue += 75;

  // Display multipliers
  if (laptop.displayType === 'OLED') perfValue *= 1.15;
  else if (laptop.displayType === 'Mini LED') perfValue *= 1.10;

  // Refresh rate bonus
  if (laptop.refreshRate >= 144) perfValue += 75;
  else if (laptop.refreshRate >= 120) perfValue += 50;

  // Build quality multiplier
  const buildQuality = laptop.buildQuality || 7;
  perfValue *= (0.85 + (buildQuality / 50)); // 8/10 = 1.01x, 9.5/10 = 1.04x

  // Portability premium (lighter = more valuable)
  const weight = laptop.weight || 2.0;
  if (weight <= 1.2) perfValue *= 1.15;
  else if (weight <= 1.5) perfValue *= 1.10;
  else if (weight <= 1.8) perfValue *= 1.05;

  // Battery life bonus
  const battery = laptop.batteryLife || 8;
  if (battery >= 15) perfValue += 150;
  else if (battery >= 12) perfValue += 100;
  else if (battery >= 10) perfValue += 50;

  return Math.round(perfValue);
}

// Laptop data utilities (similar to TVDataUtils)
const LaptopDataUtils = {
  // Get best price for a laptop
  getBestPrice(laptop) {
    if (!laptop.prices || laptop.prices.length === 0) return null;
    const verified = laptop.prices.filter(p => p.inStock && p.lastChecked && !p.staleHidden);
    if (verified.length > 0) {
      return verified.reduce((best, current) =>
        current.currentPrice < best.currentPrice ? current : best
      );
    }
    const visible = laptop.prices.filter(p => !p.staleHidden);
    return visible[0] || laptop.prices[0];
  },

  // Calculate deal score (positive = good deal)
  calculateDealScore(laptop) {
    const bestPrice = this.getBestPrice(laptop);
    if (!bestPrice || !laptop.fairValue) return 0;
    return (laptop.fairValue - bestPrice.currentPrice) / laptop.fairValue;
  },

  // Get verdict based on deal score
  // dealScore = (fairValue - price) / fairValue
  // 0.35 means 35% below fair value, 0 means at fair value, negative means overpriced
  getVerdict(dealScore) {
    if (dealScore >= 0.35) return { text: 'A', subtitle: 'Great Deal', class: 'verdict-a' };
    if (dealScore >= 0) return { text: 'B', subtitle: 'Good Deal', class: 'verdict-b' };
    if (dealScore >= -0.15) return { text: 'C', subtitle: 'Fair Price', class: 'verdict-c' };
    if (dealScore >= -0.35) return { text: 'D', subtitle: 'Overpriced', class: 'verdict-d' };
    return { text: 'F', subtitle: 'Bad Deal', class: 'verdict-f' };
  },

  // Format price
  formatPrice(price) {
    if (price == null) return 'N/A';
    return '$' + price.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 });
  },

  // Format deal score as percentage
  formatDealScore(score) {
    const pct = (score * 100).toFixed(1);
    return score >= 0 ? `+${pct}%` : `${pct}%`;
  },

  // Get all unique brands
  getAllBrands() {
    const brands = [...new Set(LAPTOP_DATA.laptops.map(l => l.brand))];
    return brands.sort();
  },

  // Sort by deal score
  sortByDealScore(laptops) {
    return [...laptops].sort((a, b) => {
      const scoreA = this.calculateDealScore(a);
      const scoreB = this.calculateDealScore(b);
      return scoreB - scoreA;
    });
  },

  // Get retailer info
  getRetailer(retailerId) {
    const retailers = {
      bestbuy: { name: 'Best Buy', color: '#0046be' },
      amazon: { name: 'Amazon', color: '#ff9900' },
      walmart: { name: 'Walmart', color: '#0071dc' },
      dell: { name: 'Dell', color: '#007db8' },
      lenovo: { name: 'Lenovo', color: '#e2231a' },
      hp: { name: 'HP', color: '#0096d6' },
      apple: { name: 'Apple', color: '#000000' },
      newegg: { name: 'Newegg', color: '#f7931e' }
    };
    return retailers[retailerId] || { name: retailerId, color: '#6b7280' };
  }
};

// Size buckets for histogram
const SIZE_BUCKETS = [13, 13.3, 14, 15.6, 16, 17.3];

// Get the size bucket for a laptop
function getSizeBucket(size) {
  let closest = SIZE_BUCKETS[0];
  let minDiff = Math.abs(size - SIZE_BUCKETS[0]);
  SIZE_BUCKETS.forEach(s => {
    const diff = Math.abs(size - s);
    if (diff < minDiff) {
      minDiff = diff;
      closest = s;
    }
  });
  return closest;
}

// Render size histogram
function renderSizeHistogram() {
  const container = document.getElementById('size-histogram');
  if (!container) return;

  const sizeBuckets = {};
  SIZE_BUCKETS.forEach(s => sizeBuckets[s] = 0);

  AppState.laptops.forEach(laptop => {
    const bucket = getSizeBucket(laptop.screenSize);
    sizeBuckets[bucket] = (sizeBuckets[bucket] || 0) + 1;
  });

  const maxCount = Math.max(...Object.values(sizeBuckets));

  const bars = SIZE_BUCKETS.map(size => {
    const count = sizeBuckets[size] || 0;
    const heightPct = maxCount > 0 ? (count / maxCount) * 100 : 0;
    const isActive = AppState.filters.selectedSizes.includes(size);
    return `
      <div class="histogram-bar-container${isActive ? ' active' : ''}" data-size="${size}" title="${count} laptops at ${size}&quot;">
        <div class="histogram-bar" style="height: ${heightPct}%"></div>
        <span class="histogram-label">${size}"</span>
      </div>
    `;
  }).join('');

  container.innerHTML = `<div class="histogram-bars">${bars}</div>`;

  container.querySelectorAll('.histogram-bar-container').forEach(bar => {
    bar.addEventListener('click', handleHistogramClick);
  });
}

// Handle histogram bar click
function handleHistogramClick(e) {
  const size = parseFloat(e.currentTarget.dataset.size);
  const index = AppState.filters.selectedSizes.indexOf(size);

  if (index === -1) {
    AppState.filters.selectedSizes.push(size);
  } else {
    AppState.filters.selectedSizes.splice(index, 1);
  }

  renderSizeHistogram();
  applyFilters();
}

// Get quality tier based on Notebookcheck score
function getQualityTier(score) {
  if (score >= 90) return { tier: 5, label: 'Excellent' };
  if (score >= 85) return { tier: 4, label: 'Very Good' };
  if (score >= 80) return { tier: 3, label: 'Good' };
  if (score >= 70) return { tier: 2, label: 'Average' };
  return { tier: 1, label: 'Below Average' };
}

// Neutral inline placeholder — via.placeholder.com is defunct, so a broken
// product image must fall back to something that cannot itself 404.
const IMG_FALLBACK = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MDAiIGhlaWdodD0iMjUwIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZWNlN2RlIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE2IiBmaWxsPSIjOGE4MTc1IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIj5JbWFnZSB1bmF2YWlsYWJsZTwvdGV4dD48L3N2Zz4=';

// Display name without a duplicated brand prefix ("HP" + "HP OMEN" -> "OMEN").
function laptopDisplayName(laptop) {
  let name = (laptop.displayName || laptop.model || '').trim();
  const brand = (laptop.brand || '').trim();
  if (brand && name.toLowerCase().startsWith(brand.toLowerCase() + ' ')) {
    name = name.slice(brand.length + 1);
  }
  return name || laptop.model;
}

// Only display a price that has been verified (lastChecked set, in stock, not
// hidden as stale). The catalog shipped with no timestamps at all, so without
// this guard every laptop showed a catalog-era price as current — the same P0
// the TV finder fixed on 7/4.
function hasVerifiedPrice(laptop) {
  const p = LaptopDataUtils.getBestPrice(laptop);
  return !!(p && p.inStock && p.lastChecked && !p.staleHidden);
}

// Render quality stars
function renderQualityStars(score) {
  const { tier, label } = getQualityTier(score);
  const stars = '★'.repeat(tier) + '☆'.repeat(5 - tier);
  return `<span class="quality-rating" title="${label} - Overall quality rating based on Notebookcheck review"><span class="quality-label">Quality</span> ${stars}</span>`;
}

// Get use case stars
function getUseCaseStars(score) {
  if (score >= 9.0) return { stars: '★★★★★', tier: 5 };
  if (score >= 8.0) return { stars: '★★★★☆', tier: 4 };
  if (score >= 7.0) return { stars: '★★★☆☆', tier: 3 };
  if (score >= 6.0) return { stars: '★★☆☆☆', tier: 2 };
  return { stars: '★☆☆☆☆', tier: 1 };
}

// Render quick scores for laptop card
function renderQuickScores(laptop) {
  if (!laptop.useCaseScores) return '';

  const scores = laptop.useCaseScores;
  const badges = [];

  const makeBadge = (score, icon, label, tooltip) => {
    if (score == null) return null;
    const { stars } = getUseCaseStars(score);
    const isGood = score >= 8.0;
    const highlightClass = isGood ? 'highlighted' : '';
    return `<span class="quick-score ${highlightClass}" title="${tooltip}"><span class="use-icon">${icon}</span><span class="use-label">${label}</span> ${stars}</span>`;
  };

  if (scores.gaming != null) {
    badges.push(makeBadge(scores.gaming, '🎮', 'Gaming', 'Gaming performance - GPU power, thermals, and display quality'));
  }
  if (scores.productivity != null) {
    badges.push(makeBadge(scores.productivity, '💼', 'Productivity', 'Productivity score - CPU performance, RAM, and multitasking'));
  }
  if (scores.contentCreation != null) {
    badges.push(makeBadge(scores.contentCreation, '🎬', 'Creative', 'Content creation - CPU+GPU performance and color accuracy'));
  }
  if (scores.portable != null) {
    badges.push(makeBadge(scores.portable, '✈️', 'Portable', 'Portability - weight, battery life, and compact form factor'));
  }

  const validBadges = badges.filter(b => b);
  if (validBadges.length === 0) return '';

  return `<div class="tv-card-quick-scores">${validBadges.join('')}</div>`;
}

// Get grade tooltip
function getGradeTooltip(grade) {
  const tooltips = {
    'A': 'Great Deal - This laptop is priced 25%+ below our performance-based value. Exceptional value.',
    'B': 'Good Deal - This laptop is priced at or below our performance-based value (up to 25% below). Solid value.',
    'C': 'Fair Price - This laptop is priced up to 10% above our performance-based value.',
    'D': 'Not Recommended - This laptop is priced 10-25% above our performance-based value.',
    'F': 'Not Recommended - This laptop is priced 25%+ above our performance-based value.'
  };
  return tooltips[grade] || 'Deal grade based on comparing price to performance-based value.';
}

// Get real-world context for CPU benchmark
function getCpuContext(score) {
  if (score >= 20000) return { label: '4K video editing', desc: 'Handles 4K video editing, 3D rendering, and heavy multitasking with ease' };
  if (score >= 16000) return { label: '4K video capable', desc: 'Great for 4K video editing, software development, and running many apps' };
  if (score >= 12000) return { label: '1080p video editing', desc: 'Smooth 1080p video editing, coding, and moderate multitasking' };
  if (score >= 8000) return { label: 'Office & browsing', desc: 'Good for office work, web browsing, and light multitasking' };
  return { label: 'Basic tasks', desc: 'Suitable for web browsing, documents, and light tasks' };
}

// Get real-world context for GPU benchmark
function getGpuContext(score) {
  if (score >= 14000) return { label: 'Ray tracing ready', desc: 'AAA games at 1440p High with ray tracing, professional 3D work' };
  if (score >= 11000) return { label: 'AAA 1440p', desc: 'Modern AAA games at 1440p Medium-High, 1080p with ray tracing' };
  if (score >= 8000) return { label: 'AAA 1080p', desc: 'Most games at 1080p High settings, some ray tracing possible' };
  if (score >= 5000) return { label: '1080p Medium', desc: 'Older and esports titles at 1080p, newer games at Medium settings' };
  return { label: 'Light gaming', desc: 'Esports titles and older games, not for demanding AAA games' };
}

// Render benchmark badges for laptop card
function renderBenchmarkBadges(laptop) {
  const benchmarks = laptop.benchmarks || {};
  const badges = [];

  if (benchmarks.cinebenchR23Multi) {
    const score = benchmarks.cinebenchR23Multi;
    const ctx = getCpuContext(score);
    badges.push(`<span class="benchmark-badge cpu" title="CPU: ${ctx.desc} (Cinebench ${score.toLocaleString()})">🔧 ${ctx.label}</span>`);
  }

  if (benchmarks.timeSpyGraphics) {
    const score = benchmarks.timeSpyGraphics;
    const ctx = getGpuContext(score);
    badges.push(`<span class="benchmark-badge gpu" title="GPU: ${ctx.desc} (Time Spy ${score.toLocaleString()})">🎮 ${ctx.label}</span>`);
  }

  if (benchmarks.gaming1080pAvgFps) {
    const fps = benchmarks.gaming1080pAvgFps;
    // Reference Cyberpunk 2077 at 1080p High as a demanding benchmark
    const gameContext = fps >= 144 ? 'Ultra smooth' : fps >= 120 ? 'Very smooth' : fps >= 90 ? 'Smooth' : fps >= 60 ? 'Playable' : 'Choppy';
    badges.push(`<span class="benchmark-badge fps" title="Cyberpunk 2077 at 1080p High: ~${fps} FPS">⚡ ${fps} FPS in Cyberpunk</span>`);
  }

  if (badges.length === 0) return '';
  return `<div class="benchmark-badges">${badges.join('')}</div>`;
}

// Render a single laptop card
function renderLaptopCard(laptop) {
  const bestPrice = LaptopDataUtils.getBestPrice(laptop);
  if (!bestPrice) return '';

  const dealScore = LaptopDataUtils.calculateDealScore(laptop);
  const verdict = LaptopDataUtils.getVerdict(dealScore);
  const retailer = LaptopDataUtils.getRetailer(bestPrice.retailerId);

  const displayScore = -dealScore;
  const displayScorePct = (displayScore * 100).toFixed(1);
  const dealScoreFormatted = displayScore <= 0 ? `${displayScorePct}%` : `+${displayScorePct}%`;
  const dealScoreClass = displayScore <= 0 ? 'positive' : 'negative';
  const priceVerified = hasVerifiedPrice(laptop);

  const gradeTooltip = getGradeTooltip(verdict.text);

  // Build specs summary - extract model numbers without brand prefixes
  const specsSummary = [];
  if (laptop.cpu) {
    // Extract the meaningful part: "Intel Core i7-13700H" -> "i7-13700H", "AMD Ryzen 9 8945HS" -> "Ryzen 9 8945HS", "Apple M3 Pro" -> "M3 Pro"
    let cpuShort = laptop.cpu
      .replace(/^Intel Core\s*/i, '')
      .replace(/^AMD\s*/i, '')
      .replace(/^Apple\s*/i, '');
    specsSummary.push(cpuShort);
  }
  if (laptop.gpu) {
    // Extract GPU model: "NVIDIA RTX 4060" -> "RTX 4060", "AMD Radeon RX 7700S" -> "RX 7700S", "Intel Iris Xe" -> "Iris Xe"
    let gpuShort = laptop.gpu
      .replace(/^NVIDIA\s*/i, '')
      .replace(/^AMD Radeon\s*/i, '')
      .replace(/^Intel\s*/i, '')
      .replace(/^Apple\s*/i, '')
      .replace(/Graphics$/i, '').trim();
    specsSummary.push(gpuShort);
  }
  if (laptop.ram) specsSummary.push(`${laptop.ram}GB`);

  return `
    <article class="tv-card" data-laptop-id="${laptop.id}">
      <div class="tv-card-image">
        <img src="${laptop.image || IMG_FALLBACK}" alt="${laptop.fullName}" loading="lazy"
             onerror="this.onerror=null;this.src=IMG_FALLBACK">
        <span class="panel-badge">${laptop.displayType || 'LCD'}</span>
      </div>
      <div class="tv-card-content">
        <div class="tv-card-brand">${laptop.brand}</div>
        <h3 class="tv-card-title">${laptopDisplayName(laptop)} ${laptop.screenSize}"</h3>
        <div class="tv-card-model">${laptop.model}</div>
        <div class="tv-card-specs">
          ${laptop.notebookcheckScore ? `<span class="tv-card-spec">${renderQualityStars(laptop.notebookcheckScore)}</span>` : ''}
          <span class="tv-card-spec">${laptop.resolution || '1920x1080'}</span>
          <span class="tv-card-spec">${laptop.refreshRate || 60}Hz</span>
        </div>
        <div class="tv-card-specs" style="margin-top: 0.25rem; font-size: 0.75rem; color: var(--text-secondary);">
          ${specsSummary.join(' • ')}
        </div>
        ${renderBenchmarkBadges(laptop)}
        ${renderQuickScores(laptop)}
        <div class="tv-card-pricing">
          <div class="tv-card-price-grade-row">
            <div class="price-section">
              <div class="price-labeled">
                <span class="price-label">Sale Price</span>
                <span class="tv-card-price">${priceVerified ? LaptopDataUtils.formatPrice(bestPrice.currentPrice) : '<span class="price-verifying">Being verified</span>'}</span>
              </div>
              ${priceVerified && bestPrice.retailPrice > bestPrice.currentPrice
                ? `<div class="price-labeled msrp">
                    <span class="price-label">MSRP</span>
                    <span class="tv-card-retail">${LaptopDataUtils.formatPrice(bestPrice.retailPrice)}</span>
                  </div>`
                : ''}
            </div>
            <div class="grade-section">
              ${priceVerified
                ? `<span class="deal-badge ${verdict.class}" title="${gradeTooltip}">
                <span class="grade">${verdict.text}</span>
                <span class="grade-subtitle">${verdict.subtitle}</span>
              </span>`
                : `<span class="deal-badge verdict-na" title="We hide prices we couldn't re-verify recently. This laptop is awaiting a fresh price check.">
                <span class="grade">&hellip;</span>
                <span class="grade-subtitle">Verifying</span>
              </span>`}
            </div>
          </div>
          ${priceVerified ? `<div class="tv-card-retailer">at ${retailer?.name || 'Unknown'}</div>
          <div class="tv-card-deal-row">
            <span class="deal-score ${dealScoreClass}">${dealScoreFormatted} vs <span class="projected-tooltip">projected<span class="tooltip-content">Our projected price is calculated based on CPU/GPU benchmarks, RAM, storage, display quality, and build quality.</span></span></span>
            <div class="price-labeled projected">
              <span class="price-label">Projected</span>
              <span class="projected-value">${LaptopDataUtils.formatPrice(laptop.fairValue)}</span>
            </div>
          </div>` : `<div class="tv-card-retailer">Awaiting price verification</div>`}
        </div>
      </div>
    </article>
  `;
}

// Render laptop grid
function renderLaptopGrid() {
  const grid = document.getElementById('laptop-grid');
  if (!grid) return;

  if (AppState.filteredLaptops.length === 0) {
    grid.innerHTML = `
      <div class="no-results">
        <div class="no-results-icon">💻</div>
        <h3 class="no-results-title">No laptops match your filters</h3>
        <p class="no-results-text">Try adjusting your filters to see more results.</p>
      </div>
    `;
    return;
  }

  const cards = AppState.filteredLaptops.map(laptop => renderLaptopCard(laptop));
  grid.innerHTML = cards.join('');

  // Add click handlers
  document.querySelectorAll('.tv-card[data-laptop-id]').forEach(card => {
    card.addEventListener('click', () => {
      const laptopId = card.dataset.laptopId;
      window.location.href = `product.html?id=${laptopId}`;
    });
  });
}

// Render Deal of the Day
function renderDealOfDay() {
  const container = document.getElementById('deal-of-day');
  if (!container) return;

  // Deal of the Day only ever features a verified price
  const sortedByDeal = LaptopDataUtils.sortByDealScore(AppState.laptops.filter(hasVerifiedPrice));
  const bestDeal = sortedByDeal[0];
  if (!bestDeal) { container.style.display = 'none'; return; }

  const bestPrice = LaptopDataUtils.getBestPrice(bestDeal);
  const dealScore = LaptopDataUtils.calculateDealScore(bestDeal);
  const savingsPct = Math.abs(dealScore * 100).toFixed(0);

  const { label } = getQualityTier(bestDeal.notebookcheckScore || 80);

  container.innerHTML = `
    <a href="product.html?id=${bestDeal.id}" class="deal-of-day-card deal-of-day-link">
      <div class="deal-of-day-badge">Deal of the Day</div>
      <div class="deal-of-day-content">
        <div class="deal-of-day-header">
          <div class="deal-of-day-image">
            <img src="${bestDeal.image || IMG_FALLBACK}" alt="${bestDeal.fullName}"
                 onerror="this.onerror=null;this.src=IMG_FALLBACK">
          </div>
          <div>
            <div class="deal-of-day-title">${bestDeal.brand} ${laptopDisplayName(bestDeal)}</div>
            <div class="deal-of-day-subtitle">${bestDeal.cpu} • ${bestDeal.gpu} • ${bestDeal.ram}GB RAM</div>
          </div>
        </div>
        <p class="deal-of-day-writeup">The ${bestDeal.brand} ${laptopDisplayName(bestDeal)} is currently priced ${savingsPct}% below our performance-based value estimate. With ${bestDeal.cpu} and ${bestDeal.gpu}, this is an exceptional value for the performance you get.</p>
      </div>
      <div class="deal-of-day-cta">
        <div class="deal-of-day-price">${LaptopDataUtils.formatPrice(bestPrice.currentPrice)}</div>
        <div class="deal-of-day-savings">${savingsPct}% below projected</div>
        <span class="deal-of-day-btn">View Details &rarr;</span>
      </div>
    </a>
  `;
}

// Initialize filters
function initializeFilters() {
  // Size sliders
  const minSizeSlider = document.getElementById('min-size-slider');
  const maxSizeSlider = document.getElementById('max-size-slider');
  if (minSizeSlider && maxSizeSlider) {
    minSizeSlider.addEventListener('input', handleSizeSliderChange);
    maxSizeSlider.addEventListener('input', handleSizeSliderChange);
  }

  // Brand filters
  const brands = LaptopDataUtils.getAllBrands();
  const brandContainer = document.getElementById('brand-filters');
  if (brandContainer) {
    brandContainer.innerHTML = brands.map(brand =>
      `<button class="filter-chip" data-filter="brand" data-value="${brand}">${brand}</button>`
    ).join('');
  }

  // Add click handlers
  document.querySelectorAll('.filter-chip').forEach(chip => {
    chip.addEventListener('click', handleFilterClick);
  });

  // Grade slider
  const gradeSlider = document.getElementById('grade-slider');
  if (gradeSlider) {
    gradeSlider.addEventListener('input', handleGradeChange);
  }

  // RAM slider
  const ramSlider = document.getElementById('ram-slider');
  if (ramSlider) {
    ramSlider.addEventListener('input', handleRamChange);
  }

  // Benchmark sliders
  const cpuPerfSlider = document.getElementById('cpu-perf-slider');
  if (cpuPerfSlider) {
    cpuPerfSlider.addEventListener('input', handleCpuPerfChange);
  }

  const gpuPerfSlider = document.getElementById('gpu-perf-slider');
  if (gpuPerfSlider) {
    gpuPerfSlider.addEventListener('input', handleGpuPerfChange);
  }

  const gamingFpsSlider = document.getElementById('gaming-fps-slider');
  if (gamingFpsSlider) {
    gamingFpsSlider.addEventListener('input', handleGamingFpsChange);
  }

  // Price inputs
  const minPriceInput = document.getElementById('min-price');
  const maxPriceInput = document.getElementById('max-price');
  if (minPriceInput) minPriceInput.addEventListener('input', handlePriceChange);
  if (maxPriceInput) maxPriceInput.addEventListener('input', handlePriceChange);

  // Clear filters
  const clearBtn = document.getElementById('clear-filters');
  if (clearBtn) {
    clearBtn.addEventListener('click', clearFilters);
  }

  // Sort dropdown
  const sortSelect = document.getElementById('sort-select');
  if (sortSelect) {
    sortSelect.addEventListener('change', handleSortChange);
  }

  // Use case presets
  document.querySelectorAll('.preset-btn').forEach(btn => {
    btn.addEventListener('click', handlePresetClick);
  });
}

// Handle size slider change
function handleSizeSliderChange() {
  const minSlider = document.getElementById('min-size-slider');
  const maxSlider = document.getElementById('max-size-slider');
  const minLabel = document.getElementById('min-size-label');
  const maxLabel = document.getElementById('max-size-label');

  let minVal = parseFloat(minSlider.value);
  let maxVal = parseFloat(maxSlider.value);

  if (minVal > maxVal) {
    if (this.id === 'min-size-slider') {
      maxSlider.value = minVal;
      maxVal = minVal;
    } else {
      minSlider.value = maxVal;
      minVal = maxVal;
    }
  }

  AppState.filters.minSize = minVal;
  AppState.filters.maxSize = maxVal;

  if (AppState.filters.selectedSizes.length > 0) {
    AppState.filters.selectedSizes = [];
    renderSizeHistogram();
  }

  if (minLabel) minLabel.textContent = `${minVal}"`;
  if (maxLabel) maxLabel.textContent = `${maxVal}"`;

  applyFilters();
}

// Handle filter chip click
function handleFilterClick(e) {
  const chip = e.target;
  const filterType = chip.dataset.filter;
  const value = chip.dataset.value;

  chip.classList.toggle('active');

  const toggleFilter = (array, val) => {
    const idx = array.indexOf(val);
    if (idx === -1) array.push(val);
    else array.splice(idx, 1);
  };

  if (filterType === 'brand') {
    toggleFilter(AppState.filters.brands, value);
  } else if (filterType === 'cpuBrand') {
    toggleFilter(AppState.filters.cpuBrands, value);
  } else if (filterType === 'gpuBrand') {
    toggleFilter(AppState.filters.gpuBrands, value);
  } else if (filterType === 'displayType') {
    toggleFilter(AppState.filters.displayTypes, value);
  }

  applyFilters();
}

// Handle grade slider change
function handleGradeChange(e) {
  const value = parseInt(e.target.value);
  const gradeThresholds = [-Infinity, -0.25, -0.10, 0.10, 0.25];
  const gradeLabels = ['All Grades', 'D or Better', 'C or Better', 'B or Better', 'A Only'];

  AppState.filters.minDealScore = gradeThresholds[value];

  const label = document.getElementById('grade-value');
  if (label) {
    label.textContent = gradeLabels[value];
  }

  applyFilters();
}

// Handle RAM slider change
function handleRamChange(e) {
  const value = parseInt(e.target.value);
  const ramThresholds = [0, 16, 32, 64, 128];
  const ramLabels = ['All RAM', '16GB+', '32GB+', '64GB+', '128GB+'];

  AppState.filters.minRam = ramThresholds[value];

  const label = document.getElementById('ram-value');
  if (label) {
    label.textContent = ramLabels[value];
  }

  applyFilters();
}

// Handle CPU performance slider change
function handleCpuPerfChange(e) {
  const value = parseInt(e.target.value);
  const labels = [
    'All CPUs',
    'Office & browsing',
    '1080p video editing',
    '4K video editing',
    'Pro rendering & 3D'
  ];

  AppState.filters.minCpuPerf = BENCHMARK_THRESHOLDS.cpu[value];

  const label = document.getElementById('cpu-perf-value');
  if (label) {
    label.textContent = labels[value];
  }

  applyFilters();
}

// Handle GPU performance slider change
function handleGpuPerfChange(e) {
  const value = parseInt(e.target.value);
  const labels = [
    'All GPUs',
    '1080p Medium gaming',
    '1080p High gaming',
    '1440p gaming',
    'Ray tracing capable'
  ];

  AppState.filters.minGpuPerf = BENCHMARK_THRESHOLDS.gpu[value];

  const label = document.getElementById('gpu-perf-value');
  if (label) {
    label.textContent = labels[value];
  }

  applyFilters();
}

// Handle gaming FPS slider change
function handleGamingFpsChange(e) {
  const value = parseInt(e.target.value);
  const labels = [
    'Any FPS',
    '60+ FPS (playable)',
    '90+ FPS (smooth)',
    '120+ FPS (very smooth)',
    '144+ FPS (ultra smooth)'
  ];

  AppState.filters.minGamingFps = BENCHMARK_THRESHOLDS.fps[value];

  const label = document.getElementById('gaming-fps-value');
  if (label) {
    label.textContent = labels[value];
  }

  applyFilters();
}

// Handle price change
function handlePriceChange() {
  const minInput = document.getElementById('min-price');
  const maxInput = document.getElementById('max-price');

  AppState.filters.minPrice = minInput?.value ? parseInt(minInput.value) : 0;
  AppState.filters.maxPrice = maxInput?.value ? parseInt(maxInput.value) : Infinity;

  applyFilters();
}

// Handle sort change
function handleSortChange(e) {
  AppState.sortBy = e.target.value;
  applyFilters();
}

// Handle use case preset click
function handlePresetClick(e) {
  const preset = e.currentTarget.dataset.preset;

  // Toggle preset
  document.querySelectorAll('.preset-btn').forEach(btn => {
    btn.classList.remove('active');
  });

  if (AppState.filters.useCase === preset) {
    AppState.filters.useCase = null;
  } else {
    AppState.filters.useCase = preset;
    e.currentTarget.classList.add('active');
  }

  applyFilters();
}

// Clear all filters
function clearFilters() {
  AppState.filters = {
    minSize: 13,
    maxSize: 18,
    selectedSizes: [],
    brands: [],
    cpuBrands: [],
    gpuBrands: [],
    minRam: 0,
    displayTypes: [],
    minDealScore: -Infinity,
    minPrice: 0,
    maxPrice: Infinity,
    useCase: null,
    minCpuPerf: 0,
    minGpuPerf: 0,
    minGamingFps: 0
  };

  // Reset UI
  document.querySelectorAll('.filter-chip.active').forEach(chip => {
    chip.classList.remove('active');
  });
  document.querySelectorAll('.preset-btn.active').forEach(btn => {
    btn.classList.remove('active');
  });

  const minSizeSlider = document.getElementById('min-size-slider');
  const maxSizeSlider = document.getElementById('max-size-slider');
  const minSizeLabel = document.getElementById('min-size-label');
  const maxSizeLabel = document.getElementById('max-size-label');
  if (minSizeSlider) minSizeSlider.value = 13;
  if (maxSizeSlider) maxSizeSlider.value = 18;
  if (minSizeLabel) minSizeLabel.textContent = '13"';
  if (maxSizeLabel) maxSizeLabel.textContent = '18"';

  renderSizeHistogram();

  const gradeSlider = document.getElementById('grade-slider');
  if (gradeSlider) gradeSlider.value = 0;
  const gradeLabel = document.getElementById('grade-value');
  if (gradeLabel) gradeLabel.textContent = 'All Grades';

  const ramSlider = document.getElementById('ram-slider');
  if (ramSlider) ramSlider.value = 0;
  const ramLabel = document.getElementById('ram-value');
  if (ramLabel) ramLabel.textContent = 'All RAM';

  // Reset benchmark sliders
  const cpuPerfSlider = document.getElementById('cpu-perf-slider');
  if (cpuPerfSlider) cpuPerfSlider.value = 0;
  const cpuPerfLabel = document.getElementById('cpu-perf-value');
  if (cpuPerfLabel) cpuPerfLabel.textContent = 'All CPUs';

  const gpuPerfSlider = document.getElementById('gpu-perf-slider');
  if (gpuPerfSlider) gpuPerfSlider.value = 0;
  const gpuPerfLabel = document.getElementById('gpu-perf-value');
  if (gpuPerfLabel) gpuPerfLabel.textContent = 'All GPUs';

  const gamingFpsSlider = document.getElementById('gaming-fps-slider');
  if (gamingFpsSlider) gamingFpsSlider.value = 0;
  const gamingFpsLabel = document.getElementById('gaming-fps-value');
  if (gamingFpsLabel) gamingFpsLabel.textContent = 'Any FPS';

  const minPriceInput = document.getElementById('min-price');
  const maxPriceInput = document.getElementById('max-price');
  if (minPriceInput) minPriceInput.value = '';
  if (maxPriceInput) maxPriceInput.value = '';

  applyFilters();
}

// Apply filters and re-render
function applyFilters() {
  let filtered = AppState.laptops;

  // Size filter
  if (AppState.filters.selectedSizes.length > 0) {
    filtered = filtered.filter(laptop => {
      const bucket = getSizeBucket(laptop.screenSize);
      return AppState.filters.selectedSizes.includes(bucket);
    });
  } else {
    filtered = filtered.filter(laptop =>
      laptop.screenSize >= AppState.filters.minSize && laptop.screenSize <= AppState.filters.maxSize
    );
  }

  // Brand filter
  if (AppState.filters.brands.length > 0) {
    filtered = filtered.filter(laptop => AppState.filters.brands.includes(laptop.brand));
  }

  // CPU brand filter
  if (AppState.filters.cpuBrands.length > 0) {
    filtered = filtered.filter(laptop => {
      const cpuBrand = laptop.cpu?.includes('Intel') ? 'Intel' :
                       laptop.cpu?.includes('AMD') ? 'AMD' :
                       laptop.cpu?.includes('Apple') ? 'Apple' : '';
      return AppState.filters.cpuBrands.includes(cpuBrand);
    });
  }

  // GPU brand filter
  if (AppState.filters.gpuBrands.length > 0) {
    filtered = filtered.filter(laptop => {
      const gpuBrand = laptop.gpu?.includes('NVIDIA') || laptop.gpu?.includes('RTX') || laptop.gpu?.includes('GTX') ? 'NVIDIA' :
                       laptop.gpu?.includes('Radeon') ? 'AMD' :
                       laptop.gpu?.includes('Intel') ? 'Intel' :
                       laptop.gpu?.includes('Apple') || laptop.gpu?.includes('M1') || laptop.gpu?.includes('M2') || laptop.gpu?.includes('M3') || laptop.gpu?.includes('M4') ? 'Apple' : '';
      return AppState.filters.gpuBrands.includes(gpuBrand);
    });
  }

  // RAM filter
  if (AppState.filters.minRam > 0) {
    filtered = filtered.filter(laptop => laptop.ram >= AppState.filters.minRam);
  }

  // CPU performance filter (Cinebench R23 Multi)
  if (AppState.filters.minCpuPerf > 0) {
    filtered = filtered.filter(laptop => {
      const cpuScore = laptop.benchmarks?.cinebenchR23Multi || 0;
      return cpuScore >= AppState.filters.minCpuPerf;
    });
  }

  // GPU performance filter (3DMark Time Spy)
  if (AppState.filters.minGpuPerf > 0) {
    filtered = filtered.filter(laptop => {
      const gpuScore = laptop.benchmarks?.timeSpyGraphics || 0;
      return gpuScore >= AppState.filters.minGpuPerf;
    });
  }

  // Gaming FPS filter
  if (AppState.filters.minGamingFps > 0) {
    filtered = filtered.filter(laptop => {
      const fps = laptop.benchmarks?.gaming1080pAvgFps || 0;
      return fps >= AppState.filters.minGamingFps;
    });
  }

  // Display type filter
  if (AppState.filters.displayTypes.length > 0) {
    filtered = filtered.filter(laptop => AppState.filters.displayTypes.includes(laptop.displayType));
  }

  // Deal score filter
  filtered = filtered.filter(laptop => {
    const dealScore = LaptopDataUtils.calculateDealScore(laptop);
    return dealScore >= AppState.filters.minDealScore;
  });

  // Price filter
  filtered = filtered.filter(laptop => {
    const bestPrice = LaptopDataUtils.getBestPrice(laptop);
    if (!bestPrice) return false;
    if (!hasVerifiedPrice(laptop)) {
      // Unverified price: only keep when the user hasn't narrowed by price
      return AppState.filters.minPrice <= 0 && !((AppState.filters.maxPrice || Infinity) < Infinity);
    }
    return bestPrice.currentPrice >= AppState.filters.minPrice &&
           bestPrice.currentPrice <= (AppState.filters.maxPrice || Infinity);
  });

  // Use case filter
  if (AppState.filters.useCase) {
    const scoreKey = AppState.filters.useCase === 'content-creation' ? 'contentCreation' : AppState.filters.useCase;
    filtered = filtered.filter(laptop => {
      const score = laptop.useCaseScores?.[scoreKey];
      return score != null && score >= 7.0; // Only show laptops with decent scores for the use case
    });
  }

  // Sort
  if (AppState.sortBy === 'dealScore') {
    filtered = LaptopDataUtils.sortByDealScore(filtered);
  } else if (AppState.sortBy === 'priceLow') {
    filtered = [...filtered].sort((a, b) => {
      const priceA = LaptopDataUtils.getBestPrice(a)?.currentPrice || Infinity;
      const priceB = LaptopDataUtils.getBestPrice(b)?.currentPrice || Infinity;
      return priceA - priceB;
    });
  } else if (AppState.sortBy === 'priceHigh') {
    filtered = [...filtered].sort((a, b) => {
      const priceA = LaptopDataUtils.getBestPrice(a)?.currentPrice || 0;
      const priceB = LaptopDataUtils.getBestPrice(b)?.currentPrice || 0;
      return priceB - priceA;
    });
  } else if (AppState.sortBy === 'performance') {
    filtered = [...filtered].sort((a, b) => {
      const perfA = a.benchmarks?.timeSpyGraphics || 0;
      const perfB = b.benchmarks?.timeSpyGraphics || 0;
      return perfB - perfA;
    });
  } else if (AppState.sortBy === 'portable') {
    filtered = [...filtered].sort((a, b) => {
      const portA = a.weight || 10;
      const portB = b.weight || 10;
      return portA - portB; // Lighter first
    });
  }

  // Laptops awaiting price verification sort after verified ones on price/deal sorts
  if (['dealScore', 'priceLow', 'priceHigh'].includes(AppState.sortBy)) {
    filtered = [...filtered.filter(hasVerifiedPrice), ...filtered.filter(l => !hasVerifiedPrice(l))];
  }

  AppState.filteredLaptops = filtered;
  renderLaptopGrid();
  updateStats();
}

// Update stats
function updateStats() {
  const countEl = document.getElementById('laptop-count');
  if (countEl) {
    countEl.textContent = `${AppState.filteredLaptops.length} Laptops`;
  }

  const totalEl = document.getElementById('total-count');
  if (totalEl) {
    totalEl.textContent = AppState.laptops.length;
  }

  const greatDeals = AppState.filteredLaptops.filter(laptop => {
    if (!hasVerifiedPrice(laptop)) return false;
    const dealScore = LaptopDataUtils.calculateDealScore(laptop);
    return dealScore >= 0.35;  // A-grade threshold
  }).length;

  const dealsEl = document.getElementById('deals-count');
  if (dealsEl) {
    dealsEl.textContent = greatDeals;
  }
}

// Initialize the application
function init() {
  // Check if data is loaded
  if (typeof LAPTOP_DATA === 'undefined') {
    console.warn('LAPTOP_DATA not loaded, using empty array');
    AppState.laptops = [];
  } else {
    AppState.laptops = LAPTOP_DATA.laptops || [];
  }

  // Keep laptops without a live price browsable — they render as "Being
  // verified" (TV finder behavior). Only drop entries with no price data at all.
  AppState.laptops = AppState.laptops.filter(laptop =>
    laptop.prices && laptop.prices.length > 0
  );

  // Use pre-calculated fair values from data.js (only calculate if missing)
  AppState.laptops.forEach(laptop => {
    if (!laptop.fairValue) {
      laptop.fairValue = calculateFairValue(laptop);
    }
  });

  const initialSorted = LaptopDataUtils.sortByDealScore(AppState.laptops);
  AppState.filteredLaptops = [...initialSorted.filter(hasVerifiedPrice), ...initialSorted.filter(l => !hasVerifiedPrice(l))];

  initializeFilters();
  initializeAISearch();
  renderSizeHistogram();
  renderDealOfDay();
  renderLaptopGrid();
  updateStats();
}

// ===== AI SEARCH & NEW UI =====

// Rate limiting for AI queries
const AI_RATE_LIMIT = {
  maxQueries: 5,
  windowMs: 10 * 60 * 1000, // 10 minutes
  queries: []
};

function canMakeAIQuery() {
  const now = Date.now();
  // Remove old queries outside the window
  AI_RATE_LIMIT.queries = AI_RATE_LIMIT.queries.filter(t => now - t < AI_RATE_LIMIT.windowMs);
  return AI_RATE_LIMIT.queries.length < AI_RATE_LIMIT.maxQueries;
}

function recordAIQuery() {
  AI_RATE_LIMIT.queries.push(Date.now());
}

function getTimeUntilReset() {
  if (AI_RATE_LIMIT.queries.length === 0) return 0;
  const oldest = Math.min(...AI_RATE_LIMIT.queries);
  const resetTime = oldest + AI_RATE_LIMIT.windowMs;
  return Math.max(0, Math.ceil((resetTime - Date.now()) / 60000)); // minutes
}

function initializeAISearch() {
  // Filters toggle
  const filtersToggle = document.getElementById('filters-toggle');
  const filtersSidebar = document.getElementById('filters-sidebar');

  if (filtersToggle && filtersSidebar) {
    filtersToggle.addEventListener('click', () => {
      const isExpanded = filtersSidebar.classList.contains('filters-expanded');
      if (isExpanded) {
        filtersSidebar.classList.remove('filters-expanded');
        filtersSidebar.classList.add('filters-collapsed');
        filtersToggle.classList.remove('expanded');
      } else {
        filtersSidebar.classList.remove('filters-collapsed');
        filtersSidebar.classList.add('filters-expanded');
        filtersToggle.classList.add('expanded');
      }
    });
  }

  // Use case buttons (new UI)
  document.querySelectorAll('.use-case-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const preset = btn.dataset.preset;

      // Toggle active state
      document.querySelectorAll('.use-case-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // Trigger the existing preset logic
      handlePresetClick({ target: { dataset: { preset } } });
    });
  });

  // AI search input
  const aiInput = document.getElementById('ai-search-input');
  const aiBtn = document.getElementById('ai-search-btn');
  const aiStatus = document.getElementById('ai-search-status');

  if (aiInput && aiBtn) {
    // Submit on Enter key
    aiInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        handleAISearch();
      }
    });

    // Submit on button click
    aiBtn.addEventListener('click', handleAISearch);
  }
}

async function handleAISearch() {
  const aiInput = document.getElementById('ai-search-input');
  const aiBtn = document.getElementById('ai-search-btn');
  const aiStatus = document.getElementById('ai-search-status');

  const query = aiInput.value.trim();
  if (!query) {
    aiStatus.textContent = 'Please describe what you\'re looking for';
    aiStatus.className = 'ai-search-status error';
    return;
  }

  // Check rate limit
  if (!canMakeAIQuery()) {
    const waitTime = getTimeUntilReset();
    aiStatus.innerHTML = `🤖 <em>Our AI assistant is taking a quick coffee break!</em><br>Try again in ${waitTime} minute${waitTime !== 1 ? 's' : ''}, or use the filters below.`;
    aiStatus.className = 'ai-search-status error';
    return;
  }

  // Show loading state
  aiBtn.disabled = true;
  aiStatus.textContent = '✨ Thinking...';
  aiStatus.className = 'ai-search-status';

  try {
    // For now, use keyword matching. Will be replaced with Claude API.
    const filters = parseQueryKeywords(query);
    recordAIQuery();

    // Apply the filters
    applyAIFilters(filters);

    aiStatus.textContent = `Found ${AppState.filteredLaptops.length} laptops matching your needs`;
    aiStatus.className = 'ai-search-status success';
  } catch (error) {
    console.error('AI search error:', error);
    aiStatus.textContent = 'Something went wrong. Try using the filters instead.';
    aiStatus.className = 'ai-search-status error';
  } finally {
    aiBtn.disabled = false;
  }
}

// Keyword-based query parsing (fallback/placeholder for Claude API)
function parseQueryKeywords(query) {
  const q = query.toLowerCase();
  const filters = {};

  // Price detection
  const priceMatch = q.match(/under\s*\$?(\d+)/i) || q.match(/\$?(\d+)\s*budget/i) || q.match(/max\s*\$?(\d+)/i);
  if (priceMatch) {
    filters.maxPrice = parseInt(priceMatch[1]);
  }

  const minPriceMatch = q.match(/over\s*\$?(\d+)/i) || q.match(/at least\s*\$?(\d+)/i);
  if (minPriceMatch) {
    filters.minPrice = parseInt(minPriceMatch[1]);
  }

  // Use case detection
  if (q.includes('gaming') || q.includes('game') || q.includes('fps')) {
    filters.useCase = 'gaming';
  } else if (q.includes('video edit') || q.includes('editing') || q.includes('creative') || q.includes('content')) {
    filters.useCase = 'content-creation';
  } else if (q.includes('student') || q.includes('school') || q.includes('college')) {
    filters.useCase = 'student';
  } else if (q.includes('work') || q.includes('office') || q.includes('productivity') || q.includes('coding') || q.includes('programming')) {
    filters.useCase = 'productivity';
  } else if (q.includes('portable') || q.includes('light') || q.includes('travel') || q.includes('thin')) {
    filters.useCase = 'portable';
  }

  // RAM detection
  if (q.includes('32gb') || q.includes('32 gb')) {
    filters.minRam = 32;
  } else if (q.includes('16gb') || q.includes('16 gb')) {
    filters.minRam = 16;
  }

  // Brand detection
  if (q.includes('apple') || q.includes('mac')) {
    filters.brand = 'Apple';
  } else if (q.includes('dell')) {
    filters.brand = 'Dell';
  } else if (q.includes('lenovo')) {
    filters.brand = 'Lenovo';
  } else if (q.includes('hp') || q.includes('hewlett')) {
    filters.brand = 'HP';
  } else if (q.includes('asus')) {
    filters.brand = 'ASUS';
  }

  return filters;
}

function applyAIFilters(filters) {
  // Clear existing filters first
  clearFilters();

  // Apply parsed filters
  if (filters.maxPrice) {
    const maxPriceInput = document.getElementById('max-price');
    if (maxPriceInput) {
      maxPriceInput.value = filters.maxPrice;
      AppState.filters.maxPrice = filters.maxPrice;
    }
  }

  if (filters.minPrice) {
    const minPriceInput = document.getElementById('min-price');
    if (minPriceInput) {
      minPriceInput.value = filters.minPrice;
      AppState.filters.minPrice = filters.minPrice;
    }
  }

  if (filters.useCase) {
    AppState.filters.useCase = filters.useCase;
    // Update use case buttons
    document.querySelectorAll('.use-case-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.preset === filters.useCase);
    });
  }

  if (filters.minRam) {
    AppState.filters.minRam = filters.minRam;
  }

  if (filters.brand) {
    AppState.filters.brands = [filters.brand];
  }

  // Reapply filters and render
  applyFilters();
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', init);
