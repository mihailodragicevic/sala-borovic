# Sala Borovic

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Refresh 404 fix

The site uses `react-router-dom` with `BrowserRouter`, so production hosting must rewrite unknown routes back to `index.html`.

This repo now includes common SPA fallback configs for several hosting setups:

- `public/.htaccess` for Apache/cPanel hosting
- `public/_redirects` for Netlify-style static hosting
- `public/web.config` for IIS hosting
- `vercel.json` for Vercel rewrites

If the live domain still shows a server `404` after refresh, redeploy the latest build and make sure the hosting platform actually uses the matching config file.
