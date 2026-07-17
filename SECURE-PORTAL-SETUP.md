# Secure patient portal and intake configuration

The public GitHub Pages site is a static front end. GitHub's own documentation warns that Pages should not be used for sensitive transactions such as passwords. Do not connect the demographic form to ordinary email, FormSubmit, Google Forms, a generic webhook, or a free-tier database.

## What is already built

- Animated bilingual entry experience: New Patient / Sign In / Enter Website
- English and Spanish patient portal launch pages
- English and Spanish first-page demographic forms
- Confidentiality notices
- Appointment follow-up modal
- No password or patient-form data is stored in localStorage, cookies, the GitHub repository, or browser analytics

## Required before enabling submissions

Choose an approved patient-portal/intake provider, complete the clinic's security risk analysis, and sign a Business Associate Agreement when required. The solution should support authentication, role-based access, encryption, audit logs, backup/recovery, breach procedures, and secure staff access.

Then edit `assets/js/config.js`:

```js
window.CANBY_CONFIG = {
  donationCheckoutUrl: "https://verified-donation-provider.example/...",
  portalLoginUrl: "https://secure-portal.example/login",
  portalSignupUrl: "https://secure-portal.example/register",
  portalResetUrl: "https://secure-portal.example/forgot-password",
  secureCallbackUrl: "https://secure-api.example/callback",
  secureIntakeUrl: "https://secure-api.example/intake"
};
```

The secure intake endpoint must accept JSON over HTTPS, authenticate/authorize clinic staff on the receiving side, encrypt data at rest and in transit, maintain access/audit records, and avoid placing PHI in ordinary notification email. A notification email may say that a new secure submission is waiting; staff should open the protected system to read it.

## Fields intentionally not collected on the public page

Social Security numbers and driver's-license numbers are shown as items to complete directly with clinic staff or in the approved portal. They should not be sent by ordinary email.
