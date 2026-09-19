/**
 * DIGITAL SYSTEMS & ANALYTICS PORTFOLIO — CORE SCRIPT
 * Vanilla ES6+ — Lightweight, Scalable & Accessible
 */

// --- 1. PORTFOLIO CONFIGURATION ---
const portfolioConfig = {
  name: "YOUR NAME",
  role: "Digital Systems & Analytics",
  tagline: "Turning operational problems into measurable digital systems.",
  email: "contact@yourdomain.com",
  linkedin: "https://linkedin.com/in/yourprofile",
  github: "https://github.com/yourhandle",
  year: new Date().getFullYear()
};

// --- 2. CAPABILITIES DATA ---
const capabilities = [
  {
    title: "BUSINESS ANALYTICS",
    desc: "Turning operational data into decision-ready insights by tracking pipeline velocity, commercial variance, and operational health.",
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>`
  },
  {
    title: "DASHBOARD SYSTEMS",
    desc: "Interactive monitoring and performance visualization engineered with clear visual hierarchy, zero latency, and targeted drill-downs.",
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>`
  },
  {
    title: "OPERATIONAL AUTOMATION",
    desc: "Reducing repetitive manual processes through digital workflows, trigger-based validations, and cross-system data synchronization.",
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 3 21 3 21 8"></polyline><line x1="4" y1="20" x2="21" y2="3"></line><polyline points="21 16 21 21 16 21"></polyline><line x1="15" y1="15" x2="21" y2="21"></line><line x1="4" y1="4" x2="9" y2="9"></line></svg>`
  },
  {
    title: "INVENTORY SYSTEMS",
    desc: "Tracking stock movement, receiving, raw material conversion, and operational custody with zero-discrepancy reconciliation.",
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>`
  },
  {
    title: "WORKFORCE SYSTEMS",
    desc: "Supporting Human Capital processes, overtime calculation formulas, schedule attendance audits, and workforce utilization reporting.",
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>`
  },
  {
    title: "MANAGEMENT REPORTING",
    desc: "Turning raw frontline data into structured, executive-ready management reports with automated exception alerts and action items.",
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>`
  }
];

// --- 3. PROJECTS DATA ARCHITECTURE (9 PROJECTS) ---
const projects = [
  {
    id: "proj-01",
    number: "01",
    title: "Strategi Sales",
    category: "Sales Analytics",
    categories: ["SALES", "ANALYTICS"],
    description: "Sales intelligence system designed to monitor performance trends, identify commercial opportunities, and detect revenue leakage across branch operations.",
    role: "System Design / Analytics",
    tools: ["Google Sheets", "Apps Script", "Looker Studio"],
    image: "assets/projects/sales-strategy.webp",
    problem: "Sales data was scattered across disparate regional branch sheets, making weekly revenue tracking lag by 4 to 6 days with frequent data entry discrepancies.",
    approach: "Architected a unified ingestion pipeline with automated data validation, daily automated refresh triggers, and granular commercial KPI drill-downs.",
    solution: "Developed an interactive Looker Studio sales dashboard powered by Apps Script data transformations, providing single-pane-of-glass visibility for management.",
    impact: "Turned retrospective monthly reporting into proactive daily commercial steering with zero duplicate entries.",
    features: ["REAL-TIME COMMERCIAL MONITORING", "DISCREPANCY ALERT FILTERS", "BRANCH VELOCITY COMPARISON", "AUTOMATED LOOKER PIPELINE", "MARGIN DRILL-DOWN MATRIX"]
  },
  {
    id: "proj-02",
    number: "02",
    title: "Quality Control",
    category: "Operations / Quality",
    categories: ["OPERATIONS", "QUALITY"],
    description: "End-to-end operational quality inspection system tracking defect rates, inspection checklists, and compliance across production lines.",
    role: "System Architecture / Workflow",
    tools: ["Apps Script", "Google Sheets", "HTML/CSS Forms"],
    image: "assets/projects/quality-control.webp",
    problem: "Physical paper-based QC logs resulted in untracked defect clusters, delayed containment actions, and lack of historical traceability.",
    approach: "Designed a digital inspection station workflow with standardized parameter checklists, mandatory photographic uploads, and instant defect alerts.",
    solution: "Built a web-based digital QC gateway connected to centralized Google Sheets with automated Pareto defect categorizations and escalation webhooks.",
    impact: "Eliminated paper inspection backlog, reducing defect containment response time from hours to minutes.",
    features: ["DIGITAL INSPECTION FORMS", "PARETO DEFECT ANALYSIS", "REAL-TIME LINE ESCALATION", "OPERATOR AUDIT TRAIL", "COMPLIANCE SCORECARDS"]
  },
  {
    id: "proj-03",
    number: "03",
    title: "Ranking Kasir",
    category: "Sales / Analytics",
    categories: ["SALES", "ANALYTICS"],
    description: "Objective cashier performance and speed analytics system calculating transaction velocity, accuracy scores, and reward tiers.",
    role: "Analytics / Formula Modeling",
    tools: ["Google Sheets", "Apps Script", "Looker Studio"],
    image: "assets/projects/cashier-ranking.webp",
    problem: "Evaluation of frontline cashier staff was previously subjective, lacking quantifiable metrics for speed, accuracy, and void-ticket frequency.",
    approach: "Established a weighted scoring algorithm balancing items-per-minute throughput, scanning velocity, shift attendance, and register reconciliation discrepancy.",
    solution: "Automated daily point-of-sale register extraction into an objective cashier leaderboard with individual transparent feedback scorecards.",
    impact: "Provided fair, transparent staff performance visibility that incentivized accuracy and reduced register close-out discrepancy.",
    features: ["WEIGHTED EFFICIENCY SCORING", "VOID TICKET DETECTION", "DAILY LEADERBOARD RUNNER", "INDIVIDUAL SCORECARD DRILL-DOWN", "SETTLEMENT AUDIT LOG"]
  },
  {
    id: "proj-04",
    number: "04",
    title: "Target Product",
    category: "Sales / Operations",
    categories: ["SALES", "OPERATIONS"],
    description: "Focus SKU and promotional target monitoring engine tracking fulfillment against target quotas and stock allocation.",
    role: "System Design / Operations",
    tools: ["Google Sheets", "Apps Script", "Looker Studio"],
    image: "assets/projects/target-product.webp",
    problem: "Strategic push items frequently suffered from stockouts in high-velocity stores while sitting idle in low-traffic branches.",
    approach: "Created a real-time SKU tracking model comparing daily sales burn rates against remaining branch stock allocations and sales targets.",
    solution: "Implemented an automated target-product tracker with predictive stock replenishment suggestions and achievement gauges.",
    impact: "Enhanced commercial target achievement rate through proactive intra-branch rebalancing.",
    features: ["TARGET PACING GAUGES", "SKU CONVERSION MONITOR", "BRANCH ALLOCATION TRACKING", "RESTOCK PRIORITY SCORING", "CAMPAIGN RUNTIME METRICS"]
  },
  {
    id: "proj-05",
    number: "05",
    title: "KPI Analyst",
    category: "Analytics / Operations",
    categories: ["ANALYTICS", "OPERATIONS"],
    description: "Comprehensive operational and departmental Key Performance Indicator aggregator consolidating multi-team progress metrics.",
    role: "Data Modeling / BI Design",
    tools: ["Google Sheets", "Apps Script", "Looker Studio"],
    image: "assets/projects/kpi-analyst.webp",
    problem: "Operational leadership was overwhelmed by unstructured spreadsheet updates from 6 different functional teams.",
    approach: "Standardized metric definitions, reporting frequencies, and formulaic calculations into a central KPI data model.",
    solution: "Engineered an executive KPI console displaying departmental variance against quarterly benchmarks with red/yellow/green threshold indicators.",
    impact: "Provided unified operational transparency, aligning departmental priorities during weekly executive reviews.",
    features: ["CONSOLIDATED KPI MATRIX", "AUTOMATED STATUS THRESHOLDS", "MULTI-DEPARTMENT DRILL-DOWN", "HISTORICAL TREND CURVES", "EXECUTIVE DIGEST EXPORT"]
  },
  {
    id: "proj-06",
    number: "06",
    title: "Google Review Dashboard",
    category: "Analytics / Quality",
    categories: ["ANALYTICS", "QUALITY"],
    description: "Reputation analytics and sentiment tracking engine monitoring customer feedback, rating trends, and branch operational response times.",
    role: "System Integration / Analytics",
    tools: ["Google Sheets", "Apps Script", "Looker Studio"],
    image: "assets/projects/google-review.webp",
    problem: "Branch reviews were checked sporadically, allowing dissatisfied customer experiences to go unaddressed for weeks.",
    approach: "Designed a centralized review ingestion mechanism with rating categorizations, response status tracking, and recurring sentiment summaries.",
    solution: "Built an interactive Google Review dashboard that maps customer satisfaction trends per location and flags negative feedback for prompt resolution.",
    impact: "Established systematic accountability for branch customer feedback with reduced resolution turnaround.",
    features: ["SENTIMENT AGGREGATION", "BRANCH RATING MATRIX", "UNANSWERED REVIEW ALERTS", "CSAT VELOCITY METRICS", "ISSUE CATEGORIZATION"]
  },
  {
    id: "proj-07",
    number: "07",
    title: "Portal HC & Perhitungan Lembur",
    category: "HC / Workforce",
    categories: ["HC", "OPERATIONS"],
    description: "Human Capital operational portal automating overtime calculations, statutory rate formulas, and multi-tier approval workflows.",
    role: "System Architecture / Full Automation",
    tools: ["Google Sheets", "Apps Script", "Web App (HTML/CSS)"],
    image: "assets/projects/hc-portal.webp",
    problem: "Overtime claims were processed manually on paper vouchers, leading to human calculation errors, delayed payroll, and compliance risks.",
    approach: "Encoded statutory labor overtime formulas, holiday multipliers, and department manager approval chains into an automated digital workflow.",
    solution: "Created an employee submission portal with automatic hourly rate calculations, validation checks, and one-click HR approval processing.",
    impact: "Eliminated manual payroll overtime calculation errors and streamlined approval cycles prior to monthly payroll closing.",
    features: ["STATUTORY FORMULA ENGINE", "DIGITAL APPROVAL WORKFLOW", "PAYROLL EXPORT GENERATOR", "EMPLOYEE SELF-SERVICE PORTAL", "AUDITABLE TIME LEDGER"]
  },
  {
    id: "proj-08",
    number: "08",
    title: "Stock Inventory Warehouse Management System",
    category: "Inventory / Operations",
    categories: ["INVENTORY", "OPERATIONS"],
    description: "Full-scale warehouse inventory control platform with NFC-enabled cycle counts, raw material conversions, receiving audits, and restock triggers.",
    role: "System Architecture / Operations Lead",
    tools: ["Google Sheets", "Apps Script", "Looker Studio", "AppSheet"],
    image: "assets/projects/inventory.webp",
    problem: "Warehouse stock suffered from frequent manual recording slips, untracked conversion shrinkage, and slow physical count reconciliation.",
    approach: "Engineered a closed-loop inventory governance architecture covering supplier receiving, batch conversion yields, bin storage, and outbound distribution.",
    solution: "Implemented an integrated WMS platform incorporating NFC location scanning, automated PO matching, physical cycle counting, and real-time ledger sync.",
    impact: "Achieved continuous stock accuracy across warehouse bins with zero-latency reconciliation and automated reorder warnings.",
    features: ["NFC WORKFLOW COMPLIANCE", "BATCH CONVERSION ENGINE", "PO RECEIVING RECONCILIATION", "CYCLE COUNT / STOCK OPNAME", "EXPIRY & FIFO CONTROLS"]
  },
  {
    id: "proj-09",
    number: "09",
    title: "Report Inventory",
    category: "Inventory / Analytics",
    categories: ["INVENTORY", "ANALYTICS"],
    description: "Executive inventory valuation and velocity reporting platform tracking stock turnover, aging items, and working capital allocations.",
    role: "BI Modeling / Analytics",
    tools: ["Google Sheets", "Looker Studio", "Apps Script"],
    image: "assets/projects/inventory-report.webp",
    problem: "Management lacked clear visibility into aged, slow-moving, or dead inventory locking up operational working capital.",
    approach: "Constructed an inventory aging and turnover model categorized into high-velocity, medium, and stagnant capital tiers.",
    solution: "Designed an automated inventory reporting suite delivering weekly stock valuation summaries, dead-stock warnings, and reorder projections.",
    impact: "Allowed finance and operations teams to identify slow-moving stock weeks earlier, preventing dead capital accumulation.",
    features: ["STOCK TURNOVER VELOCITY", "AGING ANALYSIS TIERS", "WORKING CAPITAL VALUATION", "MIN-MAX THRESHOLD ALERTS", "AUTOMATED WEEKLY DIGEST"]
  }
];

// --- 4. TECHNOLOGY STACK DATA ---
const techStack = [
  { name: "Google Apps Script", tag: "Process Automation" },
  { name: "Google Sheets", tag: "Data Modeling" },
  { name: "Looker Studio", tag: "BI & Dashboards" },
  { name: "JavaScript (ES6+)", tag: "Systems Logic" },
  { name: "HTML & Modern CSS", tag: "Frontend Interfaces" },
  { name: "Firebase & Firestore", tag: "Real-time Backend" },
  { name: "Cloudflare Pages", tag: "Edge Static Hosting" },
  { name: "AppSheet", tag: "Mobile Operations" },
  { name: "Business Data Analytics", tag: "Decision Science" },
  { name: "Workflow Automation", tag: "Operations Efficiency" },
  { name: "REST APIs & Webhooks", tag: "System Integration" },
  { name: "Relational Schema Design", tag: "Data Architecture" }
];

// --- 5. TIMELINE / JOURNEY DATA (Optional / Expandable) ---
const timeline = [
  {
    year: "2024",
    title: "Operational Workflows & Inventory Foundation",
    description: "Engineered multi-branch stock inventory engines, digitized quality control stations, and consolidated commercial sales trackers."
  },
  {
    year: "2025",
    title: "Enterprise Automation & Decision Support",
    description: "Architected automated Human Capital overtime portals, NFC-assisted cycle count systems, and integrated Looker Studio executive suites."
  },
  {
    year: "2026",
    title: "Integrated Systems & Real-Time Intelligence",
    description: "Advancing operational technology architectures with zero-latency reconciliation, proactive SLA monitoring, and scalable edge deployments."
  }
];

// --- 6. INITIALIZATION & DOM BINDING ---
document.addEventListener("DOMContentLoaded", () => {
  initPortfolioConfig();
  initTheme();
  initNavigation();
  initCapabilities();
  initProjects();
  initTechStack();
  initTimeline();
  initCustomCursor();
  initModal();
  initMagneticHover();
  initScrollAnimations();
  registerServiceWorker();
});

// --- 7. CONFIGURATION SYNC ---
function initPortfolioConfig() {
  const brandNameEl = document.getElementById("brandName");
  const footerBrandEl = document.getElementById("footerBrand");
  const currentYearEl = document.getElementById("currentYear");
  const channelEmailEl = document.getElementById("channelEmail");
  const channelLinkedinEl = document.getElementById("channelLinkedin");
  const channelGithubEl = document.getElementById("channelGithub");
  const contactEmailBtn = document.getElementById("contactEmailBtn");

  if (brandNameEl) brandNameEl.textContent = portfolioConfig.name;
  if (footerBrandEl) footerBrandEl.textContent = portfolioConfig.name;
  if (currentYearEl) currentYearEl.textContent = portfolioConfig.year;

  if (channelEmailEl) {
    channelEmailEl.textContent = portfolioConfig.email;
    channelEmailEl.href = `mailto:${portfolioConfig.email}`;
  }
  if (contactEmailBtn) {
    contactEmailBtn.href = `mailto:${portfolioConfig.email}`;
  }
  if (channelLinkedinEl) {
    channelLinkedinEl.href = portfolioConfig.linkedin;
    channelLinkedinEl.textContent = portfolioConfig.linkedin.replace("https://", "");
  }
  if (channelGithubEl) {
    channelGithubEl.href = portfolioConfig.github;
    channelGithubEl.textContent = portfolioConfig.github.replace("https://", "");
  }
}

// --- 8. THEME TOGGLE (LIGHT / DARK) ---
function initTheme() {
  const themeToggle = document.getElementById("themeToggle");
  const themeLabel = document.getElementById("themeLabel");
  const htmlEl = document.documentElement;

  const savedTheme = localStorage.getItem("portfolio_theme") || "light";
  applyTheme(savedTheme);

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const currentTheme = htmlEl.getAttribute("data-theme") || "light";
      const newTheme = currentTheme === "light" ? "dark" : "light";
      applyTheme(newTheme);
      localStorage.setItem("portfolio_theme", newTheme);
    });
  }

  function applyTheme(theme) {
    htmlEl.setAttribute("data-theme", theme);
    if (themeLabel) {
      themeLabel.textContent = theme.toUpperCase();
    }
  }
}

// --- 9. NAVIGATION (STICKY + MOBILE DRAWER) ---
function initNavigation() {
  const siteHeader = document.getElementById("siteHeader");
  const menuToggle = document.getElementById("menuToggle");
  const mobileNav = document.getElementById("mobileNav");
  const mobileNavLinks = document.querySelectorAll(".mobile-nav-link");

  // Sticky header blur on scroll
  window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
      siteHeader.classList.add("is-scrolled");
    } else {
      siteHeader.classList.remove("is-scrolled");
    }
  }, { passive: true });

  // Mobile drawer toggle
  if (menuToggle && mobileNav) {
    menuToggle.addEventListener("click", () => {
      const isOpen = mobileNav.classList.contains("is-open");
      if (isOpen) {
        closeMobileNav();
      } else {
        openMobileNav();
      }
    });

    mobileNavLinks.forEach(link => {
      link.addEventListener("click", () => {
        closeMobileNav();
      });
    });

    // Close on ESC
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && mobileNav.classList.contains("is-open")) {
        closeMobileNav();
      }
    });
  }

  function openMobileNav() {
    mobileNav.classList.add("is-open");
    menuToggle.setAttribute("aria-expanded", "true");
    mobileNav.setAttribute("aria-hidden", "false");
  }

  function closeMobileNav() {
    mobileNav.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
    mobileNav.setAttribute("aria-hidden", "true");
  }

  // Smooth active link tracking
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  window.addEventListener("scroll", () => {
    let currentId = "";
    const scrollPos = window.scrollY + 140;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        currentId = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("is-active");
      if (link.getAttribute("href") === `#${currentId}`) {
        link.classList.add("is-active");
      }
    });
  }, { passive: true });
}

