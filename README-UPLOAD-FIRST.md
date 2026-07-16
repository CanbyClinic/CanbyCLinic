# Canby Community Clinic Website — Upload Instructions

This package is built for the GitHub Pages repository `CanbyClinic/CanbyCLinic`.

## Upload the website

1. Download and unzip `canby-community-clinic-github-site.zip`.
2. Open the GitHub repository and click **Code**.
3. Click **Add file → Upload files**.
4. Drag **all files and folders inside** the unzipped folder into GitHub. Do not upload only the ZIP.
5. Select **Commit directly to the main branch** and click **Commit changes**.
6. Wait 1–3 minutes, then open `https://canbyclinic.github.io/CanbyCLinic/`.

## Connect `puravidacc.org` after the site is tested

In GitHub: **Settings → Pages → Custom domain → `puravidacc.org` → Save**.

In GoDaddy DNS, remove conflicting parking/website A records and add:

| Type | Name | Value |
|---|---|---|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | canbyclinic.github.io |

Do not use a wildcard DNS record. After GitHub provisions the certificate, enable **Enforce HTTPS**. DNS and certificate provisioning can take time.

## Required before final public launch

1. Connect a verified hosted donation processor. This package intentionally does not collect card data.
2. Have counsel or the privacy/compliance officer approve the formal Notice of Privacy Practices, nondiscrimination notice, privacy policy, terms, and donation language.
3. Confirm the permanent public and legal clinic names, the check payee, eligibility, insurance requirements, costs, services, languages, parking, public transit, and walk-in policy.
4. Replace concept images with real clinic photography when available. The current imagery is AI-generated editorial imagery and does not portray actual staff or facilities.
5. Do not add ordinary online forms that collect symptoms, diagnoses, test results, medical records, insurance member numbers, or other health information. GitHub Pages is a public static host, not a HIPAA patient portal.

## Website structure

- English and Spanish core pages
- Separate pages for services, appointments, about, patient resources, volunteer, donate, contact, location, privacy, notices, accessibility, and terms
- Seven long-form health articles with source lists
- Responsive navigation and mobile call/appointment buttons
- No advertising trackers, analytics pixels, or cookies
- `robots.txt`, `sitemap.xml`, structured data, favicon, and manifest
