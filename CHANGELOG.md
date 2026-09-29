# Changelog

## v1.4.2 — 2026-09-29

### Fixed
- **macOS Monterey / Safari 15**: App loads without `DecompressionStream` (Safari 16+ only)
- Plain JS chunk loader (XHR) works on older Mac browsers
- Offline cache v11

# Changelog

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
- **Recap totals** show both **BAHT and EURO**
- **Navbar** reduced to 5 tabs (Home · Talk · Spend · Pics · More)
- **Wallet auto-updates** when you log spending (cash or bank)
- **Setup is editable** — Edit trip dates + Re-run setup
- **Photo date** — choose any date when adding photos

### Added
- **Emergency card** · Tourist Police 1155
- **Expense → wallet link** — Paid from cash / bank / neither
- **Budget remaining** on Home and Recap
- **Money received** (parents / funding)
- **Export readable summary** (`.txt`)
- **Content reminders** for TikTok / video
- **Scheduled local reminders** at **7:00, 13:00, 18:00, 20:00**
- **More** hub for secondary screens

### Design
- ADHD-friendly spacing, soft motion only (no sound)
- Light / dark theme, focus states, calmer gold accents

### Docs
- `README.md` · this changelog
