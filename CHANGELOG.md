# Sabai — Changelog

## v1.2.0 — 2026-09-28

### Fixed
- **Photo upload from gallery** — you can now pick existing photos from your phone library, not only take new ones. Separate **Gallery** and **Camera** buttons on the Photos tab.

### Added
- **First-open setup** — trip start/end dates and starting cash + bank balances.
- **Wallet** — track cash on hand and bank/card balance on the Home screen; edit anytime.
- **Dark / light theme** — toggle in the top bar (☾ / ☀). Preference is saved.
- **Daily checklist** — photo, spending, phrase practice, water — calm one-tap checks.
- **Expense quick-add** — one-tap chips for common amounts (street food, Grab, 7-Eleven…).
- **Places (map notes)** — save hotels, cafés, viewpoints offline; optional GPS coordinates.
- **Trip countdown** — days left / day number based on your setup dates.
- **Photo of the day hero** — when today’s photo exists, it appears on Home with streak badge.
- **Photo streak** — consecutive days with at least one photo.
- **Caption editor** — tap any photo to add or edit a caption.
- **Stronger image compression** — photos resized (~1280px, JPEG ~72%) to save phone storage.
- **Sticky ★ Liked chip** — jump to favourites while scrolling the phrasebook.
- **Richer empty states** — clearer guidance when a section is empty.

### Design
- Softer ambient gradients (dark + light).
- Calm micro-animations only (no sound / no harsh effects).
- ADHD-friendlier layout: clear sections, larger targets, less visual noise, consistent rhythm.

### Offline
- Service worker cache bumped to **v5** — re-open the site once online after updating so the new shell is cached.

---

## v1.1.0 — 2026-09-28

- Photo-of-the-day reminders (in-app + optional notifications).
- Link to [Tanos Way Home](https://tanoswayhome.wordpress.com) on Home.
- Liked phrases sorted to the top + **★ Liked** category.
- Expanded phrasebook (~445 entries) with Temple, Nightlife, Beach categories.
- GitHub Pages–ready `index.html` + fixed manifest / service worker paths.

## v1.0.0

- Initial offline trip companion: clocks, currency, phrases, expenses, calendar, photos, recap.