// --- 10. CAPABILITIES RENDERING ---
function initCapabilities() {
  const container = document.getElementById("capabilitiesGrid");
  if (!container) return;

  container.innerHTML = capabilities.map(cap => `
    <div class="capability-card">
      <div class="cap-icon-box">
        ${cap.icon}
      </div>
      <h3 class="cap-title">${cap.title}</h3>
      <p class="cap-desc">${cap.desc}</p>
    </div>
  `).join("");
}

// --- 11. PROJECTS RENDERING & FILTERING ---
let currentFilter = "ALL";
let currentSearch = "";

function initProjects() {
  renderProjects();

  // Filter Buttons
  const filterBtns = document.querySelectorAll(".filter-btn");
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => {
        b.classList.remove("is-active");
        b.setAttribute("aria-selected", "false");
      });
      btn.classList.add("is-active");
      btn.setAttribute("aria-selected", "true");

      currentFilter = btn.getAttribute("data-filter");
      renderProjects();
    });
  });

  // Search Input
  const searchInput = document.getElementById("projectSearch");
  const searchClear = document.getElementById("searchClear");

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      currentSearch = e.target.value.trim().toLowerCase();
      if (searchClear) {
        searchClear.style.display = currentSearch ? "block" : "none";
      }
      renderProjects();
    });
  }

  if (searchClear && searchInput) {
    searchClear.addEventListener("click", () => {
      searchInput.value = "";
      currentSearch = "";
      searchClear.style.display = "none";
      searchInput.focus();
      renderProjects();
    });
  }

  // Reset Filter Button in Empty State
  const resetBtn = document.getElementById("resetFilterBtn");
  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      currentFilter = "ALL";
      currentSearch = "";
      if (searchInput) searchInput.value = "";
      if (searchClear) searchClear.style.display = "none";
      filterBtns.forEach(b => {
        b.classList.toggle("is-active", b.getAttribute("data-filter") === "ALL");
        b.setAttribute("aria-selected", b.getAttribute("data-filter") === "ALL" ? "true" : "false");
      });
      renderProjects();
    });
  }
}

