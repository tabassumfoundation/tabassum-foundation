# 📁 Tabassum Foundation — Media Setup Guide

## ✅ What Was Done

| File | Change |
|------|--------|
| `src/layouts/Base.astro` | Full SEO: meta tags, Open Graph, Twitter Card, JSON-LD structured data, canonical URLs |
| `src/pages/index.astro` | All gallery/activity images → local paths. Team photos untouched. |
| `src/pages/about.astro` | Gallery mosaic → local paths. **Team photos kept as-is.** |
| `src/pages/activities.astro` | All activity images → local paths with SEO alt text |
| `src/styles/global.css` | Fluid typography, responsive fixes, reduced-motion, print styles |
| `public/robots.txt` | Search-engine crawling rules |
| `public/sitemap.xml` | All pages listed for indexing |

---

## 📂 Folder Structure for Your Media

```
tabassum-foundation/
└── public/
    ├── video/
    │   ├── hero.mp4          ← your hero video (already here)
    │   └── hero.webm         ← OPTIONAL: add a compressed WebM for faster load
    │
    ├── images/
    │   ├── gallery/          ← your 57 photos go here
    │   │   ├── gallery-01.jpg
    │   │   ├── gallery-02.jpg
    │   │   │   ... up to gallery-57.jpg
    │   │
    │   ├── activities/       ← copies/subset of your photos for activity cards
    │   │   ├── act01-a.jpg   ← main wide image for Activity 1
    │   │   ├── act01-b.jpg   ← small thumbnail
    │   │   ├── act01-c.jpg   ← small thumbnail
    │   │   ├── act02-a.jpg   ← Activity 2 (school bags)
    │   │   ├── act02-b.jpg
    │   │   ├── act02-c.jpg
    │   │   ├── act03-a.jpg   ← Activity 3 (learning circle)
    │   │   ├── act03-b.jpg
    │   │   ├── act03-c.jpg
    │   │   ├── act04-a.jpg   ← Activity 4 (food distribution)
    │   │   ├── act04-b.jpg
    │   │   └── act04-c.jpg
    │   │
    │   └── team/             ← ready for when you have profile photos
    │       ├── rameez-riaz.jpg
    │       ├── mah-noor.jpg
    │       ├── jalil-ahmed.jpg
    │       ├── kamran-elahi.jpg
    │       ├── waqar-un-nisa.jpg
    │       ├── misbah-zahoor.jpg
    │       └── wajid-ali.jpg
    │
    ├── favicon.png           ← add your logo here (32×32 or 64×64 px)
    ├── apple-touch-icon.png  ← add your logo here (180×180 px)
    ├── og-default.jpg        ← social share thumbnail (1200×630 px)
    ├── robots.txt            ← ✅ done
    └── sitemap.xml           ← ✅ done
```

---

## 🔢 Step-by-Step: What You Need to Provide

### Step 1 — Rename and copy your 57 photos
Rename them sequentially: `gallery-01.jpg` through `gallery-57.jpg`
Place them in: `public/images/gallery/`

### Step 2 — Pick photos for activity cards
From your 57 photos, choose the best ones for each activity.
Copy them into `public/images/activities/` and rename like the table above.
- Activity 1 (Gift Packs): 3 photos → act01-a, act01-b, act01-c
- Activity 2 (School Bags): 3 photos → act02-a, act02-b, act02-c
- Activity 3 (Learning Circle): 3 photos → act03-a, act03-b, act03-c
- Activity 4 (Food Distribution): 3 photos → act04-a, act04-b, act04-c

### Step 3 — Hero video
Your `hero.mp4` is already in `public/video/` ✅
Optionally convert to WebM for 30–50% smaller file:
```bash
ffmpeg -i hero.mp4 -c:v libvpx-vp9 -crs 33 -b:v 0 public/video/hero.webm
```

### Step 4 — Favicon & logo
Export your logo as:
- `public/favicon.png` (64×64 px, transparent background)
- `public/apple-touch-icon.png` (180×180 px)

### Step 5 — OG image (social sharing thumbnail)
Create a 1200×630 px image (use Canva or Figma) with your logo + tagline.
Save as: `public/images/og-default.jpg`

### Step 6 — Profile photos (when ready)
When you have executive body photos:
1. Place them in `public/images/team/`
2. Open `src/pages/index.astro` and `src/pages/about.astro`
3. Replace the `https://tabasumfoundation.org/wp-content/...` URLs
   with local paths like `/images/team/rameez-riaz.jpg`

---

## 📸 Image Optimization Tips (for fast loading)

| Type | Max size | Format | Dimensions |
|------|----------|--------|------------|
| Gallery photos | < 200 KB | JPEG (quality 80) | 1200×900 px max |
| Activity cards | < 150 KB | JPEG (quality 80) | 900×600 px |
| Team portraits | < 80 KB | JPEG (quality 85) | 400×400 px |
| Hero video poster | < 100 KB | JPEG | 1920×1080 px |
| OG image | < 200 KB | JPEG | 1200×630 px |

**Free tools:**
- [Squoosh.app](https://squoosh.app) — browser-based image compression
- [Handbrake](https://handbrake.fr) — video compression

---

## ❓ Q1 — Should I use a database for images/videos?

**For a non-profit website of this size: NO database needed.**

### Use the `/public` folder (what you have now):
✅ **Fastest rendering** — files served as static assets from CDN edge
✅ Zero database overhead, no query latency
✅ Free hosting on Vercel / Netlify / Cloudflare Pages
✅ Browser caching works perfectly
✅ No backend needed

### When you WOULD use a database or cloud storage:
- You need users to **upload** new photos themselves via the website
- You have **thousands** of photos that need search/filter/tagging
- You want to manage media from a CMS dashboard (e.g., Sanity, Strapi)
- Videos are very large (>50 MB each) → use **Cloudflare Stream** or **Bunny.net** instead

### Recommended upgrade path (when you have 24 videos):
For your 24 short clips, **do NOT put them in `/public`** directly —
they will bloat your deployment. Use one of:
- **Cloudflare Stream** (free up to 100 min, then $5/1000 min)
- **Bunny.net** (very affordable, ~$0.01/GB bandwidth)
- **YouTube (unlisted)** — embed with `<iframe>` tags, zero hosting cost

Then embed them in your activities page with `<iframe>` or the platform's embed code.

---

## 🚀 Deployment

```bash
npm install
npm run build
# Deploy the `dist/` folder to Vercel, Netlify, or Cloudflare Pages
```

For Vercel (recommended for Astro):
```bash
npx vercel --prod
```
