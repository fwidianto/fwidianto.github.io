# Deployment Plan: Portfolio + ERP Dashboard Architecture

## Architecture Overview

```
┌─────────────────────────────────────────────────────────────────┐
│                    PORTFOLIO (GitHub Pages)                     │
│                      fwidianto.github.io                        │
│                                                                  │
│  ┌──────────────┐  ┌──────────────────┐  ┌──────────────────┐ │
│  │ Home Page    │  │ Investment Dash  │  │ HS Code Auto     │ │
│  └──────────────┘  └──────────────────┘  └──────────────────┘ │
│                                                                  │
│  Navigation: Projects ▾ → [AI ERP Dashboard → lasta.pythonanywhere.com] │
└─────────────────────────────────────────────────────────────────┘
                              │
                              │ "Back to Portfolio" link
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│                  ERP DASHBOARD (PythonAnywhere)                  │
│                       lasta.pythonanywhere.com                  │
│                                                                  │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │ • Main Dashboard (/)                                      │  │
│  │ • Table Explorer (/tables)                               │  │
│  │ • Customer/Supplier/Product Lookup                       │  │
│  │ • Analytics Dashboard (/dashboard/*)                     │  │
│  │ • AI Executive Advisor (/ai-advisor/*)                   │  │
│  │ • SQL Query Tool (/sql-query)                            │  │
│  └──────────────────────────────────────────────────────────┘  │
│                                                                  │
│  Header: [Dashboard Title] [← Back to Portfolio]                │
└─────────────────────────────────────────────────────────────────┘
```

## Deployment Responsibilities

### Portfolio (GitHub Pages)
- **Repository**: `fwidianto/fwidianto.github.io`
- **Branch**: `repo-cleanup-audit` (configured as GitHub Pages source)
- **URL**: https://fwidianto.github.io
- **Responsibilities**:
  - Showcase all projects
  - Link to ERP Dashboard
  - Investment Dashboard
  - HS Code Automation
  - AI ERP Dashboard link

### ERP Dashboard (PythonAnywhere)
- **Repository**: `fwidianto/fwidianto.github.io` (same repo, different folder)
- **Branch**: `repo-cleanup-audit`
- **URL**: https://lasta.pythonanywhere.com
- **Responsibilities**:
  - Full ERP analytics
  - Dashboard views
  - AI Executive Advisor
  - Database functionality

---

## Current Status

### ✅ Completed
1. **Portfolio Configuration**
   - All navigation links updated
   - Links to ERP Dashboard at lasta.pythonanywhere.com
   - GitHub Pages configured on repo-cleanup-audit branch
   - Pages build and deployment working

2. **ERP Dashboard Configuration**
   - All routes verified and working (14/14)
   - Blueprint template paths fixed
   - "Back to Portfolio" link added to topbar
   - GitHub Actions workflow updated

3. **Navigation Links**
   - Portfolio → ERP Dashboard: ✅ (via Projects dropdown)
   - ERP Dashboard → Portfolio: ✅ (via "Back to Portfolio" button)

### ⏳ Pending (Requires User Action)

PythonAnywhere configuration needs manual setup:

1. **Create new web app** for ERP Dashboard
2. **Configure WSGI file** to point to ~/erp-dashboard
3. **Set environment variable** `DATABASE_PATH`

---

## Manual PythonAnywhere Setup

### Step 1: Create Web App

1. Go to PythonAnywhere → **Web** tab
2. Click **Add a new web app**
3. Choose **Flask** → Python 3.10+
4. Set path to: `/home/lasta/erp-dashboard`
5. Configure WSGI file (see below)

### Step 2: Configure WSGI File

Edit `/var/www/lasta_pythonanywhere_com_wsgi.py`:

```python
import sys
import os

# Add the ERP Dashboard path
sys.path.insert(0, '/home/lasta/erp-dashboard')

# Set database path
os.environ['DATABASE_PATH'] = '/home/lasta/erp-dashboard/database/erp_database.db'

# Import and run the Flask app
from app import app as application
```

### Step 3: Initial Database Setup

In PythonAnywhere Bash console:

```bash
cd ~/erp-dashboard
mkdir -p database output
python scripts/generate_erp_data.py
python scripts/run_etl.py
```