function renderProjects() {
  const container = document.getElementById("projectsContainer");
  const emptyState = document.getElementById("emptyState");
  if (!container) return;

  const filtered = projects.filter(project => {
    const matchesFilter = currentFilter === "ALL" || project.categories.includes(currentFilter);
    const matchesSearch = !currentSearch || 
      project.title.toLowerCase().includes(currentSearch) ||
      project.description.toLowerCase().includes(currentSearch) ||
      project.category.toLowerCase().includes(currentSearch) ||
      project.tools.some(t => t.toLowerCase().includes(currentSearch));
    return matchesFilter && matchesSearch;
  });

  if (filtered.length === 0) {
    container.innerHTML = "";
    if (emptyState) emptyState.style.display = "block";
    return;
  }

  if (emptyState) emptyState.style.display = "none";

  container.innerHTML = filtered.map((p, index) => {
    const isReversed = index % 2 !== 0 ? "is-reversed" : "";
    const toolsHtml = p.tools.map(t => `<span class="tool-tag">${t}</span>`).join("");

    return `
      <article class="project-card ${isReversed}" id="${p.id}" data-project-id="${p.id}">
        <!-- Project Info Side -->
        <div class="project-info-side">
          <span class="project-number">${p.number}</span>
          <h3 class="project-title">${p.title}</h3>
          <p class="project-desc">${p.description}</p>

          <div class="project-metadata">
            <div class="meta-item">
              <span class="meta-label">CATEGORY</span>
              <span class="meta-value">${p.category}</span>
            </div>
            <div class="meta-item">
              <span class="meta-label">ROLE</span>
              <span class="meta-value">${p.role}</span>
            </div>
          </div>

          <div class="meta-item" style="margin-bottom: 8px;">
            <span class="meta-label">CORE TOOLS &amp; STACK</span>
          </div>
          <div class="tools-list">
            ${toolsHtml}
          </div>

          <button type="button" class="btn-case-study" onclick="openCaseStudy('${p.id}')">
            <span>&rarr; Explore case study</span>
          </button>
        </div>

        <!-- Project Visual Side -->
        <div class="project-visual-side" onclick="openCaseStudy('${p.id}')" tabindex="0" role="button" aria-label="View case study for ${p.title}">
          <img 
            src="${p.image}" 
            alt="${p.title} preview" 
            loading="lazy" 
            onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
          >
          <div class="blueprint-frame" style="display: none;">
            <div class="blueprint-header">
              <span class="blueprint-title">${p.title}</span>
              <span class="blueprint-badge">${p.category}</span>
            </div>
            <div class="blueprint-canvas">
              ${generateBlueprintSvg(p)}
            </div>
            <div class="blueprint-footer">
              <span>ROLE: ${p.role}</span>
              <span>SYSTEM ARCHITECTURE PREVIEW</span>
            </div>
          </div>
        </div>
      </article>
    `;
  }).join("");
}

