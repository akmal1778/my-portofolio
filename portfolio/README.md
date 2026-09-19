# Digital Systems & Analytics Portfolio

> **"Turning operational problems into measurable digital systems."**
> A modern, lightweight, high-performance static portfolio website engineered for **Product Builders, Data Analysts, Business Analysts, Automation Engineers, and System Designers**.

---

## ⚡ Key Highlights

- **Pure Vanilla Stack**: HTML5, Modern CSS (Variables, Grid, Flexbox, Clamp), Vanilla JavaScript (ES6+). Zero heavy frameworks, zero build bloat, instantaneous loading.
- **Data-Driven Architecture**: All 9 systems, 6 core capabilities, technology stacks, and timeline milestones are configured in clean JavaScript data models in `script.js`.
- **Systematic Design System**: Restrained editorial aesthetic inspired by Linear, Figma, and Notion. High-contrast typography (`Inter` + `JetBrains Mono`), dark charcoal & warm off-white palette, `#7C5CFC` electric violet accents.
- **Interactive Capabilities**:
  - Category filtering (`ALL`, `ANALYTICS`, `SALES`, `OPERATIONS`, `INVENTORY`, `HC`, `QUALITY`)
  - Live client-side instant search with reset triggers
  - Full-screen modal case study drawer with deep-dive problem/approach/solution/impact specs
  - Layered Hero UI showcase with mouse parallax
  - Smooth light/dark theme toggle with `localStorage` persistence
  - Fallback vector blueprint canvas for every project
- **PWA Ready**: Web App Manifest and network-first Service Worker included.

---

## 📁 Project Structure

```text
portfolio/
│
├── index.html              # Main HTML markup with accessible semantic structure
├── style.css               # Centralized CSS design tokens & responsive styling
├── script.js               # Data configuration, rendering, and interaction logic
├── manifest.json           # Progressive Web App configuration
├── service-worker.js       # Lightweight offline caching & network strategy
│
├── assets/
│   ├── profile.webp        # Your portrait photo (recommended: 800×960px WebP)
│   ├── og-image.webp       # Open Graph social preview (1200×630px)
│   │
│   ├── projects/           # High-resolution UI screenshots (1600×1000px WebP)
│   │   ├── sales-strategy.webp
│   │   ├── quality-control.webp
│   │   ├── cashier-ranking.webp
│   │   ├── target-product.webp
│   │   ├── kpi-analyst.webp
│   │   ├── google-review.webp
│   │   ├── hc-portal.webp
│   │   ├── inventory.webp
│   │   └── inventory-report.webp
│   │
│   └── icons/
│
└── README.md               # Setup & deployment documentation
```

---

## 🛠️ Customization Guide

### 1. Update Personal Profile & Social Links
Open `script.js` and locate the `portfolioConfig` object at the top:

```javascript
const portfolioConfig = {
  name: "YOUR FULL NAME",
  role: "Digital Systems & Analytics",
  tagline: "Turning operational problems into measurable digital systems.",
  email: "your.email@company.com",
  linkedin: "https://linkedin.com/in/yourprofile",
  github: "https://github.com/yourhandle",
  year: new Date().getFullYear()
};
```
Updating this automatically synchronizes the header brand, footer copyright, and contact channels.

### 2. Adding or Editing Systems / Projects
All projects are maintained in the `projects` array in `script.js`. Each project follows this schema:

```javascript
{
  id: "proj-10",
  number: "10",
  title: "New Automated Logistics Tracker",
  category: "Operations / Logistics",
  categories: ["OPERATIONS", "ANALYTICS"], // Used for filter tabs
  description: "Brief 1-2 sentence executive summary of what the system does.",
  role: "System Architecture / BI Modeling",
  tools: ["Google Sheets", "Apps Script", "Looker Studio"],
  image: "assets/projects/logistics.webp",
  problem: "What operational delay, discrepancy, or error did the organization face?",
  approach: "How did you design the schema, workflow, and access roles?",
  solution: "What digital tool or automated script was built?",
  impact: "What measurable improvement in time, SLA, or accuracy was achieved?",
  features: ["REAL-TIME TRUCK TRACKING", "DISPATCH AUTOMATION", "SLA ALERTS"]
}
```

*Note: If an image is missing or loading fails, an inline SVG blueprint wireframe automatically renders as an elegant architectural fallback.*

### 3. Customizing Colors and Theming
Colors and tokens are declared in `style.css` under `:root` (Light theme) and `[data-theme="dark"]` (Dark theme):

```css
:root {
  --bg: #F7F6F2;           /* Warm off-white background */
  --surface: #FFFFFF;      /* Clean white card surface */
  --surface-alt: #EFECE6;  /* Subtle grey-tinted secondary surface */
  --text: #111111;         /* Deep dark charcoal for high legibility */
  --text-muted: #5A5A5C;   /* Secondary text */
  --accent: #7C5CFC;       /* Electric violet signature accent */
  --accent-soft: rgba(124, 92, 252, 0.08);
}
```

---

## 🖼️ Recommended Asset Dimensions

| Asset | Target Path | Dimensions | Format |
|---|---|---|---|
| Profile Photo | `assets/profile.webp` | 800 × 960 px (4:5 ratio) | `.webp` or `.jpg` |
| Project Thumbnails | `assets/projects/<name>.webp` | 1600 × 1000 px (16:10 ratio) | `.webp` |
| Social OG Image | `assets/og-image.webp` | 1200 × 630 px | `.webp` or `.png` |

---

## 🚀 Deployment Instructions

### Method A: Deploying to Cloudflare Pages (Recommended)
1. Push your repository to **GitHub** or **GitLab**.
2. Log in to your [Cloudflare Dashboard](https://dash.cloudflare.com/) and go to **Workers & Pages** &gt; **Create application** &gt; **Pages**.
3. Connect your repository.
4. Set **Build command**: *(Leave blank)*.
5. Set **Build output directory**: `/` (or `portfolio/`).
6. Click **Save and Deploy**. Your site will be globally distributed on Cloudflare's edge within seconds with free SSL and blazing fast TTFB.

### Method B: Deploying to GitHub Pages
1. Push this repository to your GitHub account (e.g. `username/portfolio`).
2. Go to **Settings** &gt; **Pages** in your repository.
3. Under **Build and deployment** &gt; **Source**, select `Deploy from a branch`.
4. Choose the `main` branch and `/ (root)` folder (or `/docs`).
5. Click **Save**. Your site will be published at `https://<username>.github.io/<repo>/`.

### Method C: Local Preview
Run any static local server from the terminal:
```bash
# Using Python 3
python3 -m http.server 8000

# Or using Node npx serve
npx serve .
```
Then visit `http://localhost:8000` in your web browser.

---

## 📄 License
Designed for personal portfolio representation. Feel free to adapt the code for your own personal systems portfolio.
