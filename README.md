# Fauzan Widianto Portfolio

Personal portfolio website showcasing professional experience as a Business Operations & ERP Analyst with expertise in operational analytics, ERP systems, reporting automation, and executive dashboards.

## 🚀 Live Site

Visit the portfolio at: [fwidianto.github.io](https://fwidianto.github.io)

## 📋 Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Screenshots](#screenshots)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Local Development](#local-development)
- [Deployment](#deployment)
- [Troubleshooting](#troubleshooting)
- [Future Roadmap](#future-roadmap)
- [License](#license)

---

## 📖 Project Overview

This portfolio website serves as a professional showcase for Fauzan Widianto's work in:

- **ERP Systems**: Odoo & SAP implementation and optimization
- **Business Analytics**: Dashboard development, profitability analysis, KPI tracking
- **Process Automation**: Workflow optimization, reporting automation, API integrations
- **Operational Governance**: Cost control, performance monitoring, executive reporting

### Target Audience

- Potential employers and recruiters
- Industry professionals seeking ERP/analytics expertise
- Colleagues and collaborators

---

## ✨ Features

### Core Website Features

| Feature | Description |
|---------|-------------|
| **Hero Section** | Introduction with profile photo, role, and key metrics |
| **Experience Timeline** | Professional history with company details and responsibilities |
| **Skills Grid** | Categorized technical skills (ERP, Analytics, Automation, Business Control) |
| **Projects Showcase** | Featured projects with descriptions and technology tags |
| **Contact Section** | Email, LinkedIn, and GitHub links |
| **Responsive Design** | Mobile-friendly with breakpoints at 900px and 600px |
| **Smooth Scrolling** | Navigation anchor links with smooth scroll behavior |

### Featured Projects

#### 1. Investment Analytics Dashboard
- Real-time market monitoring via TradingView widgets
- AI-powered market commentary and portfolio allocation
- Central bank rate monitoring
- Market news aggregation
- Embedded Looker Studio dashboard
- **Tech**: Google Sheets, Looker Studio, Apps Script, Chart.js

#### 2. HS Code Trade Compliance Automation
- Automated tariff and import licensing data extraction
- Browser automation using Playwright
- Data extraction from Indonesia's National Single Window (INSW) portal
- Excel and JSON output generation
- **Tech**: Python, Playwright, OpenPyXL, Regex

#### 3. AI-ERP Intelligence Dashboard
- Flask-based web application with AI advisor capabilities
- Customer, product, and supplier analytics
- Sales and inventory data visualization
- Data quality monitoring
- SQL query interface
- **Tech**: Python, Flask, Pandas, Faker (sample data)

### Technical Highlights

- **Dark Theme**: Professional dark mode design with blue accent colors
- **Google Fonts**: Inter font family for modern typography
- **No Build Required**: Pure HTML/CSS/JavaScript - works directly from GitHub Pages
- **External Integrations**: TradingView widgets, Chart.js, Looker Studio

---

## 📸 Screenshots

> *Screenshots coming soon*

---

## 🛠 Tech Stack

### Frontend
| Technology | Purpose |
|------------|---------|
| HTML5 | Page structure and content |
| CSS3 | Styling and responsive design |
| Vanilla JavaScript | Interactive features |
| Google Fonts | Typography (Inter) |
| Chart.js | Data visualization |

### Backend / Automation
| Technology | Purpose |
|------------|---------|
| Python | Automation scripts and Flask apps |
| Flask | Web application framework |
| Playwright | Browser automation |
| Pandas | Data processing |
| OpenPyXL | Excel file manipulation |

### External Services
| Service | Purpose |
|---------|---------|
| GitHub Pages | Static site hosting |
| Google Sheets | Data storage for dashboard |
| Looker Studio | Business intelligence dashboards |
| TradingView | Market data widgets |

---

## 📁 Project Structure

```
fwidianto.github.io/
├── index.html                    # Main portfolio page
├── README.md                     # This file
├── .gitignore                    # Git ignore rules
├── Assets/                       # Static assets
│   ├── favicon.svg               # Site favicon
│   ├── Fauzan_Widianto_CV.pdf    # Resume download
│   ├── Profile Picture.jpeg      # Profile photo
│   ├── Odoo.png                  # Project image
│   ├── Profitability.png         # Project image
│   └── Data Studio.png           # Project image
├── CSS/                          # Stylesheets
│   ├── main.css                  # Main site styles
│   └── project.css               # Project page styles
├── Projects/                     # Sub-projects
│   ├── Investment Dashboard.html # Investment analytics
│   ├── WebScrapping.html         # HS Code automation docs
│   ├── JS/                       # JavaScript files
│   │   └── investment-dashboard.js
│   ├── AI-ERP-IntelligenceDashboard/  # Flask web app
│   │   ├── app.py
│   │   ├── dashboard_app.py
│   │   ├── ai_advisor.py
│   │   ├── requirements.txt
│   │   ├── templates/
│   │   ├── data/
│   │   ├── output/
│   │   └── scripts/
│   └── hs-code-automation/       # HS Code automation
│       ├── src/
│       │   └── main.py
│       ├── requirements.txt
│       ├── Cek HS Code.xlsx
│       └── README.md
```

---

## 🖥 Local Development

### Option 1: Direct Browser (Recommended)

Simply open `index.html` in any modern web browser:

```bash
# macOS
open index.html

# Linux
xdg-open index.html

# Windows
start index.html
```

### Option 2: Local Server

For testing with a local server (better for some features):

```bash
# Python 3
python -m http.server 8000

# Then visit http://localhost:8000
```

### Option 3: VS Code Live Server

1. Install the "Live Server" extension in VS Code
2. Right-click `index.html` and select "Open with Live Server"

---

## 🚀 Deployment

This site is deployed on **GitHub Pages**.

### Automatic Deployment

The site automatically deploys from the `main` branch.

1. Push changes to `main` branch
2. GitHub Pages builds and deploys automatically
3. Site available at `https://fwidianto.github.io`

### Manual Deployment

```bash
git checkout -b gh-pages
git push origin gh-pages
# Configure GitHub Pages to use gh-pages branch in repo settings
```

### Custom Domain

To use a custom domain:
1. Add `CNAME` file to repository root
2. Configure DNS records at your registrar
3. Enable HTTPS in GitHub Pages settings

---

## 🔧 Troubleshooting

### Images Not Loading

**Problem**: Images show broken icons

**Solution**: 
- Verify all images are in the `Assets/` folder
- Check file path references in HTML (e.g., `Assets/filename.png`)
- Ensure no spaces in file paths are causing issues

### CSS Styles Not Applied

**Problem**: Page appears unstyled

**Solution**:
- Verify `<link rel="stylesheet">` tags in `<head>`
- Check browser console for 404 errors
- Ensure CSS files are in the correct `CSS/` directory

### JavaScript Not Working

**Problem**: Interactive features don't work

**Solution**:
- Open browser developer console (F12)
- Check for JavaScript errors
- Verify external script sources are accessible

### Investment Dashboard Not Loading

**Problem**: Charts and data sections empty

**Solution**:
- This feature requires internet connection to fetch from Google Apps Script
- Check browser console for CORS or fetch errors
- The Google Apps Script endpoint must be publicly accessible

---

## 🗺️ Future Roadmap

- [ ] Add screenshots section with actual portfolio screenshots
- [ ] Implement dark/light theme toggle
- [ ] Add blog section for technical articles
- [ ] Improve accessibility (ARIA labels, keyboard navigation)
- [ ] Add project detail pages with more information
- [ ] Implement contact form with backend
- [ ] Add multi-language support (English/Indonesian)
- [ ] Improve SEO with meta tags and structured data

---

## 📝 License

This portfolio website and its contents are the property of Fauzan Widianto.

All rights reserved. Unauthorized reproduction, distribution, or use of any content without explicit permission is prohibited.

---

## 📬 Contact

| Platform | Link |
|----------|------|
| Email | fauzan.widianto41@gmail.com |
| LinkedIn | [linkedin.com/in/fauzanw19](https://linkedin.com/in/fauzanw19) |
| GitHub | [github.com/fwidianto](https://github.com/fwidianto) |

---

*Last updated: June 2026*