// Generate an ultra-clean bespoke SVG blueprint fallback for any project image
function generateBlueprintSvg(project) {
  return `
    <svg viewBox="0 0 320 140" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- Grid Lines -->
      <line x1="0" y1="35" x2="320" y2="35" stroke="var(--border)" stroke-width="1" stroke-dasharray="3 3"/>
      <line x1="0" y1="70" x2="320" y2="70" stroke="var(--border)" stroke-width="1" stroke-dasharray="3 3"/>
      <line x1="0" y1="105" x2="320" y2="105" stroke="var(--border)" stroke-width="1" stroke-dasharray="3 3"/>
      <line x1="80" y1="0" x2="80" y2="140" stroke="var(--border)" stroke-width="1"/>
      <line x1="240" y1="0" x2="240" y2="140" stroke="var(--border)" stroke-width="1"/>
      
      <!-- Dynamic Data Visual -->
      <rect x="20" y="50" width="40" height="70" rx="3" fill="var(--surface-alt)" stroke="var(--accent)" stroke-width="1.5"/>
      <rect x="100" y="30" width="40" height="90" rx="3" fill="var(--surface-alt)" stroke="var(--accent)" stroke-width="1.5"/>
      <rect x="180" y="65" width="40" height="55" rx="3" fill="var(--surface-alt)" stroke="var(--accent)" stroke-width="1.5"/>
      <rect x="260" y="20" width="40" height="100" rx="3" fill="var(--accent-soft)" stroke="var(--accent)" stroke-width="1.5"/>
      
      <!-- Trend spark line -->
      <path d="M40 75 L120 45 L200 80 L280 35" stroke="var(--accent)" stroke-width="2.5" stroke-linecap="round"/>
      <circle cx="280" cy="35" r="4" fill="var(--accent)"/>
    </svg>
  `;
}

