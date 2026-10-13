# Hostinger Deployment Guide for Sadhana RR Enterprises

This Next.js 16 (App Router) website is optimized for deployment on **Hostinger Unlimited Web Hosting** with Node.js Web Apps support.

---

## 1. Hosting Environment Requirements

- **Node.js Version:** `v20.x`, `v22.x`, or `v24.x` (Recommended: LTS `v20.x` or `v22.x`)
- **Package Manager:** `npm`
- **Application Type:** Next.js / Node.js Web App

---

## 2. Quick Deployment Steps on Hostinger hPanel

### Step A: Create the Node.js Web App
1. Log in to **Hostinger hPanel**.
2. Navigate to **Websites** -> select `sadhanarr.com` (or your domain).
3. Under the **Advanced** or **Web Applications** section, click on **Node.js**.
4. Click **Create Application** / **Add Application**:
   - **Node.js Version:** Select `20.x` or `22.x`
   - **Application Root:** `/home/uXXXXXXX/domains/sadhanarr.com/public_html` (or `nodejs`)
   - **Application Startup File:** `server.js` or `npm start`
   - **Application Mode:** `Production`

---

### Step B: Upload Project Files
Upload the project files via **Git**, **SSH**, or **File Manager**:
- Exclude `node_modules` and `.next` folder when uploading source files.
- Ensure `package.json`, `next.config.ts`, `tsconfig.json`, `src/`, and `public/` are present.

---

### Step C: Environment Variables
Create or upload `.env.production` (or configure Environment Variables in hPanel):
```env
NEXT_PUBLIC_SITE_URL=https://sadhanarr.com
PORT=3000
NODE_ENV=production
```

---

### Step D: Install Dependencies & Build

Via SSH terminal in the application directory:
```bash
npm install --production=false
npm run build
```

---

### Step E: Start the Application

In Hostinger hPanel Node.js dashboard, set:
- **Build Command:** `npm run build`
- **Start Command:** `npm run start`

Click **Restart Application** or **Start**.

---

## 3. Verifying the Deployment
1. Visit `https://sadhanarr.com/`
2. Test:
   - Sticky Navigation & Mobile Menu
   - Hero Call & WhatsApp Links
   - Equipment Fleet Filters & Detail Pages (`/equipment/jcb-excavator-rental`)
   - Local SEO Page (`/service-areas/visakhapatnam`)
   - Quotation Form & WhatsApp Direct Dispatch
   - `/sitemap.xml` & `/robots.txt`
