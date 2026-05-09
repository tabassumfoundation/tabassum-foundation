# Tabassum Foundation Website

A high-performance website built with Astro, TypeScript, and Tailwind CSS.

## Stack
- **Astro 4** — Islands Architecture, Partial Hydration, SSG/Hybrid Rendering
- **Tailwind CSS** — Utility-first styling
- **TypeScript** — Type safety
- **Node.js adapter** — Server-side rendering when needed

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── Navbar.astro
│   └── Footer.astro
├── layouts/
│   └── Base.astro
├── pages/
│   ├── index.astro      (Home)
│   ├── about.astro      (About Us)
│   ├── activities.astro (Our Activities)
│   ├── donate.astro     (Donate)
│   ├── contact.astro    (Contact Us)
│   └── 404.astro
└── styles/
    └── global.css
```

## Adding Video to Hero

1. Place your hero video file at: `public/video/hero.mp4`
2. Open `src/pages/index.astro`
3. Uncomment this line in the video section:
   ```html
   <!-- <source src="/video/hero.mp4" type="video/mp4" /> -->
   ```
4. Remove the comment markers

## Adding Payment Numbers

Open `src/pages/donate.astro` and search for:
- `XXXX-XXXXXXX` (JazzCash) — replace with your JazzCash number
- `XXXX-XXXXXXX` (Easypaisa) — replace with your Easypaisa number

## Deployment on Hostinger

1. Build the project: `npm run build`
2. Upload the `dist/` folder contents to Hostinger via File Manager or FTP
3. Or use Hostinger's Node.js hosting for SSR features

## Environment Variables

Create `.env` for any secrets:
```
# Add future API keys here
# JAZZCASH_MERCHANT_ID=xxx
# EASYPAISA_STORE_ID=xxx
```

## Do We Need a Database?

**Currently: NO.** The site is fully static (prerendered) with no database needed.

**You WILL need a database/backend later for:**
- Storing contact form submissions
- Donation records/receipts
- Newsletter subscriber emails
- Admin panel to add activities

**Recommended when ready:** Supabase (free tier, Postgres, hosted)
