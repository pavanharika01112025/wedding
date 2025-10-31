# Development Guide

This guide will help you preview and test the wedding website locally before deployment.

## Prerequisites

- Node.js (v14 or higher) and npm installed
- A modern web browser (Chrome, Firefox, Safari, or Edge)

## Local Development Setup

### 1. Install Dependencies

First, install the development dependencies:

```bash
npm install
```

### 2. Start Local Development Server

Run one of these commands to start a local server:

```bash
npm run dev
# or
npm start
```

This will:
- Start a local server on `http://localhost:8080`
- Automatically open the website in your default browser
- Serve files from the `public/` directory

### 3. Access from Mobile Devices on Same Network

To test on your mobile device:

1. Find your computer's local IP address:
   - **Windows**: Run `ipconfig` in Command Prompt and look for "IPv4 Address"
   - **Mac/Linux**: Run `ifconfig` or `ip addr` and look for your local network IP

2. On your mobile device, open:
   ```
   http://YOUR_IP_ADDRESS:8080
   ```
   Example: `http://192.168.1.100:8080`

3. Make sure your mobile device is on the same Wi-Fi network as your computer.

## Testing with Browser DevTools

All modern browsers have built-in device emulation tools:

### Chrome/Edge DevTools

1. Open the website in Chrome or Edge
2. Press `F12` or `Right-click > Inspect` to open DevTools
3. Click the **Toggle Device Toolbar** icon (📱) or press `Ctrl+Shift+M` (Windows/Linux) or `Cmd+Shift+M` (Mac)
4. Select a device preset or set custom dimensions
5. Test different device sizes:
   - iPhone SE (375x667)
   - iPhone 12 Pro (390x844)
   - Samsung Galaxy S20 (360x800)
   - iPad (768x1024)

### Firefox DevTools

1. Open the website in Firefox
2. Press `F12` to open DevTools
3. Click the **Responsive Design Mode** icon or press `Ctrl+Shift+M`
4. Select device presets or enter custom dimensions

### Safari DevTools

1. Enable Developer menu: Safari > Preferences > Advanced > Check "Show Develop menu"
2. Open the website
3. Develop > Enter Responsive Design Mode or press `Cmd+Ctrl+R`

## Testing Different Screen Sizes

Test these key breakpoints:

- **Extra Small**: 360px (Small Android phones)
- **Small**: 480px (Large Android phones, small iPhones)
- **Medium**: 768px (Tablets, large phones in landscape)
- **Large**: 1024px (Small laptops, large tablets)
- **Extra Large**: 1200px+ (Desktops)

## Configuration

### Enable YouTube Live Link

1. Open `public/script.js`
2. Find the `WEDDING_CONFIG` object at the top
3. Update the configuration:

```javascript
const WEDDING_CONFIG = {
    youtubeLiveUrl: 'https://www.youtube.com/watch?v=YOUR_VIDEO_ID',
    enableYouTubeWedding: true,  // Set to true to enable
    enableYouTubeReception: false,
    // ... other config
};
```

### Test Checklist

Before deployment, test:

- [ ] Website loads correctly on mobile devices
- [ ] Navigation menu (hamburger) works on mobile
- [ ] All buttons are easily clickable (minimum 44x44px touch target)
- [ ] Text is readable at all screen sizes
- [ ] Images and content don't overflow horizontally
- [ ] Countdown timer displays correctly
- [ ] YouTube button appears when enabled (if configured)
- [ ] Site works in both portrait and landscape orientations
- [ ] Safe area insets work correctly on notched devices (iPhone X+)

## Deployment

When ready to deploy to Firebase:

```bash
firebase deploy
```

The website will be deployed from the `public/` directory.

## Troubleshooting

### Port Already in Use

If port 8080 is already in use, you can specify a different port:

```bash
npx http-server public -p 3000 -o
```

### Cannot Access from Mobile Device

- Ensure both devices are on the same Wi-Fi network
- Check that your firewall allows incoming connections on port 8080
- Try accessing using the computer's IP address instead of `localhost`

### Changes Not Reflecting

- Hard refresh the page: `Ctrl+Shift+R` (Windows/Linux) or `Cmd+Shift+R` (Mac)
- Clear browser cache
- Restart the development server

## Useful Links

- [Chrome DevTools Device Mode](https://developer.chrome.com/docs/devtools/device-mode/)
- [Firefox Responsive Design Mode](https://developer.mozilla.org/en-US/docs/Tools/Responsive_Design_Mode)
- [Firebase Hosting Documentation](https://firebase.google.com/docs/hosting)
