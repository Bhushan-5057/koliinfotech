# KOLI Infotech Deployment Guide (Namecheap cPanel + Node.js Selector)

This guide deploys the current Next.js project using standalone server output.

## 1) Deployment Architecture

- Runtime: Next.js standalone Node server
- Host: Namecheap Shared Hosting (Stellar Plus)
- Process manager: cPanel Node.js Selector
- App root: Node app directory in your home path (example: `koliinfotech-app`)
- Startup file: `server.js`
- Document root: leave default public web root for your domain mapping in cPanel
- Proxy flow: Domain request -> Apache/cPanel -> Node.js app -> Next server

## 2) Build Local Artifact

Run this from project root:

```bash
npm run build:cpanel
```

Output folder:

- `deploy/cpanel`

This folder is the upload package.

## 3) Files to Upload

Upload all content inside `deploy/cpanel`:

- `.next/`
- `node_modules/`
- `public/`
- `src/` (kept by standalone tracing)
- `server.js`
- `package.json`
- `.env.production.example`
- `README.txt`

## 4) cPanel Click-by-Click Steps

1. Login to Namecheap cPanel.
2. Open **Setup Node.js App**.
3. Click **Create Application**.
4. Select:
   - Node.js version: `18.x` (or latest available LTS)
   - Application mode: `Production`
   - Application root: `koliinfotech-app`
   - Application URL: choose `koliinfotech.com`
   - Application startup file: `server.js`
5. Click **Create**.
6. Open **File Manager**.
7. Navigate to your home directory and open `koliinfotech-app`.
8. Upload all files from local `deploy/cpanel` into this folder.
9. Back in **Setup Node.js App**, click **Environment Variables**.
10. Add required variables from `.env.production.example`.
11. Click **Run NPM Install** in Node.js app panel (if enabled).
12. Click **Restart**.

## 5) Required Environment Variables

Set at least:

- `NEXT_PUBLIC_SITE_URL=https://koliinfotech.com`
- `NEXT_PUBLIC_API_BASE_URL=https://koliinfotech.com/api/`
- `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=...`
- `NEXT_PUBLIC_GA_MEASUREMENT_ID=...`
- `CONTACT_EMAIL_HOST=...`
- `CONTACT_EMAIL_PORT=587`
- `CONTACT_EMAIL_USER=...`
- `CONTACT_EMAIL_PASSWORD=...`
- `CONTACT_EMAIL_CC=...`
- `CONTACT_EMAIL_TLS_SERVERNAME=premium164.web-hosting.com`

## 6) Domain + HTTPS

1. In cPanel, ensure `koliinfotech.com` is mapped to this Node.js app.
2. Open **SSL/TLS Status**.
3. Run **AutoSSL** for the domain and `www` alias if used.
4. Confirm browser opens `https://koliinfotech.com` without warnings.

## 7) Redirects (Recommended)

If you want single-canonical apex domain, add redirect in cPanel **Domains > Redirects**:

- Redirect `www.koliinfotech.com` -> `https://koliinfotech.com` (301)

## 8) Post-Deploy Verification

Check these URLs:

- `/`
- `/contact-us`
- `/blogs`
- `/case-studies`
- `/api/robots`
- `/api/sitemap`
- `/robots.txt`
- `/sitemap.xml`

Also verify:

- Contact form submission sends emails
- Images load from local/public and remote hosts
- No console errors in browser devtools

## 9) Troubleshooting

- Blank page / 503:
  - Check startup file is `server.js`
  - Restart app in Node.js Selector
  - Ensure Node version is compatible (18+)
- 404 for assets:
  - Confirm `.next/static` exists in app root
- API route 404:
  - Ensure app actually restarted after upload
- Email not sending:
  - Recheck SMTP vars and port
  - Use server hostname for TLS servername on shared hosting
- Build mismatch:
  - Rebuild locally with `npm run build:cpanel` and re-upload complete package

## 10) Rollback Procedure

1. Keep a timestamped backup of previous app root.
2. If new release fails, stop app in Node.js Selector.
3. Restore previous backup files to app root.
4. Restart Node.js app.
5. Re-test homepage and contact form.

## 11) What Screenshot to Capture

Capture these screens for records:

1. Node.js App settings page showing:
   - Node version
   - App root
   - Startup file
   - URL binding
2. Environment Variables panel with keys visible (not secret values).
3. File Manager view of uploaded app root showing `server.js` and `.next`.
4. Browser view of:
   - Homepage
   - `/robots.txt`
   - `/sitemap.xml`
