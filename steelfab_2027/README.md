# Petrotek UAE at SteelFab 2027

Campaign landing page for Petrotek UAE at SteelFab 2027 (11–14 January, Sharjah).
Static single-page site built with Vite, React and Tailwind CSS.

## Requirements

- Node.js 20.19+ (or 22.12+)

## Commands

```bash
npm install       # install dependencies
npm run dev       # start dev server at http://localhost:5173
npm run build     # typecheck and build static site into dist/
npm run preview   # serve the built site locally
```

Optional env vars: `PORT` (dev server port, default 5173) and `BASE_PATH`
(public base path, default `/`, e.g. `/steelfab/` when hosted in a subfolder).

## Deployment

`dist/` is plain static files and can be hosted anywhere (Netlify, Vercel,
Cloudflare Pages, S3, Nginx, cPanel, ...). The site is a single page, so no
rewrite rules are required.

## Structure

- `index.html` – page shell and SEO meta tags
- `src/App.tsx` – all landing page content and sections
- `src/index.css` – styles
- `public/assets`, `public/posters` – logos, imagery and campaign posters
