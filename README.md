# AJ Foundation

Website for AJ Foundation, built with [Next.js](https://nextjs.org) and deployed as a static export to GitHub Pages.

**Live site:** https://taskence4.github.io/aj.foundation/

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it locally.

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site (`next build`, static export via `output: 'export'`) and publishes it to GitHub Pages.

To build the static export locally:

```bash
npm run build
```

Output is written to `out/`.
