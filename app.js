/**
 * TV Deal Finder - Main Application
 */

// Application state
const AppState = {
  tvs: [],
  filteredTvs: [],
  filters: {
    minSize: 40,
    maxSize: 120,
    selectedSizes: [], // Specific sizes selected from histogram
    panelTypes: [],
    brands: [],
    minDealScore: -Infinity,
    minPrice: 0,
    maxPrice: Infinity,
    useCases: [] // Active use-case filters: 'gaming', 'movies', 'sports', 'tvshows', 'pc'
  },
  sortBy: 'dealScore'
};

// Generate Deal of the Day writeup
function generateDealWriteup(tv, dealScore, bestPrice) {
  const savingsPct = Math.abs(dealScore * 100).toFixed(0);
  const panelDescriptions = {
    'QD-OLED': 'QD-OLED technology delivers the best of both worlds—quantum dot brightness and color with perfect OLED blacks',
    'OLED': 'OLED technology provides perfect blacks and infinite contrast for stunning picture quality',
    'Mini LED': 'Mini LED backlighting offers exceptional brightness with precise local dimming for deep blacks',
    'QLED': 'QLED technology delivers bright, vivid colors powered by quantum dots',
    'LED': 'LED technology provides reliable picture quality and good value'
  };

  const panelDesc = panelDescriptions[tv.panelType] || 'advanced display technology';

  // Build writeup
  let writeup = `The ${tv.brand} ${tv.model} ${tv.size}" is currently priced ${savingsPct}% below our projected value`;

  if (bestPrice.retailPrice > bestPrice.currentPrice) {
    const retailSavings = Math.round((1 - bestPrice.currentPrice / bestPrice.retailPrice) * 100);
    writeup += `, and ${retailSavings}% off its MSRP of ${TVDataUtils.formatPrice(bestPrice.retailPrice)}`;
  }

  writeup += `. ${panelDesc}. `;

  // Add use case highlights
  const scores = tv.useCaseScores || {};
  const highlights = [];
  if (scores.movieScore >= 8.0) highlights.push('movies');
  if (scores.gamingScore >= 8.0 || scores.hdrGamingScore >= 8.0) highlights.push('gaming');
  if (scores.sportsScore >= 8.0) highlights.push('sports');

  if (highlights.length > 0) {
    writeup += `It excels at ${highlights.join(' and ')}, making it an exceptional value at this price.`;
  } else {
    writeup += `At this price point, it's an outstanding value for anyone in the market for a quality TV.`;
  }

  return writeup;
}

// Render Deal of the Day
function renderDealOfDay() {
  const container = document.getElementById('deal-of-day');
  if (!container) return;

  // Get the best deal (exclude super-big TVs since we can't accurately project their value)
  const eligibleTvs = AppState.tvs.filter(tv => !isSuperBigTV(tv));
  const sortedByDeal = TVDataUtils.sortByDealScore(eligibleTvs);
  const bestDeal = sortedByDeal[0];
  if (!bestDeal) return;

  const bestPrice = TVDataUtils.getBestPrice(bestDeal);
  const dealScore = TVDataUtils.calculateDealScore(bestDeal);
  const retailer = TVDataUtils.getRetailer(bestPrice?.retailerId);
  const savingsPct = Math.abs(dealScore * 100).toFixed(0);

  const writeup = generateDealWriteup(bestDeal, dealScore, bestPrice);

  container.innerHTML = `
    <div class="deal-of-day-card">
      <div class="deal-of-day-badge">Deal of the Day</div>
      <div class="deal-of-day-content">
        <div class="deal-of-day-header">
          <div class="deal-of-day-image">
            <img src="${bestDeal.image}" alt="${bestDeal.fullName}">
          </div>
          <div>
            <div class="deal-of-day-title">${bestDeal.brand} ${bestDeal.model} ${bestDeal.size}"</div>
            <div class="deal-of-day-subtitle">${bestDeal.panelType} • ${bestDeal.resolution} • ${getQualityTier(bestDeal.rtingsScore).label}</div>
          </div>
        </div>
        <p class="deal-of-day-writeup">${writeup}</p>
      </div>
      <div class="deal-of-day-cta">
        <div class="deal-of-day-price">${TVDataUtils.formatPrice(bestPrice.currentPrice)}</div>
        <div class="deal-of-day-savings">${savingsPct}% below <span class="projected-tooltip">projected<span class="tooltip-content">Our projected price is calculated based on screen size, panel technology (OLED, Mini LED, etc.), and RTINGS review scores.</span></span></div>
        <a href="${bestPrice.url}" target="_blank" class="deal-of-day-btn">View at ${retailer?.name || 'Retailer'}</a>
      </div>
    </div>
  `;
}

