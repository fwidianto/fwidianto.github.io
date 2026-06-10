# Portfolio Flask App

Interactive portfolio web application for Fauzan Widianto - Business Operations & ERP Analyst.

This Flask application runs on PythonAnywhere and serves as an interactive portfolio with navigation to external projects hosted on GitHub Pages.

## Features

- **Home Page** - Professional introduction and quick stats
- **About Page** - Professional summary and focus areas
- **Experience Page** - Professional timeline
- **Skills Page** - Technical competencies
- **Projects Page** - Showcase of all projects with links to external sites
- **Contact Page** - Contact information and social links

## Navigation

The app includes a unified navigation bar with:
- Internal pages: Home, About, Experience, Skills, Projects, Contact
- External dropdown: Links to projects on GitHub Pages
- Consistent styling matching the main portfolio

## Deployment

This app is designed to run on PythonAnywhere.

### Setup on PythonAnywhere

1. Create a new web app in PythonAnywhere dashboard
2. Choose Flask framework
3. Set source directory to this folder
4. Update the WSGI file to point to `app.py`

### Local Development

```bash
pip install -r requirements.txt
python app.py
```

Then visit `http://localhost:5000`

## Tech Stack

- Python 3
- Flask
- Jinja2 templates
- CSS (inline styles)

## File Structure

```
portfolio-app/
├── app.py              # Main Flask application
├── requirements.txt     # Python dependencies
├── README.md           # This file
└── templates/
    ├── base.html       # Base template with navigation
    ├── home.html       # Home page
    ├── about.html      # About page
    ├── experience.html # Experience timeline
    ├── skills.html     # Skills page
    ├── projects.html   # Projects showcase
    ├── contact.html    # Contact page
    └── error.html      # Error page
```

## Integration with GitHub Pages

This app redirects to external projects:
- `/investment-dashboard` → GitHub Pages Investment Dashboard
- `/hs-code-automation` → GitHub Pages HS Code Automation
- `/erp-dashboard` → Existing PythonAnywhere ERP Dashboard

## Author

**Fauzan Widianto**  
Business Operations & ERP Analyst  
[fauzan.widianto41@gmail.com](mailto:fauzan.widianto41@gmail.com)