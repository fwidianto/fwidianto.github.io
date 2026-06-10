"""
Portfolio - Flask Application for PythonAnywhere
Fauzan Widianto - Business Operations & ERP Analyst
"""

from flask import Flask, render_template, redirect, url_for
import os

app = Flask(__name__)
app.config['SITE_URL'] = 'https://fwidianto.pythonanywhere.com'
app.config['GITHUB_PAGES_URL'] = 'https://fwidianto.github.io'

# Navigation links
NAV_PROJECTS = [
    {'name': 'Investment Dashboard', 'icon': '📊', 'url': 'https://fwidianto.github.io/Projects/Investment%20Dashboard.html'},
    {'name': 'HS Code Automation', 'icon': '🧾', 'url': 'https://fwidianto.github.io/Projects/WebScrapping.html'},
]

# ========================================
# BASE TEMPLATE CONTEXT
# ========================================

@app.context_processor
def inject_nav():
    return {
        'nav_projects': NAV_PROJECTS,
        'github_pages_url': app.config['GITHUB_PAGES_URL']
    }

# ========================================
# ROUTES
# ========================================

@app.route('/')
def home():
    """Home page - Introduction"""
    return render_template('home.html')

@app.route('/about')
def about():
    """About page - Professional summary"""
    return render_template('about.html')

@app.route('/experience')
def experience():
    """Experience timeline"""
    return render_template('experience.html')

@app.route('/skills')
def skills():
    """Skills and competencies"""
    return render_template('skills.html')

@app.route('/projects')
def projects():
    """Projects overview with links to external projects"""
    return render_template('projects.html')

@app.route('/contact')
def contact():
    """Contact information"""
    return render_template('contact.html')

# ========================================
# EXTERNAL PROJECT LINKS
# ========================================

@app.route('/investment-dashboard')
def investment_dashboard():
    """Redirect to Investment Dashboard on GitHub Pages"""
    return redirect('https://fwidianto.github.io/Projects/Investment%20Dashboard.html')

@app.route('/hs-code-automation')
def hs_code_automation():
    """Redirect to HS Code Automation on GitHub Pages"""
    return redirect('https://fwidianto.github.io/Projects/WebScrapping.html')

@app.route('/erp-dashboard')
def erp_dashboard():
    """Redirect to ERP Dashboard (existing PythonAnywhere app)"""
    return redirect('https://fwidianto.pythonanywhere.com/')

# ========================================
# ERROR HANDLERS
# ========================================

@app.errorhandler(404)
def not_found(e):
    return render_template('error.html', message='Page not found'), 404

@app.errorhandler(500)
def server_error(e):
    return render_template('error.html', message='Internal server error'), 500

# ========================================
# MAIN
# ========================================

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)