// --- 12. TECH STACK RENDERING ---
function initTechStack() {
  const container = document.getElementById("techGrid");
  if (!container) return;

  container.innerHTML = techStack.map(t => `
    <div class="tech-item">
      <span class="tech-name">${t.name}</span>
      <span class="tech-tag">${t.tag}</span>
    </div>
  `).join("");
}

// --- 13. TIMELINE RENDERING ---
function initTimeline() {
  const timelineSection = document.getElementById("timeline");
  const container = document.getElementById("timelineList");

  if (!timeline || timeline.length === 0) {
    if (timelineSection) timelineSection.style.display = "none";
    return;
  }

  if (timelineSection) timelineSection.style.display = "block";
  if (container) {
    container.innerHTML = timeline.map(item => `
      <div class="timeline-entry" style="margin-bottom: 24px; padding-bottom: 20px; border-bottom: 1px solid var(--border);">
        <span style="font-family: var(--font-mono); font-size: 1.125rem; font-weight: 700; color: var(--accent); display: block; margin-bottom: 6px;">${item.year}</span>
        <h4 style="font-size: 1rem; font-weight: 600; color: var(--text); margin-bottom: 6px;">${item.title}</h4>
        <p style="font-size: 0.875rem; color: var(--text-muted); line-height: 1.6;">${item.description}</p>
      </div>
    `).join("");
  }
}

