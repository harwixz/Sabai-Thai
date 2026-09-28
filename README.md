# Sabai — Thailand Trip Companion

Offline-first Progressive Web App for a Thailand trip: money, phrases, photos, places, and a calm daily rhythm.

## Install (Android)

1. Host these files on **HTTPS** (GitHub Pages works).
2. Open the site in **Chrome**.
3. Menu → **Install app** / Add to Home screen.
4. After install, it works offline.

## Live / Pages

If GitHub Pages is enabled for this repo, open:

**https://harwixz.github.io/Sabai-Thai/**

## Files

| File | Role |
|------|------|
| `index.html` | Full app |
| `manifest.json` | PWA manifest |
| `sw.js` | Offline cache |
| `icon-*.png` | App icons |
| `CHANGELOG.md` | Version history |
| `README.md` | This guide |

## Features

- **Home** — clocks, wallet (cash + bank), budget left, photo of the day, checklist, emergency strip, blog link
- **Talk** — Thai phrasebook with ★ Liked on top
- **Spend** — expenses, quick-add chips, wallet link (cash/card)
- **Pics** — gallery *or* camera, pick photo date, captions, streak, compression
- **More** — Money converter, Calendar, Places, Recap, content reminders, income from parents, emergency editor, trip dates

### Money

- Log spending in THB or EUR  
- Choose **paid from cash / bank / neither** so the wallet stays accurate  
- **Money received** (e.g. from parents) adds to cash or bank  
- Recap shows totals in **฿ and €**

### Reminders

Local times: **07:00 · 13:00 · 18:00 · 20:00**

- Photo / checklist nudges  
- TikTok & video content reminders (toggle in **More**)  

> Browser PWAs cannot guarantee background alarms when the OS kills the page. Reminders fire reliably when the app is open, and on the next open if a slot was missed.

### Emergency

- Tourist Police **1155**  
- Your hotel, allergies, notes (editable in Recap / More)

### Backup

- **Export JSON** — full restore  
- **Export summary** — readable `.txt` trip report  

## Privacy

All data stays on your device (`localStorage`). No account, no server.

## Theme

Toggle light / dark from the top bar. Preference is saved.

## License

Personal use for your trip. Built as Sabai.
