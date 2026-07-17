# Canby Community Clinic Website — Fixed Version 2

This is the replacement package for the GitHub Pages repository `CanbyClinic/CanbyCLinic`.

## Upload the corrected website

1. Download and unzip `canby-community-clinic-fixed-v2.zip`.
2. Open the GitHub repository and click **Code → Add file → Upload files**.
3. Drag **all files and folders inside** the unzipped folder into GitHub. Do not upload the ZIP itself.
4. Select **Commit directly to the main branch** and click **Commit changes**.
5. Wait 1–3 minutes and hard-refresh `https://canbyclinic.github.io/CanbyCLinic/` with **Command + Shift + R**.

The upload replaces matching files and adds the new editorial-policy page. Old unused image files may remain in GitHub without affecting the live site.

## What was corrected

- Rebuilt responsive page layouts and typography
- Replaced stretched and low-resolution visuals with optimized WebP images
- Created seven distinct article hero images with responsive 800 px versions
- Constrained service icons so they cannot expand beyond their cards
- Corrected capitalization and button labels
- Added an interactive Patient Resources “Care Compass”
- Added unique titles, descriptions, canonicals, Open Graph data, article schema, internal links, source lists, and an image-enabled sitemap
- Added reciprocal English/Spanish `hreflang` tags
- Added an editorial policy explaining sourcing, updates, medical limitations, and illustrative imagery
- Rebuilt favicon and app icons from the clinic mark
- Removed public collection of medical details and kept ordinary forms limited to nonclinical contact information

## Donation setup

The site intentionally does **not** collect card numbers. To activate secure online donations, add a verified hosted checkout URL from Stripe, PayPal, Givebutter, or another approved processor in:

`assets/js/config.js`

Replace the empty value in `hostedDonationCheckoutUrl`. Until that is configured, donation buttons safely route to the donation-options page instead of opening a broken checkout.

## Connect `puravidacc.org` after testing

In GitHub: **Settings → Pages → Custom domain → `puravidacc.org` → Save**.

In GoDaddy DNS, remove conflicting parking/website records and add:

| Type | Name | Value |
|---|---|---|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | canbyclinic.github.io |

After GitHub provisions the certificate, enable **Enforce HTTPS**.

## Final clinic review required

Before public launch, clinic leadership should confirm the legal entity name, services, eligibility, costs, insurance rules, languages, appointment process, check payee, parking/transit details, privacy notices, and donation language. Generated photographs are illustrative and do not depict actual staff, patients, or the actual clinic facility.
