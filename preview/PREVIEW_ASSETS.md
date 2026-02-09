# HTML Preview – Asset Alignment with App

The preview uses the same assets as the main Expo app for 1:1 parity.

## 1:1 with the app

The preview is aligned with the native app so that sharing the GitHub Pages link gives a **native feel**:

- **design-tokens.css** — Same design system as `lib/constants/colors.ts` and `lib/constants/theme.ts`: colors, spacing, radius, typography (Inter weights, display/h1/h3/caption presets), shadows. Use `var(--cc-*)` in page styles for consistency.
- **shared-native.css** — Touch-friendly (44px min tap targets), no tap highlight, no callout on long-press, smooth scroll, `100dvh` for the phone frame, 16px input font to avoid iOS zoom on focus.
- Every preview page loads `shared-native.css` then `design-tokens.css`; key screens (e.g. dashboard) use the tokens so typography and spacing match the app.

## GitHub Pages deploy

The workflow (`.github/workflows/deploy-preview.yml`) builds `_site` with:

- `_site/index.html` → redirects to `preview/index.html`
- `_site/preview/*` → all preview HTML, CSS (`shared-native.css`, `design-tokens.css`), JS, `sw.js`, `manifest.json`
- `_site/assets/*` → app assets (favicon, logo, icons, onboarding images)

All preview pages use relative paths: `../assets/` for images, `shared-native.css`, `design-tokens.css`, and `sw.js` in the same folder. PWA and offline work from any entry page.

## Shared assets (from `/assets/`)

| Asset | App usage | Preview usage |
|-------|-----------|---------------|
| `logo.png` | Logo component (auth screens) | Login, Register, Index hub |
| `favicon.png` | Web favicon (`app.json`) | All HTML pages `<link rel="icon">` |
| `icon.png` | App icon (`app.json`) | PWA manifest icons |
| `adaptive-icon.png` | Android adaptive icon | PWA maskable icon |
| `images/onboarding/onboarding-1.jpeg` … `onboarding-4.jpeg` | OnboardingScreen slides | `onboarding.html` slides |

## Icon mapping (`lib/utils/iconMapping.ts` → preview)

| Key | App component | Preview |
|-----|---------------|---------|
| `home` | Dashboard tab | Grid (4 squares) |
| `business` | Properties tab | Building |
| `cube` | Commodities tab | Box/cube |
| `wallet` | Wallet tab | Card/wallet |
| `help-circle` | Support (header) | Circle with ? |
| `filter` | Properties/Commodities header | Funnel |
| `settings` | Settings, Dashboard header | Gear |
| `location` | Property cards, detail | Pin |
| `trending-up` | Invest buttons | Chart up |
| `information-circle` | Details buttons | Circle with i |
| `chevron-forward` | Navigation | Right arrow |
| `arrow-back` | Back buttons | Left arrow |

SVG reference: `preview/icons-ref.js` (matches app semantics).

## Property / commodity images

- **App**: Loaded from API (`property.image`, `commodity.image`).
- **Preview**: Uses Unsplash placeholders for demo. Same layout and structure as app cards.
