# SEO launch checklist for `salaborovic.rs`

Already prepared in the project (canonical host is `https://salaborovic.rs`):

- Canonical URLs point to `https://salaborovic.rs`
- `robots.txt` points to `https://salaborovic.rs/sitemap.xml`
- `sitemap.xml` includes all public pages
- Open Graph and Twitter URLs use `salaborovic.rs`
- JSON-LD structured data (WebSite, Organization, LocalBusiness/EventVenue) is rendered on the homepage
- `www` to apex redirects are prepared for Cloudflare Pages, Netlify-style hosting, Apache, and IIS
- HTTPS canonical host rules are prepared in Apache (`.htaccess`), IIS (`web.config`), and Netlify-style redirects (`_redirects`)

## What to do after the site is live

1. Add both `salaborovic.rs` and `www.salaborovic.rs` to the hosting provider.
2. Set `salaborovic.rs` as the primary domain (apex), with `www` redirecting to it.
3. Confirm HTTPS is active and that `http://` and `www.` both 301-redirect to `https://salaborovic.rs`.
4. Open Google Search Console and add a **Domain** property for `salaborovic.rs`.
5. Verify the domain with the DNS TXT record provided by Google.
6. Submit the sitemap in Search Console:
   `https://salaborovic.rs/sitemap.xml`
7. Request indexing for the main public pages:
   - `/`
   - `/o-nama`
   - `/galerija`
   - `/ponude`
   - `/kontakt`

## Local SEO (important for a venue in Bogatić)

- Create / claim the **Google Business Profile** for "Svečana sala Borović" at Pavla Orlovića 51, Bogatić.
  - Use the exact same name, address, and phone numbers as on the site (NAP consistency).
  - Add photos, working hours, and the website link `https://salaborovic.rs`.
- Make sure the address and phone numbers match across the site, Google Business Profile, Instagram, and Facebook.

## Optional but recommended

- Add the site to **Bing Webmaster Tools** and submit the same sitemap.
- Keep page titles, descriptions, and social preview images updated when content changes.
- After any DNS change, re-test social previews with the Facebook Sharing Debugger and Twitter/X Card Validator so caches refresh.
