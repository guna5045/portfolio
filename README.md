# Gunashekhar Ammajigari - Software Engineering Portfolio

Production-quality, recruiter-focused portfolio website tailored for **Salesforce Summer 2027 Software Engineer Intern (AMTS)** applications.

## Technical Architecture & Design System

- **Framework**: React 18 + Vite
- **Design System**: Modular Vanilla CSS with CSS Custom Properties
- **Theme**: Salesforce High-Tech Slate (`#0B0F19` background, `#121826` cards, `#00A1E0` primary accent, `#4F8CFF` secondary accent)
- **Typography**: Inter & Plus Jakarta Sans (Headings & Body), Fira Code (Technical Specifications & Code pills)
- **Responsiveness**: Mobile-first grid layouts, dynamic viewports, accessible modal dialogs

---

## Directory Structure

```
portfolio/
├── index.html
├── package.json
├── vite.config.js
├── README.md
├── assets/
│   ├── images/
│   │   ├── IMG.jpg
│   │   ├── civicresolve-1.png
│   │   ├── civicresolve-2.png
│   │   ├── apexpulse-1.png
│   │   └── apexpulse-2.png
│   ├── resume/
│   │   └── Gunashekhar_Resume.pdf
│   └── icons/
├── public/
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── components/
    │   ├── Navbar.jsx
    │   ├── Hero.jsx
    │   ├── About.jsx
    │   ├── Skills.jsx
    │   ├── Projects.jsx
    │   ├── ProjectCard.jsx
    │   ├── ProjectModal.jsx
    │   ├── Achievements.jsx
    │   ├── ResumeSection.jsx
    │   ├── Contact.jsx
    │   └── Footer.jsx
    ├── data/
    │   ├── portfolioData.js
    │   └── projectDetails.js
    └── styles/
        ├── index.css
        ├── variables.css
        ├── typography.css
        ├── components.css
        └── animations.css
```

---

## Local Development Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start dev server:
   ```bash
   npm run dev
   ```

3. Build production bundle:
   ```bash
   npm run build
   ```

---

## Portfolio Sections Overview

1. **Hero**: 100vh full-screen profile section with profile image ring styling, core software engineering titles, tagline, CTAs, and social links.
2. **About**: Recruiter-focused introduction highlighting B.Tech CSE (Graduating 2028 @ Kalasalingam Academy of Research and Education), enterprise Java, and scalable backend interest.
3. **Technical Skills**: Grouped cards (Languages, Frontend, Backend, Database, Cloud, Tools, Core CS).
4. **Featured Projects**: Dominant showcase cards for **CivicResolve** (Civic Reporting Platform) and **ApexPulse** (Real-Time Telemetry & Observability), featuring interactive architecture modals.
5. **Achievements**: Modern cards showcasing Hackathon victories, IEEE hackathon honors, ICTIEE 2026 presenter selection, SIH participation, and IKSC leadership.
6. **Resume**: Dedicated section with prominent PDF download action (`assets/resume/Gunashekhar_Resume.pdf`).
7. **Contact**: Recruiter touchpoint with direct email launcher, LinkedIn, GitHub, location, and message composer.
