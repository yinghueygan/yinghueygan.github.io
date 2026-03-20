# Gan Ying Huey — Portfolio

A responsive, animated React portfolio for a Full Stack Developer. Built for free hosting on **GitHub Pages** or **Vercel/Netlify**.

---

## 🚀 Quick Start

### 1. Install dependencies
```bash
npm install
```

### 2. Run locally
```bash
npm start
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🌐 Deploy to GitHub Pages (Free)

### Step 1 — Create a GitHub repo
- Go to [github.com](https://github.com) and create a new repository named:
  - `username.github.io` → your portfolio will live at `https://username.github.io`
  - OR any name like `portfolio` → it'll live at `https://username.github.io/portfolio`

### Step 2 — Update `package.json`
Open `package.json` and update the `homepage` field:

```json
// If repo is username.github.io:
"homepage": "https://yinghueygan.github.io"

// If repo is named "portfolio":
"homepage": "https://yinghueygan.github.io/portfolio"
```

### Step 3 — Push your code
```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

### Step 4 — Deploy
```bash
npm run deploy
```
This builds the app and pushes it to a `gh-pages` branch automatically.

### Step 5 — Enable GitHub Pages
- Go to your repo on GitHub → **Settings** → **Pages**
- Source: **Deploy from a branch** → select `gh-pages` → `/ (root)`
- Click **Save**
- Your site will be live in 1–2 minutes! ✅

---

## ⚡ Alternative: Deploy to Vercel (Even Easier)

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com) → **New Project**
3. Import your GitHub repo
4. Click **Deploy** — done! Zero config needed.

Free custom domain support included with Vercel.

---

## 🎨 Customization

### Update your GitHub links
In `src/components/Projects.js`, update each project's `github` field to point to the actual repo:

```js
github: 'https://github.com/yinghueygan/your-actual-repo',
```

### Update your profile photo
Replace the avatar initials in `src/components/Home.js` — or add an `<img>` tag inside `.avatar-core` with your actual photo.

### Add/Edit projects
Edit the `projects` array in `src/components/Projects.js`.

---

## 🛠️ Tech Stack
- **React 18** — UI framework
- **CSS Variables** — theming
- **CSS Animations** — all animations are pure CSS
- **Google Fonts** — Syne + Space Mono
- **gh-pages** — deployment package

---

## 📁 Project Structure
```
src/
├── index.js          # Entry point
├── index.css         # Global styles + CSS variables
├── App.js            # Router / page switcher
├── App.css           # Layout styles
└── components/
    ├── Navbar.js/css
    ├── Home.js/css
    ├── Projects.js/css
    ├── Experience.js/css
    ├── Education.js/css
    └── Awards.js/css
```
