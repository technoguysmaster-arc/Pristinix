# Pristinix – Premium Doorstep Car Detailing & Wash

Pristinix is a high-end web application for a luxury automotive doorstep detailing and car wash brand. It is built using **Next.js 15 (App Router)**, **React 19**, **Tailwind CSS**, and **Lucide React** icons.

---

## 🏎️ Features

- **Signature Services Showcase:** Express Wash, Wash + Interior Refresh, Interior Deep Cleaning, Exterior Deep Detailing, and Complete Detailing.
- **Paint Protection Coatings:** Detailed options for Teflon, Ceramic (9H), Graphene (10H), and Full Body PPF.
- **Monthly Care Plans:** Subscription tiers including Gloss (Basic), Shine (Premium), and Pristine (Elite) plans.
- **Direct WhatsApp Integration:** Direct links dynamically pre-configured with personalized templates to contact number `+91 62819 84964`.
- **Responsive Premium Dark Theme:** Sleek glassmorphism effects, radial red neon accent glows, and an optimized mobile navigation drawer.
- **Scan & Connect Section:** QR codes in the footer allowing customers to instantly scan to review on Google or follow on Instagram.

---

## 🚀 How to Host Locally (Localhost Setup)

Follow these steps to clone, configure, and host the Pristinix website on your local machine.

### 📋 Prerequisites

Before starting, make sure you have the following installed:
- [Node.js](https://nodejs.org/) (Version `18.x` or higher is recommended)
- **npm** (comes packaged with Node.js) or **yarn** / **pnpm**

---

### 🔧 1. Install Dependencies

First, open your terminal (PowerShell, Command Prompt, or bash) in the project root directory and install the required npm packages:

```bash
npm install
```

---

### 💻 2. Start the Local Server (Development Mode)

To run the application in development mode with hot-reloading (changes will reflect instantly in the browser):

```bash
npm run dev
```

Once started, the terminal will display the local URL. Open your web browser and navigate to:
👉 **[http://localhost:3000](http://localhost:3000)**

---

### 📦 3. Host a Production Build Locally

To test or serve the optimized production version of the website locally:

1. **Build the Application:**
   Compile and optimize the site for production:
   ```bash
   npm run build
   ```
2. **Start the Production Server:**
   Launch the compiled static pages:
   ```bash
   npm run start
   ```
3. Open your browser and navigate to:
   👉 **[http://localhost:3000](http://localhost:3000)**

---

## 📁 Key File Structure

- `/src/app/page.tsx` — Main page containing the sections (Hero, Services, Care Plans, Testimonials, Contact, and Footer).
- `/src/app/layout.tsx` — Global root layout, font setups, and metadata.
- `/src/app/globals.css` — Global styles, gradient text effects, and custom background animation properties.
- `/public/` — Asset directory housing the Pristinix logo, background images, and QR codes (`gmb-qr.jpg` and `insta-qr.jpg`).
