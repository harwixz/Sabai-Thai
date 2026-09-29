# Changelog

## v1.4.2 — 2026-09-29

### Fixed
- **macOS Monterey / Safari 15**: App loads without `DecompressionStream` (Safari 16+ only)
- Plain JS chunk loader (XHR) works on older Mac browsers
- Offline cache v11

## v1.4.1 — 2026-09-28

### Fixed
- **Mobile bottom nav** fits phone screens (narrow widths, home-indicator / safe-area)
- Removed double safe-area padding that pushed the bar too high
- Nav tabs share width flexibly (no fixed min-width overflow)
- Tighter padding on small screens (≤380px)
- FAB and toast sit correctly above the bar
- No horizontal overflow (`max-width: 100vw`)

## v1.4.0 — 2026-09-28

### Added
- **Clearer budget** on Home: trip money pool, received, spent, left in wallet + % bar
- **Content plan** (TikTok / video): idea → filmed → posted
- **Money history**: combined income + spending with filters (All / Received / Spent)

## v1.3.0 — 2026-09-28

### Fixed
- Recap totals show both **BAHT and EURO**
- Navbar reduced to 5 tabs
- Wallet auto-updates when you log spending
- Setup is editable
- Photo date picker

### Added
- Emergency card · Expense → wallet link · Budget remaining · Export summary · Scheduled reminders
