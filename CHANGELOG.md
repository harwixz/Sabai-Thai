# Changelog — Sabai Thailand Trip Companion

## v1.4.5 — 2026-09-29

### Added
- **Dual-currency wallet**: Cash and Bank/card show **฿ THB and € EUR**
- Edit wallet with **EUR / THB toggle** (uses rate from settings, default 38.5 ฿/€)
- Budget card shows Baht + Euro for trip pool, received, spent, and left

### Changed
- Offline cache **v15** (`sw-v15.js`)
- Loader expects **73** base64 chunks (`b_0` … `b_72`)

---

## v1.4.4 — 2026-09-29

### Added
- **Reset all data** (More → Reset app) with confirmation; restarts setup
- **Device sync via JSON**:
  - Download JSON backup
  - Copy JSON to clipboard
  - Share backup (native share on phone)
  - Import JSON file
  - Paste JSON
- Clearer “Sync between devices” section on More screen

---

## v1.4.3 — 2026-09-29

### Fixed
- Service Worker **syntax error** that blocked offline / PWA
- New SW file names (`sw-v13` → later versions) to bypass CDN cache
- Works on **Samsung S25 (Chrome)** and **macOS Monterey 12.7 (Safari 15)**

---

## v1.4.2 — 2026-09-29

### Fixed
- **Safari 15 / Monterey**: no `DecompressionStream` — plain base64 + `atob` loader
- XHR chunk loading for older browsers

---

## v1.4.1 — 2026-09-28

### Fixed
- Mobile bottom nav fits phone screens (safe-area, flex tabs)
- FAB / toast above the bar; no horizontal overflow

---

## v1.4.0 — 2026-09-28

### Added
- Clearer budget on Home
- Content plan (TikTok / video)
- Combined income + spending history

---

## v1.3.0 — 2026-09-28

### Fixed
- Recap totals in **BAHT and EURO**
- Navbar 5 tabs; wallet auto-update on spend
- Editable setup / trip dates; photo date picker

### Added
- Emergency card · Expense → wallet link · Budget remaining
- Export summary · Scheduled reminders (7am / 1pm / 6pm / 8pm)

---

## Earlier (v1.0 – v1.2)

- Offline PWA, phrasebook, photos of the day, checklist
- Trip setup, clocks, currency converter
- ADHD-friendly ambient dark UI, theme toggle