// --- 14. CASE STUDY MODAL / DRAWER ---
function initModal() {
  const modal = document.getElementById("caseStudyModal");
  const closeBtn = document.getElementById("modalCloseBtn");
  const featuredBtn = document.getElementById("openFeaturedCaseStudyBtn");

  if (closeBtn) {
    closeBtn.addEventListener("click", closeModal);
  }

  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeModal();
    });
  }

  if (featuredBtn) {
    featuredBtn.addEventListener("click", () => {
      openCaseStudy("proj-08"); // Opens Stock Inventory WMS
    });
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal && modal.classList.contains("is-open")) {
      closeModal();
    }
  });
}

function openCaseStudy(projectId) {
  const project = projects.find(p => p.id === projectId);
  if (!project) return;

  const modal = document.getElementById("caseStudyModal");
  const numberEl = document.getElementById("modalNumber");
  const categoryEl = document.getElementById("modalCategory");
  const titleEl = document.getElementById("modalTitle");
  const roleEl = document.getElementById("modalRole");
  const introEl = document.getElementById("modalIntro");
  const visualEl = document.getElementById("modalVisual");
  const problemEl = document.getElementById("modalProblem");
  const approachEl = document.getElementById("modalApproach");
  const solutionEl = document.getElementById("modalSolution");
  const impactEl = document.getElementById("modalImpact");
  const toolsEl = document.getElementById("modalTools");
  const featuresEl = document.getElementById("modalFeatures");

  if (numberEl) numberEl.textContent = project.number;
  if (categoryEl) categoryEl.textContent = project.category.toUpperCase();
  if (titleEl) titleEl.textContent = project.title;
  if (roleEl) roleEl.textContent = project.role;
  if (introEl) introEl.textContent = project.description;

  if (problemEl) problemEl.textContent = project.problem;
  if (approachEl) approachEl.textContent = project.approach;
  if (solutionEl) solutionEl.textContent = project.solution;
  if (impactEl) impactEl.textContent = project.impact;

  if (toolsEl) {
    toolsEl.innerHTML = project.tools.map(t => `<span class="modal-tool-badge">${t}</span>`).join("");
  }

  if (featuresEl) {
    featuresEl.innerHTML = project.features.map(f => `<li>${f}</li>`).join("");
  }

  if (visualEl) {
    visualEl.innerHTML = `
      <div class="blueprint-frame" style="aspect-ratio: 16/9; width: 100%;">
        <div class="blueprint-header">
          <span class="blueprint-title">${project.title} &mdash; SYSTEM CONSOLE</span>
          <span class="blueprint-badge">${project.category}</span>
        </div>
        <div class="blueprint-canvas">
          ${generateBlueprintSvg(project)}
        </div>
        <div class="blueprint-footer">
          <span>OPERATIONAL ARCHITECTURE &bull; CASE STUDY</span>
          <span>ROLE: ${project.role}</span>
        </div>
      </div>
    `;
  }

  if (modal) {
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }
}

