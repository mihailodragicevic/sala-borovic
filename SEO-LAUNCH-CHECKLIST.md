SEO launch checklist for `salaborovic.com`

Already prepared in the project:

- Canonical URLs point to `https://salaborovic.com`
- `robots.txt` points to `https://salaborovic.com/sitemap.xml`
- `sitemap.xml` includes all public pages
- Open Graph and Twitter URLs use `salaborovic.com`
- `www` to apex redirects are prepared for Vercel, Netlify-style hosting, Apache, and IIS
- HTTPS canonical host rules are prepared in Apache, IIS, and Netlify-style redirects

What to do after the site is live:

1. Add both `salaborovic.com` and `www.salaborovic.com` to the hosting provider.
2. Set `salaborovic.com` as the primary domain.
3. Open Google Search Console and add a Domain property for `salaborovic.com`.
4. Verify the domain with the DNS record provided by Google.
5. Submit this sitemap in Search Console:
   `https://salaborovic.com/sitemap.xml`
6. Request indexing for the main public pages:
   `/`
   `/o-nama`
   `/galerija`
   `/ponude`
   `/kontakt`
7. If the old `.rs` domain is still active, set a permanent `301` redirect from every old URL to the matching `salaborovic.com` URL.

Optional but recommended:

- Add the site to Bing Webmaster Tools and submit the same sitemap
- Keep page titles, descriptions, and social preview images updated when content changes
