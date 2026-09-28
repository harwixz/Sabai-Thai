# Sabai — Thailand Trip Companion

Offline-first Progressive Web App for a Thailand trip: money, phrases, photos, places, and a calm daily rhythm.

## Install (Android)

1. Host these files on **HTTPS** (GitHub Pages works).
2. Open the site in **Chrome**.
3. Menu → **Install app** / Add to Home screen.
4. After install, it works offline.

## Live / Pages

**https://harwixz.github.io/Sabai-Thai/**

## Files

| File | Role |
|------|------|
| `index.html` | App shell (UI) |
| `app.js` | App logic |
| `manifest.json` | PWA manifest |
| `sw.js` | Offline cache |
| `icon-*.png` | App icons |
| `CHANGELOG.md` | Version history |
| `README.md` | This guide |

## Features

- **Home** — clocks, wallet, **clear budget** (pool / received / spent / left), photo of the day, checklist, emergency
- **Talk** — Thai phrasebook with ★ Liked on top
- **Spend** — expenses, quick-add, wallet link
- **Pics** — gallery or camera, photo date, captions, streak
- **More** — Money, Calendar, Places, Recap, **Content plan** (TikTok), **Money history**, income, emergency, trip dates

### Budget

Shows trip money (wallet + spent), money received (e.g. parents), spent so far, and **left in wallet** with a progress bar.

### Content plan

TikTok / video ideas: **Idea → Filmed → Posted**.

### Money history

All in/out movements with filters: All · Received · Spent.

### Reminders

Local times: **07:00 · 13:00 · 18:00 · 20:00** (when the app can notify).

### Privacy

All data stays on your device (`localStorage`). No account, no server.

## License

Personal use for your trip. Built as Sabai.