function closeModal() {
  const modal = document.getElementById("caseStudyModal");
  if (modal) {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }
}

// Make openCaseStudy available globally
window.openCaseStudy = openCaseStudy;

// --- 15. MINIMAL DESKTOP CURSOR ---
function initCustomCursor() {
  if (window.matchMedia("(pointer: coarse)").matches) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const dot = document.getElementById("cursorDot");
  const ring = document.getElementById("cursorRing");
  if (!dot || !ring) return;

  let mouseX = -100;
  let mouseY = -100;
  let ringX = -100;
  let ringY = -100;

  window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    document.body.classList.add("cursor-active");
    dot.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
  });

  function renderRing() {
    ringX += (mouseX - ringX) * 0.2;
    ringY += (mouseY - ringY) * 0.2;
    ring.style.transform = `translate(${ringX}px, ${ringY}px)`;
    requestAnimationFrame(renderRing);
  }
  requestAnimationFrame(renderRing);

  // Hover triggers for interactive elements
  const hoverables = "a, button, [role='button'], input, .project-card, .capability-card, .node-card";
  document.addEventListener("mouseover", (e) => {
    if (e.target.closest(hoverables)) {
      document.body.classList.add("cursor-hover");
    }
  });

  document.addEventListener("mouseout", (e) => {
    if (e.target.closest(hoverables)) {
      document.body.classList.remove("cursor-hover");
    }
  });
}

