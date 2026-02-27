# Samir Bhusal — Personal Portfolio

A modern, responsive personal portfolio website built with React and Vite. Features a dark-themed design with smooth animations, an interactive particle background, and sections covering skills, projects, experience, and contact.

## 🌐 Live Site

[samirbhusal.github.io/personal-website](https://samirbhusal.github.io/personal-website) <!-- update if hosted elsewhere -->

---

## ✨ Features

- **Animated hero section** with a live typewriter effect and interactive particle background
- **Smooth scroll navigation** via `react-scroll` with an active-link indicator
- **Skills showcase** with filterable category tabs and animated cards
- **Projects, Experience & Education** sections with glassmorphism card design
- **Contact form** with client-side validation
- **Responsive layout** — fully optimised for mobile, tablet, and desktop
- **Mobile scroll bug fixes** — stable viewport height (`--vh` CSS variable), passive scroll listeners, and `overscroll-behavior: none` to prevent pull-to-refresh
- **Back-to-top** button with entrance/exit animations

---

## 🛠 Tech Stack

| Category | Technology |
|---|---|
| Framework | [React 19](https://react.dev) |
| Build Tool | [Vite 7](https://vite.dev) |
| Animations | [Framer Motion](https://www.framer.com/motion/), [GSAP](https://gsap.com) |
| Particles | [@tsparticles/react](https://github.com/tsparticles/react) |
| Scroll | [react-scroll](https://github.com/fisshy/react-scroll) |
| Icons | [react-icons](https://react-icons.github.io/react-icons/) |
| Styling | Vanilla CSS with CSS Custom Properties |
| Fonts | Inter, Fira Code (Google Fonts) |
| Linting | ESLint 9 |

---

## 📁 Project Structure

```
personal-website/
├── public/
│   ├── favicon.png
│   ├── samir-bhusal-resume.pdf   # Resume PDF served at /samir-bhusal-resume.pdf
│   └── resume.html
├── src/
│   ├── components/               # React components (one per section)
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Experience.jsx
│   │   ├── Education.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   └── BackToTop.jsx
│   ├── styles/                   # Per-component CSS files
│   ├── App.jsx                   # Root component — composes all sections
│   ├── main.jsx                  # Entry point; sets stable --vh CSS variable
│   └── index.css                 # Global styles, CSS variables, resets
├── index.html
├── vite.config.js
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- npm (bundled with Node.js)

### Installation

```bash
# Clone the repository
git clone https://github.com/samirbhusal/personal-website.git
cd personal-website

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

Opens the dev server at `http://localhost:5173` with Hot Module Replacement.

### Build for Production

```bash
npm run build
```

Output is written to the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

---

## 📱 Mobile Optimisations

Several fixes are in place to ensure a smooth mobile experience:

- **Stable viewport height** — A JS-set `--vh` CSS variable (based on `window.innerHeight`) prevents layout shifts when the mobile browser address bar hides/shows during scroll.
- **No pull-to-refresh** — `overscroll-behavior: none` on both `html` and `body` disables the pull-to-refresh gesture on Android Chrome.
- **Passive scroll listeners** — All `scroll` event handlers use `{ passive: true }` for maximum scroll performance.
- **Particles non-blocking** — The particle canvas has `pointer-events: none` so it never intercepts touch/scroll events.

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
