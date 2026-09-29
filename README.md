# Sabai — Thailand Trip Companion

Offline-first PWA for a Thailand trip: clocks, currency, phrasebook, wallet (THB + EUR), expenses, photos, checklist, content plan.

**Live:** https://harwixz.github.io/Sabai-Thai/

## Devices
- Phone (e.g. Samsung S25 / Chrome) — Add to Home Screen
- Mac (incl. **macOS Monterey 12.7 / Safari 15**)
- Works offline after first successful load

## Features
- Setup (trip dates, starting money)
- Wallet: cash + bank/card in **Baht & Euro**
- Expenses, income (e.g. parents), budget remaining
- Phrasebook with favorites
- Photo of the day + streak
- Daily checklist & content plan (TikTok)
- Emergency card
- **JSON backup / restore** between devices
- **Reset app** (wipe local data)
- Dark / light theme

## Sync (phone ↔ Mac)
1. More → **Download JSON** or **Share backup**
2. On the other device: **Import JSON** or **Paste JSON**

## Changelog
See [CHANGELOG.md](CHANGELOG.md)

## Tech
- Single-page app, `localStorage`
- Base64 chunk loader (Safari 15 compatible)
- Service worker cache v15