// Size buckets for histogram
const SIZE_BUCKETS = [42, 48, 50, 55, 65, 75, 77, 83, 85, 98, 114];

// Get the size bucket for a TV
function getSizeBucket(tvSize) {
  let closest = SIZE_BUCKETS[0];
  let minDiff = Math.abs(tvSize - SIZE_BUCKETS[0]);
  SIZE_BUCKETS.forEach(s => {
    const diff = Math.abs(tvSize - s);
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

  // Count TVs by size bucket
  const sizeBuckets = {};
  SIZE_BUCKETS.forEach(s => sizeBuckets[s] = 0);

  AppState.tvs.forEach(tv => {
    const bucket = getSizeBucket(tv.size);
    sizeBuckets[bucket] = (sizeBuckets[bucket] || 0) + 1;
  });

  const maxCount = Math.max(...Object.values(sizeBuckets));

  // Build histogram HTML
  const bars = SIZE_BUCKETS.map(size => {
    const count = sizeBuckets[size] || 0;
    const heightPct = maxCount > 0 ? (count / maxCount) * 100 : 0;
    const isActive = AppState.filters.selectedSizes.includes(size);
    return `
      <div class="histogram-bar-container${isActive ? ' active' : ''}" data-size="${size}" title="${count} TVs at ${size}&quot;">
        <div class="histogram-bar" style="height: ${heightPct}%"></div>
        <span class="histogram-label">${size}</span>
      </div>
    `;
  }).join('');

  container.innerHTML = `<div class="histogram-bars">${bars}</div>`;

  // Add click handlers
  container.querySelectorAll('.histogram-bar-container').forEach(bar => {
    bar.addEventListener('click', handleHistogramClick);
  });
}

// Handle histogram bar click
function handleHistogramClick(e) {
  const size = parseInt(e.currentTarget.dataset.size);
  const index = AppState.filters.selectedSizes.indexOf(size);

  if (index === -1) {
    // Add size to selection
    AppState.filters.selectedSizes.push(size);
  } else {
    // Remove size from selection
    AppState.filters.selectedSizes.splice(index, 1);
  }

  // Update histogram display
  renderSizeHistogram();

  // Apply filters
  applyFilters();
}

// Initialize the application
function init() {
  // Load TV data
  AppState.tvs = TV_DATA.tvs;
  AppState.filteredTvs = TVDataUtils.sortByDealScore(AppState.tvs);

  // Initialize filters
  initializeFilters();

  // Render size histogram
  renderSizeHistogram();

  // Render Deal of the Day
  renderDealOfDay();

  // Render the grid
  renderTVGrid();

  // Update stats
  updateStats();
}

// Initialize filter UI
function initializeFilters() {
  // Size slider filters
  const minSizeSlider = document.getElementById('min-size-slider');
  const maxSizeSlider = document.getElementById('max-size-slider');
  if (minSizeSlider && maxSizeSlider) {
    minSizeSlider.addEventListener('input', handleSizeSliderChange);
    maxSizeSlider.addEventListener('input', handleSizeSliderChange);
  }

  // Panel type filters
  const panelTypes = TVDataUtils.getAllPanelTypes();
  const panelContainer = document.getElementById('panel-filters');
  if (panelContainer) {
    panelContainer.innerHTML = panelTypes.map(type =>
      `<button class="filter-chip" data-filter="panelType" data-value="${type}">${type}</button>`
    ).join('');
  }

  // Brand filters
  const brands = TVDataUtils.getAllBrands();
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

  // Price range inputs
  const minPriceInput = document.getElementById('min-price');
  const maxPriceInput = document.getElementById('max-price');
  if (minPriceInput) minPriceInput.addEventListener('input', handlePriceChange);
  if (maxPriceInput) maxPriceInput.addEventListener('input', handlePriceChange);

  // Clear filters button
  const clearBtn = document.getElementById('clear-filters');
  if (clearBtn) {
    clearBtn.addEventListener('click', clearFilters);
  }

  // Sort dropdown
  const sortSelect = document.getElementById('sort-select');
  if (sortSelect) {
    sortSelect.addEventListener('change', handleSortChange);
  }
}

// Handle size slider change
function handleSizeSliderChange() {
  const minSlider = document.getElementById('min-size-slider');
  const maxSlider = document.getElementById('max-size-slider');
  const minLabel = document.getElementById('min-size-label');
  const maxLabel = document.getElementById('max-size-label');

  let minVal = parseInt(minSlider.value);
  let maxVal = parseInt(maxSlider.value);

  // Ensure min doesn't exceed max
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

  // Clear histogram selections when slider is used
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

  // Update filter state
  if (filterType === 'panelType') {
    if (AppState.filters.panelTypes.includes(value)) {
      AppState.filters.panelTypes = AppState.filters.panelTypes.filter(p => p !== value);
    } else {
      AppState.filters.panelTypes.push(value);
    }
  } else if (filterType === 'brand') {
    if (AppState.filters.brands.includes(value)) {
      AppState.filters.brands = AppState.filters.brands.filter(b => b !== value);
    } else {
      AppState.filters.brands.push(value);
    }
  } else if (filterType === 'useCase') {
    if (AppState.filters.useCases.includes(value)) {
      AppState.filters.useCases = AppState.filters.useCases.filter(u => u !== value);
    } else {
      AppState.filters.useCases.push(value);
    }
  }

  applyFilters();
}

// Handle grade slider change
function handleGradeChange(e) {
  const value = parseInt(e.target.value);

  // Map slider position to minimum deal score
  // 0: All (-Infinity), 1: D+ (-0.25), 2: C+ (-0.10), 3: B+ (0.10), 4: A (0.25)
  const gradeThresholds = [-Infinity, -0.25, -0.10, 0.10, 0.25];
  const gradeLabels = ['All Grades', 'D or Better', 'C or Better', 'B or Better', 'A Only'];

  AppState.filters.minDealScore = gradeThresholds[value];

  const label = document.getElementById('grade-value');
  if (label) {
    label.textContent = gradeLabels[value];
  }

  applyFilters();
}

// Handle price range change
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

// Clear all filters
function clearFilters() {
  AppState.filters = {
    minSize: 40,
    maxSize: 120,
    selectedSizes: [],
    panelTypes: [],
    brands: [],
    minDealScore: -Infinity,
    minPrice: 0,
    maxPrice: Infinity,
    useCases: []
  };

  // Reset UI
  document.querySelectorAll('.filter-chip.active').forEach(chip => {
    chip.classList.remove('active');
  });

  // Reset size sliders
  const minSizeSlider = document.getElementById('min-size-slider');
  const maxSizeSlider = document.getElementById('max-size-slider');
  const minSizeLabel = document.getElementById('min-size-label');
  const maxSizeLabel = document.getElementById('max-size-label');
  if (minSizeSlider) minSizeSlider.value = 40;
  if (maxSizeSlider) maxSizeSlider.value = 120;
  if (minSizeLabel) minSizeLabel.textContent = '40"';
  if (maxSizeLabel) maxSizeLabel.textContent = '120"';

  // Re-render histogram to clear selections
  renderSizeHistogram();

  const gradeSlider = document.getElementById('grade-slider');
  if (gradeSlider) gradeSlider.value = 0;

  const gradeLabel = document.getElementById('grade-value');
  if (gradeLabel) gradeLabel.textContent = 'All Grades';

  const minPriceInput = document.getElementById('min-price');
  const maxPriceInput = document.getElementById('max-price');
  if (minPriceInput) minPriceInput.value = '';
  if (maxPriceInput) maxPriceInput.value = '';

  applyFilters();
}

// Apply filters and re-render
function applyFilters() {
  let filtered = AppState.tvs;

  // Size filter - use selected sizes if any, otherwise use range
  if (AppState.filters.selectedSizes.length > 0) {
    filtered = filtered.filter(tv => {
      const bucket = getSizeBucket(tv.size);
      return AppState.filters.selectedSizes.includes(bucket);
    });
  } else {
    // Fall back to range slider
    filtered = filtered.filter(tv =>
      tv.size >= AppState.filters.minSize && tv.size <= AppState.filters.maxSize
    );
  }

  // Panel type filter
  if (AppState.filters.panelTypes.length > 0) {
    filtered = filtered.filter(tv => AppState.filters.panelTypes.includes(tv.panelType));
  }

  // Brand filter
  if (AppState.filters.brands.length > 0) {
    filtered = filtered.filter(tv => AppState.filters.brands.includes(tv.brand));
  }

  // Deal score filter
  filtered = filtered.filter(tv => {
    const dealScore = TVDataUtils.calculateDealScore(tv);
    return dealScore >= AppState.filters.minDealScore;
  });

  // Price filter
  filtered = filtered.filter(tv => {
    const bestPrice = TVDataUtils.getBestPrice(tv);
    if (!bestPrice) return false;
    const price = bestPrice.currentPrice;
    return price >= AppState.filters.minPrice &&
           price <= (AppState.filters.maxPrice || Infinity);
  });

  // Use-case filters (8.0+ threshold)
  const MIN_USE_CASE_SCORE = 8.0;

  AppState.filters.useCases.forEach(useCase => {
    filtered = filtered.filter(tv => {
      const scores = tv.useCaseScores;
      if (!scores) return false;

      switch (useCase) {
        case 'gaming':
          return scores.gamingScore && scores.gamingScore >= MIN_USE_CASE_SCORE;
        case 'movies':
          return (scores.movieScore && scores.movieScore >= MIN_USE_CASE_SCORE) ||
                 (scores.tvShowScore && scores.tvShowScore >= MIN_USE_CASE_SCORE);
        case 'sports':
          return scores.sportsScore && scores.sportsScore >= MIN_USE_CASE_SCORE;
        case 'tvshows':
          return scores.tvShowScore && scores.tvShowScore >= MIN_USE_CASE_SCORE;
        case 'pc':
          return scores.pcMonitorScore && scores.pcMonitorScore >= MIN_USE_CASE_SCORE;
        default:
          return true;
      }
    });
  });

  // Sort
  if (AppState.sortBy === 'dealScore') {
    filtered = TVDataUtils.sortByDealScore(filtered);
  } else if (AppState.sortBy === 'priceLow') {
    filtered = [...filtered].sort((a, b) => {
      const priceA = TVDataUtils.getBestPrice(a)?.currentPrice || Infinity;
      const priceB = TVDataUtils.getBestPrice(b)?.currentPrice || Infinity;
      return priceA - priceB;
    });
  } else if (AppState.sortBy === 'priceHigh') {
    filtered = [...filtered].sort((a, b) => {
      const priceA = TVDataUtils.getBestPrice(a)?.currentPrice || 0;
      const priceB = TVDataUtils.getBestPrice(b)?.currentPrice || 0;
      return priceB - priceA;
    });
  } else if (AppState.sortBy === 'rtingsScore') {
    filtered = [...filtered].sort((a, b) => b.rtingsScore - a.rtingsScore);
  } else if (AppState.sortBy === 'size') {
    filtered = [...filtered].sort((a, b) => b.size - a.size);
  }

  AppState.filteredTvs = filtered;
  renderTVGrid();
  updateStats();
}

// Render TV grid
function renderTVGrid() {
  const grid = document.getElementById('tv-grid');
  if (!grid) return;

  if (AppState.filteredTvs.length === 0) {
    grid.innerHTML = `
      <div class="no-results">
        <div class="no-results-icon">📺</div>
        <h3 class="no-results-title">No TVs match your filters</h3>
        <p class="no-results-text">Try adjusting your filters to see more results.</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = AppState.filteredTvs.map(tv => renderTVCard(tv)).join('');

  // Add click handlers for cards
  document.querySelectorAll('.tv-card').forEach(card => {
    card.addEventListener('click', () => {
      const tvId = card.dataset.tvId;
      // Navigate to product page (placeholder)
      window.location.href = `product.html?id=${tvId}`;
    });
  });
}

// Render quick score badges for TV card - shows all use cases, highlights when good
function renderQuickScores(tv) {
  if (!tv.useCaseScores) return '';

  const scores = tv.useCaseScores;
  const badges = [];

  // Helper to create badge with highlight for good scores
  const makeBadge = (score, icon, label, tooltip) => {
    if (score == null) return null;
    const { stars } = getUseCaseStars(score);
    const isGood = score >= 8.0;
    const highlightClass = isGood ? 'highlighted' : '';
    return `<span class="quick-score ${highlightClass}" title="${tooltip}"><span class="use-icon">${icon}</span><span class="use-label">${label}</span> ${stars}</span>`;
  };

  // Movies
  if (scores.movieScore != null) {
    badges.push(makeBadge(scores.movieScore, '🎬', 'Movies', 'How well this TV handles movies - contrast, color accuracy, and motion for film content'));
  }

  // Sports
  if (scores.sportsScore != null) {
    badges.push(makeBadge(scores.sportsScore, '⚽', 'Sports', 'How well this TV handles sports - motion clarity, brightness, and wide viewing angles for game day'));
  }

  // Gaming
  if (scores.gamingScore != null) {
    badges.push(makeBadge(scores.gamingScore, '🎮', 'Gaming', 'How well this TV handles gaming - input lag, response time, and VRR support'));
  }

  // Bright Room
  if (scores.brightRoomScore != null) {
    badges.push(makeBadge(scores.brightRoomScore, '☀️', 'Bright Room', 'How well this TV performs in bright rooms - reflection handling and peak brightness'));
  }

  // Filter out nulls
  const validBadges = badges.filter(b => b);
  if (validBadges.length === 0) return '';

  return `<div class="tv-card-quick-scores">${validBadges.join('')}</div>`;
}

// Check if TV is too large for accurate projection
function isSuperBigTV(tv) {
  return tv.size >= 100;
}

// Get tooltip text for grade explanation
function getGradeTooltip(grade) {
  const tooltips = {
    'A': 'Great Deal - This TV is priced 25%+ below our projected fair value. Exceptional value that rarely comes around.',
    'B': 'Good Deal - This TV is priced 10-25% below our projected fair value. Solid value worth considering.',
    'C': 'Fair Price - This TV is priced within 10% of our projected fair value. You are paying about what it is worth.',
    'D': 'Overpriced - This TV is priced 10-25% above our projected fair value. Consider waiting for a sale.',
    'F': 'Very Overpriced - This TV is priced 25%+ above our projected fair value. You are paying a significant premium.',
    '?': 'Limited Data - We do not have enough market data for TVs this size to make accurate price projections.'
  };
  return tooltips[grade] || 'Deal grade based on comparing sale price to our projected fair value.';
}

// Convert RTINGS score to quality tier (2-5 scale, no 1-star ratings)
function getQualityTier(rtingsScore) {
  if (rtingsScore >= 8.5) return { tier: 5, label: 'Excellent' };
  if (rtingsScore >= 8.0) return { tier: 4, label: 'Very Good' };
  if (rtingsScore >= 6.5) return { tier: 3, label: 'Good' };
  return { tier: 2, label: 'Average' };
}

// Render quality stars with label
function renderQualityStars(rtingsScore) {
  const { tier, label } = getQualityTier(rtingsScore);
  const stars = '★'.repeat(tier) + '☆'.repeat(5 - tier);
  return `<span class="quality-rating" title="${label} - Overall picture quality rating based on professional reviews"><span class="quality-label">Overall Quality</span> ${stars}</span>`;
}

// Convert use case score to stars (for gaming, sports, etc.)
function getUseCaseStars(score) {
  if (score >= 8.6) return { stars: '★★★★★', tier: 5 };
  if (score >= 8.0) return { stars: '★★★★☆', tier: 4 };
  if (score >= 6.5) return { stars: '★★★☆☆', tier: 3 };
  return { stars: '★★☆☆☆', tier: 2 };
}

// Render a single TV card
function renderTVCard(tv) {
  const bestPrice = TVDataUtils.getBestPrice(tv);
  if (!bestPrice) return '';

  const superBig = isSuperBigTV(tv);
  const dealScore = TVDataUtils.calculateDealScore(tv);
  const verdict = superBig
    ? { text: "?", subtitle: "Limited Data", class: "verdict-na" }
    : TVDataUtils.getVerdict(dealScore);
  const retailer = TVDataUtils.getRetailer(bestPrice.retailerId);

  // Invert the sign for display: positive deal score means price is BELOW projected
  const displayScore = -dealScore;
  const displayScorePct = (displayScore * 100).toFixed(1);
  const dealScoreFormatted = displayScore <= 0 ? `${displayScorePct}%` : `+${displayScorePct}%`;
  // Good deal (negative display = below projected) should be green
  const dealScoreClass = displayScore <= 0 ? 'positive' : 'negative';

  // For super big TVs, show N/A for projected price
  const projectedSection = superBig
    ? `<span class="deal-score na">
        <span class="projected-tooltip">No projection<span class="tooltip-content">We don't have enough market data for TVs 100" and larger to make accurate price projections.</span></span>
       </span>`
    : `<span class="deal-score ${dealScoreClass}">${dealScoreFormatted} vs <span class="projected-tooltip">projected<span class="tooltip-content">Our projected price is calculated based on screen size, panel technology (OLED, Mini LED, etc.), and RTINGS review scores.</span></span></span>
       <div class="price-labeled projected">
         <span class="price-label">Projected</span>
         <span class="projected-value">${TVDataUtils.formatPrice(tv.fairValue)}</span>
       </div>`;

  // Grade tooltip explanation
  const gradeTooltip = getGradeTooltip(verdict.text);

  return `
    <article class="tv-card" data-tv-id="${tv.id}">
      <div class="tv-card-image">
        <img src="${tv.image}" alt="${tv.fullName}" loading="lazy"
             onerror="this.src='https://via.placeholder.com/400x250?text=TV+Image'">
        <span class="panel-badge">${tv.panelType}</span>
      </div>
      <div class="tv-card-content">
        <div class="tv-card-brand">${tv.brand}</div>
        <h3 class="tv-card-title">${tv.model} ${tv.size}"</h3>
        <div class="tv-card-specs">
          <span class="tv-card-spec">
            ${renderQualityStars(tv.rtingsScore)}
          </span>
          <span class="tv-card-spec">${tv.resolution}</span>
          <span class="tv-card-spec">${tv.specs?.refreshRate || '60Hz'}</span>
        </div>
        ${renderQuickScores(tv)}
        <div class="tv-card-pricing">
          <div class="tv-card-price-grade-row">
            <div class="price-section">
              <div class="price-labeled">
                <span class="price-label">Sale Price</span>
                <span class="tv-card-price">${TVDataUtils.formatPrice(bestPrice.currentPrice)}</span>
              </div>
              ${bestPrice.retailPrice > bestPrice.currentPrice
                ? `<div class="price-labeled msrp">
                    <span class="price-label">MSRP</span>
                    <span class="tv-card-retail">${TVDataUtils.formatPrice(bestPrice.retailPrice)}</span>
                  </div>`
                : ''}
            </div>
            <div class="grade-section">
              <span class="deal-badge ${verdict.class}" title="${gradeTooltip}">
                <span class="grade">${verdict.text}</span>
                <span class="grade-subtitle">${verdict.subtitle}</span>
              </span>
            </div>
          </div>
          <div class="tv-card-retailer">at ${retailer?.name || 'Unknown'}</div>
          <div class="tv-card-deal-row">
            ${projectedSection}
          </div>
        </div>
      </div>
    </article>
  `;
}

// Update stats in header
function updateStats() {
  const countEl = document.getElementById('tv-count');
  if (countEl) {
    countEl.textContent = `${AppState.filteredTvs.length} TVs`;
  }

  const totalEl = document.getElementById('total-count');
  if (totalEl) {
    totalEl.textContent = AppState.tvs.length;
  }

  // Count great deals
  const greatDeals = AppState.filteredTvs.filter(tv => {
    const dealScore = TVDataUtils.calculateDealScore(tv);
    return dealScore >= 0.25;
  }).length;

  const dealsEl = document.getElementById('deals-count');
  if (dealsEl) {
    dealsEl.textContent = greatDeals;
  }
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', init);
