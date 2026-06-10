# Deploying to PythonAnywhere from GitHub

This guide explains how to connect PythonAnywhere to automatically sync with your GitHub repository.

---

## Prerequisites

- GitHub account with repository access
- PythonAnywhere account
- SSH key pair

---

## Option A: Manual Setup (Git Hook Method)

### Step 1: Generate SSH Key on PythonAnywhere

```bash
# Open a Bash console on PythonAnywhere
ssh-keygen -t ed25519 -C "fwidianto@pythonanywhere.com"

# Press Enter to accept default location
# Set passphrase (or leave empty)
# Press Enter again

# View your public key
cat ~/.ssh/id_ed25519.pub
```

### Step 2: Add SSH Key to GitHub

1. Go to: https://github.com/settings/keys
2. Click **"New SSH key"**
3. Title: `PythonAnywhere`
4. Key type: `Authentication Key`
5. Paste your public key
6. Click **"Add SSH key"**

### Step 3: Clone Repository on PythonAnywhere

```bash
# In PythonAnywhere Bash console
cd ~

# Clone the repository (use SSH URL)
git clone git@github.com:fwidianto/fwidianto.github.io.git fwidianto-site

# Navigate to the repo
cd fwidianto-site

# Checkout the cleanup-audit branch
git checkout repo-cleanup-audit
```

### Step 4: Create Post-Receive Hook

```bash
# Create hooks directory if it doesn't exist
mkdir -p .git/hooks

# Create the hook file
nano .git/hooks/post-receive
```

Paste this content (replace `YOUR_USERNAME` with your PythonAnywhere username):

```bash
#!/bin/bash

# Repository location
GIT_DIR="/home/YOUR_USERNAME/fwidianto-site"

# Flask app location
FLASK_APP_DIR="/home/YOUR_USERNAME/portfolio-app"

# Change to repository
cd $GIT_DIR

# Pull latest changes
git pull origin repo-cleanup-audit

# Sync portfolio-app folder to Flask app
rsync -avz --delete $GIT_DIR/Projects/portfolio-app/ $FLASK_APP_DIR/

# Touch WSGI file to reload
touch /var/www/YOUR_USERNAME_pythonanywhere_com_wsgi.py
```

Make it executable:
```bash
chmod +x .git/hooks/post-receive
```

### Step 5: Set Up Flask App Directory

```bash
# Create Flask app directory
mkdir -p ~/portfolio-app

# Copy initial files
cp -r ~/fwidianto-site/Projects/portfolio-app/* ~/portfolio-app/
```

### Step 6: Configure PythonAnywhere Web App

1. Go to **Web** tab in PythonAnywhere
2. Click **Add a new web app**
3. Choose **Flask** framework
4. Set path to `/home/YOUR_USERNAME/portfolio-app`
5. Set WSGI file to `/home/YOUR_USERNAME/portfolio-app_wsgi.py`

### Step 7: Update WSGI File

Edit your WSGI file (`~/portfolio-app_wsgi.py`):

```python
import sys
import os

# Add your app directory to path
sys.path.insert(0, '/home/YOUR_USERNAME/portfolio-app')

# Import the Flask app
from app import app as application
```

---

## Option B: GitHub Actions (Automated)

### Step 1: Add Secrets to GitHub

1. Go to: https://github.com/fwidianto/fwidianto.github.io/settings/secrets/actions
2. Click **"New repository secret"**
3. Add these secrets:

| Name | Value |
|------|-------|
| `PYTHONANYWHERE_HOST` | `YOUR_USERNAME.pythonanywhere.com` |
| `PYTHONANYWHERE_USERNAME` | `YOUR_USERNAME` |
| `PYTHONANYWHERE_SSH_KEY` | Your **private** SSH key (not public!) |

### Step 2: Generate SSH Key for GitHub Actions

On PythonAnywhere:
```bash
# Generate a new key specifically for CI/CD
ssh-keygen -t ed25519 -C "github-actions" -f ~/.ssh/github_actions

# Copy the PRIVATE key (you'll add this to GitHub)
cat ~/.ssh/github_actions
```

Add this private key as a GitHub secret named `PYTHONANYWHERE_SSH_KEY`.

### Step 3: Add Public Key to PythonAnywhere

```bash
# Add to authorized_keys
cat ~/.ssh/github_actions.pub >> ~/.ssh/authorized_keys
```

---

## Testing the Setup

### Manual Pull Test

```bash
# On PythonAnywhere
cd ~/fwidianto-site
git pull origin repo-cleanup-audit
```

### Trigger Web Reload

```bash
# Touch the WSGI file
touch /var/www/YOUR_USERNAME_pythonanywhere_com_wsgi.py
```

### Check Logs

1. Go to PythonAnywhere **Web** tab
2. Click **View logs**
3. Look for any errors

---

## Troubleshooting

### SSH Connection Issues

```bash
# Test SSH connection
ssh -T git@github.com

# If it fails, check your key is correct
ssh -vvv git@github.com
```

### Git Permission Denied

```
Permission denied (publickey).
```

Solution: Ensure your public SSH key is added to GitHub AND your private key is correct.

### Web App Not Updating

```bash
# Check if files are synced
ls -la ~/portfolio-app/

# Check git status
cd ~/fwidianto-site
git status
git log --oneline -5
```

### WSGI Errors

Check PythonAnywhere error logs:
- Go to **Web** tab
- Click **View logs**
- Look for import errors or missing files

---

## Quick Reference

### Useful Commands

```bash
# Pull latest changes
cd ~/fwidianto-site && git pull

# Sync files
rsync -avz ~/fwidianto-site/Projects/portfolio-app/ ~/portfolio-app/

# Reload web app
touch /var/www/YOUR_USERNAME_pythonanywhere_com_wsgi.py

# Check Python version
python --version

# Test Flask app locally
cd ~/portfolio-app && python app.py
```

### Important Paths

| Path | Description |
|------|-------------|
| `~/fwidianto-site` | Git repository |
| `~/portfolio-app` | Flask application |
| `~/portfolio-app_wsgi.py` | WSGI entry point |
| `~/.ssh/id_ed25519.pub` | SSH public key |

---

## Notes

- The `repo-cleanup-audit` branch contains all the portfolio app code
- When you push to this branch, you need to manually pull on PythonAnywhere (or set up the hook)
- The GitHub Actions workflow file is already created in `.github/workflows/deploy.yml`
- You need to merge the branch to `main` for automatic GitHub Pages deployment

---

*Last updated: June 2026*