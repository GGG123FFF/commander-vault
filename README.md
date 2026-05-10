# ⚔️ Commander Vault

A personal MTG Commander deck tracker built with React + Vite.

Track your decks, colour coverage across all combinations, and Strixhaven school representation.

## Features

- 🃏 **Deck list** — add, edit, remove decks with colour identity
- 🗺 **Coverage map** — see every colour combination you have or are missing
- 🎓 **Strixhaven Schools** — track your five-college representation

---

## Running locally

```bash
npm install
npm run dev
```

Then open http://localhost:5173

## Building for production

```bash
npm run build
```

Output goes to `/dist`.

---

## Deploying to GitHub Pages (free hosting)

### One-time setup

1. Push this repo to GitHub
2. Go to **Settings → Pages**
3. Under **Source**, choose **GitHub Actions**
4. That's it — every push to `main` will auto-deploy!

Your live URL will be: `https://<your-username>.github.io/<repo-name>/`

---

## Step-by-step: Put this on GitHub

### 1. Install Git (if you haven't)
Download from https://git-scm.com/downloads and install.

### 2. Create a GitHub account
Sign up at https://github.com if you don't have one.

### 3. Create a new repository
- Go to https://github.com/new
- Name it `commander-vault` (or anything you like)
- Keep it **Public** (required for free GitHub Pages)
- **Do not** tick "Add README" — we already have one
- Click **Create repository**

### 4. Open a terminal in this project folder
On Windows: right-click the folder → "Open in Terminal"

### 5. Run these commands

```bash
git init
git add .
git commit -m "Initial commit - Commander Vault"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/commander-vault.git
git push -u origin main
```

Replace `YOUR_USERNAME` with your GitHub username.

### 6. Enable GitHub Pages
- Go to your repo on GitHub
- Click **Settings** (top menu)
- Click **Pages** (left sidebar)
- Under **Source** → select **GitHub Actions**
- Click **Save**

### 7. Wait ~2 minutes
GitHub will build and deploy automatically. You'll see a green tick on the **Actions** tab when it's done.

### 8. Visit your live app!
URL: `https://YOUR_USERNAME.github.io/commander-vault/`

---

## Making changes

Edit `src/App.jsx`, then:

```bash
git add .
git commit -m "describe your change"
git push
```

GitHub Actions will rebuild and redeploy automatically within ~2 minutes.
