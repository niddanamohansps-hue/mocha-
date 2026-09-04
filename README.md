# Nexora Technologies — Software Agency Platform

[![CI / Production Build](https://github.com/niddanamohansps-hue/mocha-/actions/workflows/ci.yml/badge.svg)](https://github.com/niddanamohansps-hue/mocha-/actions/workflows/ci.yml)
[![Vercel Deployment](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=flat&logo=vercel)](https://mocha-indol.vercel.app/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5-blue?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18.3-61dafb?style=flat&logo=react)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.4-38b2ac?style=flat&logo=tailwind-css)](https://tailwindcss.com/)

> **"We Build Digital Solutions That Help Businesses Grow."**
> You focus on your business. We build the technology.

?? **Live Website**: [https://mocha-indol.vercel.app/](https://mocha-indol.vercel.app/)

---

## ?? Key Features

* **Warm, Approachable SaaS Design System**: Light-first canvas (`#fafbfe`) with Google Fonts **Outfit** & **Plus Jakarta Sans**, soft pastel badges, and accessible typography. Full dark-mode toggle included.
* **Agency Control Center (`/admin`)**:
  * **Inbound CRM Dashboard**: Filter leads by status (`New Lead`, `In Review`, `Contacted`, `Proposal Sent`, `Closed / Won`), write internal timestamped notes, and export full pipelines to CSV.
  * **Live Brand Customizer**: Edit agency name, tagline, email, phone, location, social links, and dispatch webhooks in real-time with instant DOM reactivity.
* **Interactive Project Scope & Cost Estimator (`/estimator`)**:
  * Pick platform categories (Web App, Internal ERP, CRM, AI Integration).
  * Toggle specialized capabilities (WhatsApp notifications, Celery background workers, AI RAG search).
  * Choose velocity pace (Standard vs. Accelerated Sprint).
  * Dynamically computes investment tiers in INR (?) and delivery timelines.
  * 1-click **"Proceed With This Scope"** transfers the calculated requirements directly into the inquiry form.
* **Verified Production Architecture Blueprints (`/projects/:slug`)**:
  * Interactive step-by-step data flow diagrams showing clients how their systems are built from frontend to backend queues and databases.
* **Lead Dispatcher (`/contact`)**:
  * Validated contact form with honeypot anti-spam, celebration confetti, CRM registration, and optional webhook dispatch.

---

## ??? Technology Stack

| Layer | Technology |
| :--- | :--- |
| **Frontend Framework** | React 18 + TypeScript |
| **Build & Bundler** | Vite 5 with manual vendor chunking |
| **Styling** | Tailwind CSS 3.4 with custom soft shadows & warm palettes |
| **Animations** | Framer Motion |
| **Icons** | Lucide React (curated dynamic tree-shaken map) |
| **Routing** | React Router v6 with SPA deep-linking fallback |
| **CI/CD** | GitHub Actions (`.github/workflows/ci.yml`) + Vercel Edge Network |

---

## ?? CI/CD Pipeline

This repository includes an automated GitHub Actions pipeline (`.github/workflows/ci.yml`):

1. **Continuous Integration (CI)**:
   * Triggers automatically on every `push` and `pull_request` to the `main` branch.
   * Runs clean dependency installation (`npm ci`).
   * Executes strict TypeScript type-checking (`tsc`).
   * Bundles assets via Vite (`vite build`).
   * Verifies production artifacts and archives the `dist/` bundle for 7 days.

2. **Continuous Deployment (CD)**:
   * Connected directly to Vercel via GitHub webhooks.
   * Every passing commit to `main` triggers a zero-downtime, global CDN edge deployment at [mocha-indol.vercel.app](https://mocha-indol.vercel.app/).

---

## ?? Local Development

```bash
# Clone the repository
git clone https://github.com/niddanamohansps-hue/mocha-.git
cd mocha-

# Install dependencies
npm install

# Start local dev server
npm run dev
```

Visit [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build & Preview
```bash
# Typecheck & build for production
npm run build

# Preview production build locally
npm run preview
```

---

## ?? License

Proprietary software developed for **Nexora Technologies**. All rights reserved.
