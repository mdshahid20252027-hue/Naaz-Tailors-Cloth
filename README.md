# Naaz Tailors & Cloth — Website

A responsive React + Vite brand showcase website for Naaz Tailors & Cloth. It uses the shop photographs supplied by the client.

## Features
- Responsive layout for mobile, tablet and desktop
- Brand story, collections, tailoring services and photo gallery
- Gallery category filters and image lightbox
- WhatsApp enquiry links and enquiry form (opens a pre-filled WhatsApp message)
- Click-to-call and Google Maps directions
- No cart, checkout, payment gateway or online product ordering

## Run locally
1. Install Node.js (LTS).
2. Open this folder in VS Code.
3. Open Terminal and run:
   ```bash
   npm install
   npm run dev
   ```
4. Open the local URL shown by Vite, usually http://localhost:5173.

## Build for hosting
```bash
npm run build
npm run preview
```
Upload the generated `dist` folder to a static host such as Vercel or Netlify. For Vercel, import the GitHub repository and use the default Vite settings (`npm run build`, output directory `dist`).

## Before publishing — confirm with the client
- Confirm the exact shop address / Google Maps pin.
- Confirm the phone number 9304102020 is the WhatsApp-enabled number.
- Confirm the wording and service list, including whether alterations and kids' tailoring are offered.
- Replace or supplement the current photos with original high-resolution photos where available.
- Confirm permission to publish all photos, especially identifiable people and the inauguration image.
- Add business hours and a privacy notice if required.

## Business contact configuration
The WhatsApp number is configured in `src/main.jsx` as `PHONE = '919304102020'`. It is in international format (91 + Indian mobile number). Change it there if the client provides another WhatsApp number.

The Google Maps short link is configured as `MAP_URL` in `src/main.jsx`.
