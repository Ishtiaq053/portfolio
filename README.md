# Ishtiaq Ahmad — Portfolio

A modern, production-ready portfolio built with **Next.js 14 (App Router)**, **Tailwind CSS**, and **Framer Motion**.

---

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev

# 3. Open in browser
# http://localhost:3000
```

---

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── globals.css        # Global styles, animations, CSS variables
│   ├── layout.tsx         # Root layout + font imports
│   └── page.tsx           # Main page (assembles all sections)
│
├── components/
│   ├── Navbar.tsx         # Sticky navigation with active section tracking
│   ├── Hero.tsx           # Full-screen hero with hexagon photo
│   ├── About.tsx          # Story + skills carousel cards
│   ├── Services.tsx       # Services grid / mobile carousel
│   ├── Projects.tsx       # Projects grid with search + filter
│   ├── Education.tsx      # Glowing vertical timeline
│   ├── Contact.tsx        # Contact form + info
│   ├── Footer.tsx         # Footer
│   └── ScrollReveal.tsx   # IntersectionObserver for reveal animations
│
├── data/
│   ├── projects.json      # ← Edit to add/update projects
│   └── services.json      # ← Edit to add/update services
│
└── public/
    ├── profile.png        # Profile photo
    ├── showroom.png       # Project images
    ├── restaurant.png
    ├── factory.png
    ├── dealsfinder.png
    ├── workerfinder.png
    └── cv.pdf             # ← Add your CV file here
```

---

## ✏️ How to Edit Content

### Adding/Editing Projects

Edit `data/projects.json`:

```json
{
  "id": 6,
  "title": "My New Project",
  "shortDesc": "Short description shown on card",
  "overview": "Detailed project overview",
  "features": ["Feature 1", "Feature 2"],
  "technologies": ["React", "Node.js"],
  "purpose": "Why you built it",
  "image": "/my-project.png",
  "tags": ["React", "Node.js"],
  "github": "https://github.com/Ishtiaq053/repo"
}
```

Place the project image in `/public/my-project.png`.

### Adding/Editing Services

Edit `data/services.json`:

```json
{
  "id": 7,
  "title": "New Service",
  "description": "Description of what this service covers.",
  "icon": "Globe",
  "color": "#f97316"
}
```

Available icons: `Globe`, `Layers`, `Smartphone`, `Palette`, `Database`, `Settings`

### Adding Your CV

Place your CV file at `public/cv.pdf` — the Download CV button will work automatically.

---

## 🏗️ Build for Production

```bash
npm run build
npm start
```

---

## 🎨 Design System

| Token | Value |
|-------|-------|
| Background | `#000000` |
| Card | `#0A0A0A` |
| Border | `#1A1A1A` |
| Accent | `#f97316` (orange) |
| Text | `#ffffff` |
| Muted | `rgba(255,255,255,0.4)` |

Fonts: **Bebas Neue** (display) + **DM Sans** (body) + **JetBrains Mono** (code/labels)
