# Deploy Sabai to GitHub Pages

## One-shot update (recommended)

1. Download **Sabai-GitHub-FULL-v145.zip**
2. Unzip locally
3. On https://github.com/harwixz/Sabai-Thai → **Add file → Upload files**
4. Drag **all** files from the zip (overwrite existing)
5. Commit message: `v1.4.5 full payload`
6. Wait ~1 minute for Pages
7. Open https://harwixz.github.io/Sabai-Thai/ and hard-refresh

## What must be at repo root
- `index.html` (loader, n=73)
- `sw-v15.js`
- `b_0.txt` … `b_72.txt`
- `manifest.json`, icons
- `CHANGELOG.md`, `README.md`

## After update on phone/Mac
Clear site data for `harwixz.github.io`, then reload.
