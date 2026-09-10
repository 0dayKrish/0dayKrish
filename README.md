# Krish Sharma (0daykrish) — Cybersecurity Portfolio

> Official personal portfolio website of **Krish Sharma** (`0daykrish`) — Cybersecurity Researcher, Penetration Tester, AI Security Practitioner, and Founder of [BSides Vadodara](https://bsidesvadodara.in).

---

## ⚡ Overview & Aesthetic

Designed with a high-precision neo-brutalist technical aesthetic:
- **Zero AI cliches**: No cheesy Matrix rain, skulls, or fake green terminals. Clean, sharp typography, architectural borders, structured telemetry, and restrained security-emerald accents.
- **Strictly Decoupled Data**: All portfolio content (projects, research dossiers, skills, community work, credentials, contact information) resides in [`src/data/portfolio.ts`](./src/data/portfolio.ts) so you can update any detail without touching UI components.
- **Production Ready**: Built with Next.js 16 (App Router), TypeScript, Tailwind CSS v4, and Lucide icons.
- **100% Factual & Authentic**: Reflects Krish Sharma's actual cybersecurity background, certifications, and leadership roles.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router, Turbopack)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Typography**: Space Mono (via Next.js Google Fonts) + Geist
- **Icons**: Lucide React + Custom Inline SVGs
- **Deployment**: Vercel-ready (zero configuration needed)

---

## 📂 Project Structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── globals.css         # Neo-brutalist tokens, button styles, custom tags
│   │   ├── layout.tsx          # Root layout, fonts, full SEO & OpenGraph tags
│   │   ├── page.tsx            # Main single-page application orchestrator
│   │   ├── robots.ts           # SEO robots.txt generator
│   │   └── sitemap.ts          # SEO sitemap.xml generator
│   ├── components/
│   │   ├── Navbar.tsx          # Sticky navigation with live section tracker & mobile drawer
│   │   ├── Hero.tsx            # Krish Sharma // 0daykrish identity, radar, actions & uptime
│   │   ├── About.tsx           # Security practitioner manifesto & verified metrics
│   │   ├── Skills.tsx          # 6 categorized cybersecurity domains with real-time filter
│   │   ├── BSidesSpotlight.tsx # Dedicated BSides Vadodara founder feature & link
│   │   ├── Projects.tsx        # Technical projects with interactive case-study modals
│   │   ├── Research.tsx        # Vulnerability dossiers with severity tags & technical reports
│   │   ├── Certifications.tsx  # Verified credentials log (MSec-CAIS, CCST, Palo Alto, etc.)
│   │   ├── Experience.tsx      # Editorial table timeline of community & technical practice
│   │   ├── Contact.tsx         # "Let's talk security" direct email cards & mail composer
│   │   ├── Footer.tsx          # Minimal technical footer & back-to-top button
│   │   └── ui/
│   │       ├── CyberRadar.tsx  # Interactive security vector telemetry & radar reticle
│   │       └── SectionHeader.tsx# Standardized brutalist // SECTION dividers
│   ├── data/
│   │   └── portfolio.ts        # Central source of truth for all content and links
│   └── types/
│       └── portfolio.ts        # TypeScript interfaces for portfolio data architecture
├── public/                     # Static assets & icons
├── package.json
└── tsconfig.json
```

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production
```bash
npm run build
npm run start
```

### 4. Run Linter
```bash
npm run lint
```

---

## 🌐 Deploying to Vercel

1. Push this repository to GitHub:
   ```bash
   git add .
   git commit -m "Initial commit of Krish Sharma portfolio"
   git branch -M main
   git remote add origin https://github.com/0daykrish/portfolio.git
   git push -u origin main
   ```
2. Go to [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import your `portfolio` repository.
4. Framework preset will automatically detect **Next.js**.
5. Click **Deploy** — your portfolio is live in seconds!

---

## 🔒 Contact & Ownership

- **Krish Sharma** (`0daykrish`)
- Work / BSides: [krish@bsidesvadodara.in](mailto:krish@bsidesvadodara.in)
- Personal: [0daykrish@gmail.com](mailto:0daykrish@gmail.com)
- LinkedIn: [linkedin.com/in/0daykrish](https://linkedin.com/in/0daykrish)
- GitHub: [github.com/0daykrish](https://github.com/0daykrish)
- BSides Vadodara: [bsidesvadodara.in](https://bsidesvadodara.in)