### Step 4: Reload Web App

Back in Web tab → Click **Reload**

---

## Verification Checklist

After deployment, verify:

### Portfolio (GitHub Pages)
- [ ] https://fwidianto.github.io loads correctly
- [ ] Navigation shows "AI ERP Dashboard" link
- [ ] "AI ERP Dashboard" link goes to https://lasta.pythonanywhere.com
- [ ] Investment Dashboard page works
- [ ] HS Code Automation page works

### ERP Dashboard (PythonAnywhere)
- [ ] https://lasta.pythonanywhere.com loads correctly
- [ ] Dashboard shows KPI cards
- [ ] "Back to Portfolio" link goes to https://fwidianto.github.io
- [ ] /tables route works
- [ ] /dashboard route works
- [ ] /ai-advisor route works
- [ ] All data displays correctly

### Navigation Flow
- [ ] Portfolio → ERP Dashboard works
- [ ] ERP Dashboard → Portfolio works

---

## Repository Structure

```
fwidianto.github.io/
├── index.html                          # Portfolio Home (GitHub Pages)
├── CSS/
│   └── main.css
├── Assets/
│   └── favicon.svg
├── Projects/
│   ├── Investment Dashboard.html       # Portfolio Project
│   ├── WebScrapping.html               # Portfolio Project
│   ├── AI-ERP-IntelligenceDashboard/   # ERP Dashboard (PythonAnywhere)
│   │   ├── app.py                     # Flask app
│   │   ├── ai_advisor.py              # AI Advisor blueprint
│   │   ├── dashboard_app.py           # Dashboard blueprint
│   │   ├── templates/                 # HTML templates
│   │   ├── scripts/                   # ETL scripts
│   │   ├── data/                      # CSV source data
│   │   └── database/                  # SQLite database (generated)
│   ├── hs-code-automation/
│   └── portfolio-app/                 # (Not deployed)
└── .github/
    └── workflows/
        └── deploy.yml                 # Deploys to PythonAnywhere
```

---

## Troubleshooting

### Portfolio Issues
- **Page not found**: Check GitHub Pages settings → Source branch
- **CSS broken**: Verify CSS/main.css exists and is linked correctly
- **Links not working**: Check relative paths vs absolute URLs

### ERP Dashboard Issues
- **500 Error**: Check PythonAnywhere error logs
- **Database errors**: Verify DATABASE_PATH environment variable
- **Template errors**: Check blueprint template_folder paths
- **Import errors**: Run `pip install -r requirements.txt`

---

## Files Modified for This Architecture

| File | Change |
|------|--------|
| `index.html` | Updated navigation to link to lasta.pythonanywhere.com |
| `Projects/Investment Dashboard.html` | Updated AI ERP link |
| `Projects/WebScrapping.html` | Updated AI ERP link |
| `Projects/AI-ERP-IntelligenceDashboard/index.html` | Updated redirect URL |
| `Projects/AI-ERP-IntelligenceDashboard/templates/base.html` | Added "Back to Portfolio" link |
| `Projects/AI-ERP-IntelligenceDashboard/ai_advisor.py` | Fixed template folder path |
| `Projects/AI-ERP-IntelligenceDashboard/dashboard_app.py` | Fixed template folder path |
| `.github/workflows/deploy.yml` | Updated to deploy ERP Dashboard |

---

## Commit History (repo-cleanup-audit)

| Commit | Description |
|--------|-------------|
| `4cb2e4a` | Fix template folder paths and request.endpoint checks |
| `c5e729f` | Configure separate architecture for Portfolio and ERP Dashboard |
| `d4b087d` | Update all portfolio links to AI ERP Dashboard |
| `9f4b3bd` | Update GitHub Actions to deploy ERP Dashboard |

---

## Next Steps

1. **Configure PythonAnywhere** (manual - user action required)
   - Create web app for lasta.pythonanywhere.com
   - Point to ~/erp-dashboard
   - Set DATABASE_PATH environment variable

2. **Test the deployment**
   - Verify portfolio loads
   - Verify ERP Dashboard loads
   - Verify navigation works both ways

3. **Merge to main** (optional)
   - Once verified, merge repo-cleanup-audit to main
   - Update GitHub Pages source to main branch