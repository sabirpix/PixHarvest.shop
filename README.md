# PixHarvest — Full GitHub-ready Website (Customer + Admin)

This package is a full static frontend suitable for GitHub Pages, using Firebase Firestore & Storage for data and client-side Razorpay + UPI flows.
**Important:** For production security and robust payment verification, add server-side order creation and verification (e.g., Firebase Cloud Functions).

## Quick steps to deploy on GitHub Pages
1. Create a repo on GitHub named `pixharvest` (public).
2. Upload/unzip the contents of this folder into the repo root and commit to `main` branch.
3. Go to GitHub → Settings → Pages → Select branch `main` and folder `/ (root)` → Save.
4. Your site will be live at `https://<your-username>.github.io/pixharvest` within minutes.

## Configure before production
- `js/firebase-config.js` already contains your Firebase config provided earlier.
- Set `js/payment-config.js` -> `RAZORPAY_KEY_ID` to your Razorpay key.
- Replace placeholder images in `images/` with real product photos and logo.
- Update Firestore security rules for production.

## Notes
- UPI VPA set to: sa0653286@okicici
- Razorpay client checkout is included; server-side order creation is recommended for production.
