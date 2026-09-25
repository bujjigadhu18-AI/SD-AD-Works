# SD ADWORKS

> **AI-Powered Ads. Built to Get Attention.**

Official portfolio website of **SD ADWORKS**, founded and directed by **Sai Dinesh**. Showcases high-impact AI UGC advertisements, cinematic commercial concept demos, and short-form video campaigns designed to capture immediate attention on modern social platforms.

---

## Project Overview

SD ADWORKS is a high-performance, frontend-only portfolio built for an AI advertising and creative production studio. The site demonstrates six commercial concept showcases across different industries, paired with automatic video metadata inspection, interactive modal playback, structured service offerings, and instant WhatsApp project brief generation.

### Key Highlights
- **100% Frontend Architecture:** Fast, secure, and zero backend maintenance required.
- **Cinematic Dark Design:** Ultra-deep black surfaces (`#050505`), brushed metallic/chrome typography, racing crimson accents (`#E10600`), and ambient blur lighting.
- **Dynamic Video Metadata:** Real-time client-side detection of video duration, aspect ratio, and format (`9:16 Vertical`, `16:9 Landscape`, `1:1 Square`).
- **Zero-Storage Privacy Brief:** Contact form validates client inquiries and launches a pre-formatted WhatsApp chat directly with Sai Dinesh without collecting or storing database records.
- **Deployment-Ready:** Fully configured for instant one-click deployment on **Vercel** or **GitHub Pages**.

---

## Features

- **Header & Navigation:** Sticky glassmorphism header with active section tracking and smooth scroll.
- **Hero Showcase:** High-impact typography, founder badge, and primary action triggers.
- **Spec Ad Portfolio Grid:** 
  - 6 concept demos: **Luna Café** (Restaurant), **Apex Fitness** (Fitness), **Nova Heights** (Real Estate), **Vélora** (Fashion), **AERON X1** (Automotive), and **Flowly** (SaaS).
  - Filterable by niche categories.
  - Clear `SPEC AD / CONCEPT DEMO` attribution.
- **Cinematic Video Modal:** Custom HTML5 video player with timeline scrubber, play/pause, mute toggle, time counter, and fullscreen controls without noisy autoplay.
- **Services (10 Formats):** AI UGC Ads, Short-Form Video Ads, Product Ads, Instagram Reels, Restaurant & Café Ads, Fitness Ads, Real Estate Ads, Fashion Ads, Automotive Ads, and App / SaaS Ads.
- **Production Pipeline:** 5-step structured workflow (*01 Understand &rarr; 02 Concept &rarr; 03 Create &rarr; 04 Edit &rarr; 05 Deliver*).
- **Meet the Creator:** Spotlight on founder Sai Dinesh with direct WhatsApp, Instagram, and Email reach.
- **Contact & Brief Builder:** Generates an instant WhatsApp project request with business name, category, and requirements.

---

## Tech Stack

| Technology | Purpose |
| :--- | :--- |
| **React 19** | Component architecture & modern state primitives |
| **Vite 8** | Next-generation build tooling & HMR |
| **TypeScript** | Strict compile-time type safety |
| **Tailwind CSS v4** | Utility-first styling with `@tailwindcss/vite` |
| **Motion** | Fluid transitions and micro-interactions |
| **Lucide Icons** | Crisp, scalable SVG iconography |

---

## Local Development Instructions

### Prerequisites
- [Node.js](https://nodejs.org/) (v18.0.0 or higher recommended)
- `npm` or `pnpm`

### Setup Steps

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/SD-AD-Works.git
   cd "SD AD Works"
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) (or the port indicated in terminal) in your browser.

4. **Verify TypeScript & build:**
   ```bash
   npm run lint
   npm run build
   ```

---

## Centralized Contact Configuration

All contact links across the site are managed in a single file: `src/config/contact.ts`.

```typescript
export const CONTACT = {
  whatsapp: "919014407732",                         // International WhatsApp number (no + or spaces)
  instagram: "https://www.instagram.com/_d.i.n.e.s.h_2604/", // Instagram profile URL
  email: "bujjigadhu18@gmail.com"                   // Primary inquiry email
};
```

Updating these values automatically updates all buttons, mailto links, and WhatsApp URL generators across the website.

---

## Asset Replacement Instructions

Assets are organized systematically in the `public/assets/` directory:

```text
public/
└── assets/
    ├── founder/
    │   └── sai-dinesh.png          # High-resolution founder portrait
    ├── instagram-qr.png            # Official Instagram profile QR code
    └── portfolio/
        ├── luna-cafe/
        │   ├── luna-cafe.mp4       # Video demo clip
        │   └── poster.jpg          # Video poster frame
        ├── apex-fitness/
        │   ├── apex-fitness.mp4
        │   └── poster.jpg
        ├── nova-heights/
        │   ├── nova-heights.mp4
        │   └── poster.jpg
        ├── velora/
        │   ├── velora.mp4
        │   └── poster.jpg
        ├── aeron-x1/
        │   ├── aeron-x1.mp4
        │   └── poster.jpg
        └── flowly/
            ├── flowly.mp4
            └── poster.jpg
```

To replace any video or poster:
1. Drop your new `.mp4` or `.jpg` file into the corresponding folder using the exact filenames listed above.
2. The site will automatically detect the new video duration, format, and aspect ratio on the fly.

---

## Deployment Instructions

### Deploy to Vercel (Recommended)

1. Push your code to a GitHub repository named `SD AD Works`.
2. Go to [Vercel](https://vercel.com/) and click **Add New &rarr; Project**.
3. Import your `SD AD Works` repository.
4. Vercel automatically detects Vite:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
5. Click **Deploy**. The `vercel.json` file in this repository handles SPA routing automatically.

### Deploy to Netlify

1. Link your repository in [Netlify](https://www.netlify.com/).
2. Set Build command to `npm run build` and Publish directory to `dist`.
3. Deploy site.

---

## License

&copy; 2026 SD ADWORKS. All rights reserved. Directed & Operated by Sai Dinesh.