// --- 16. MAGNETIC HOVER EFFECT ON CTAs ---
function initMagneticHover() {
  if (window.matchMedia("(pointer: coarse)").matches) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const magneticElements = document.querySelectorAll("[data-magnetic]");

  magneticElements.forEach(el => {
    el.addEventListener("mousemove", (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      el.style.transform = `translate(${x * 0.18}px, ${y * 0.18}px)`;
    });

    el.addEventListener("mouseleave", () => {
      el.style.transform = `translate(0px, 0px)`;
    });
  });

  // Parallax on hero panels
  const heroVisual = document.getElementById("heroVisual");
  const panels = document.querySelectorAll(".panel-card");

  if (heroVisual && panels.length > 0) {
    heroVisual.addEventListener("mousemove", (e) => {
      const rect = heroVisual.getBoundingClientRect();
      const relX = (e.clientX - rect.left) / rect.width - 0.5;
      const relY = (e.clientY - rect.top) / rect.height - 0.5;

      panels.forEach(p => {
        const speed = parseFloat(p.getAttribute("data-speed") || "1.0");
        const moveX = relX * 24 * speed;
        const moveY = relY * 24 * speed;
        p.style.transform = `translate(${moveX}px, ${moveY}px)`;
      });
    });

    heroVisual.addEventListener("mouseleave", () => {
      panels.forEach(p => {
        p.style.transform = "translate(0px, 0px)";
      });
    });
  }
}

// --- 17. SCROLL INTERSECTION ANIMATIONS ---
function initScrollAnimations() {
  const pipelineFill = document.getElementById("pipelineFill");
  const pipelineFlow = document.getElementById("pipelineFlow");

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (entry.target === pipelineFlow && pipelineFill) {
            pipelineFill.style.width = "100%";
          }
        }
      });
    }, { threshold: 0.2 });

    if (pipelineFlow) observer.observe(pipelineFlow);
  }
}

// --- 18. LIGHTWEIGHT SERVICE WORKER REGISTRATION (PWA READY) ---
function registerServiceWorker() {
  if ("serviceWorker" in navigator && window.location.protocol.startsWith("http")) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("service-worker.js").catch(() => {
        // Silently handle if not in live host context
      });
    });
  }
}
