const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const publicDir = path.join(root, 'public');
const appDir = path.join(root, 'app');

const trebolIcon = path.join(publicDir, 'images', 'TREBOL_01.png');
const trebolLogoFull = path.join(publicDir, 'images', 'TREBOL_DIGITAL_26_LOGO_02.png');
const heroImage = path.join(publicDir, 'hero_panoramica.png');

if (fs.existsSync(trebolIcon)) {
  fs.copyFileSync(trebolIcon, path.join(publicDir, 'logo.png'));
  fs.copyFileSync(trebolIcon, path.join(publicDir, 'icon.png'));
  fs.copyFileSync(trebolIcon, path.join(publicDir, 'apple-touch-icon.png'));
  fs.copyFileSync(trebolIcon, path.join(publicDir, 'favicon-32x32.png'));
  fs.copyFileSync(trebolIcon, path.join(publicDir, 'favicon-16x16.png'));
  fs.copyFileSync(trebolIcon, path.join(publicDir, 'android-chrome-192x192.png'));
  fs.copyFileSync(trebolIcon, path.join(publicDir, 'android-chrome-512x512.png'));
  fs.copyFileSync(trebolIcon, path.join(appDir, 'icon.png'));
  fs.copyFileSync(trebolIcon, path.join(appDir, 'apple-icon.png'));
  console.log('✅ Favicon and logo assets synchronized successfully.');
}

if (fs.existsSync(heroImage)) {
  fs.copyFileSync(heroImage, path.join(publicDir, 'og-image.png'));
  console.log('✅ og-image.png synchronized.');
}
