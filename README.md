# smart-move

Lightweight React + TypeScript app scaffolded with Vite. This project provides a small component-driven UI and utilities for a mobility/transportation app (map preview, quick actions, trip planning, wallet, etc.).

The README below explains how to set up, develop, and build the project locally.

## Quick links

- Repository root: this project
- Scripts: `dev`, `build`, `preview`, `lint` (see `package.json`)

## Tech stack

- React 19 + TypeScript
- Vite (build & dev server)
- TailwindCSS (utility-first styling)
- Radix UI primitives
- React Router v7
- TanStack Query
- Sonner (toasts)

## Requirements

- Node.js (recommend latest LTS >= 18)
- pnpm (recommended) or npm/yarn

## Install

Recommended: pnpm

```powershell
pnpm install
```

Or with npm:

```powershell
npm install
```

## Development

Start the dev server with HMR:

```powershell
pnpm dev
# or
npm run dev
```

Open the URL printed by Vite (usually http://localhost:5173).

## Build & Preview

Build the production bundle (this repo runs `tsc -b` before building):

```powershell
pnpm build
# or
npm run build
```

Preview the production build locally:

```powershell
pnpm preview
# or
npm run preview
```

## Linting

Run ESLint across the project files:

```powershell
pnpm lint
# or
npm run lint
```

## Project structure

Top-level important files/folders:

- `src/` — application source
  - `main.tsx` — app entry
  - `App.tsx` — root component and routes
  - `components/` — reusable UI and page components
    - `Home/` — home page components: `MapPreview.tsx`, `QuickActions.tsx`, `SearchBar.tsx`, `WeatherCard.tsx`
    - `Layout/` — layout components: `BottomNav.tsx`, `MobileLayout.tsx`
    - `ui/` — design system primitives: `button.tsx`, `card.tsx`, `input.tsx`, etc.
  - `hooks/` — custom hooks: `use-mobile.tsx`, `use-toast.ts`
  - `lib/` — small utilities: `utils.ts`
  - `views/` — pages/screens: `Delivery.tsx`, `History.tsx`, `Index.tsx`, `NotFound.tsx`, `Notifications.tsx`, `PlanTrip.tsx`, `Profile.tsx`, `Settings.tsx`, `TripDetails.tsx`, `Wallet.tsx`

Other config files:

- `vite.config.ts` — Vite configuration
- `tsconfig.json` / `tsconfig.app.json` — TypeScript config
- `eslint.config.js` — ESLint config
- `package.json` — scripts & dependencies

## Scripts (from package.json)

- `dev` — start Vite dev server
- `build` — run `tsc -b` then `vite build`
- `preview` — preview production build
- `lint` — run ESLint

Example (pnpm):

```powershell
pnpm dev
pnpm build
pnpm preview
pnpm lint
```

## Development notes & tips

- Type checking: build runs `tsc -b` which enforces project references and type-checking before bundling. If you only want to run Vite dev server without type checks, use `pnpm dev` (Vite doesn't run `tsc` by default).
- Tailwind: Tailwind classes are used across UI primitives — make sure your editor/IDE has Tailwind IntelliSense for the best DX.
- Environment variables: Use `.env` files supported by Vite (e.g. `.env`, `.env.local`, `.env.production`). Prefix keys with `VITE_` to expose them to client code.
- Routing: App uses React Router; look in `App.tsx` for route definitions and the `views/` folder for page components.

## Common troubleshooting

- Dev server not starting: ensure Node >=18 and that dependencies are installed. Try `pnpm install --shamefully-hoist` if peer dependency errors occur with pnpm.
- Type errors during build: run `pnpm build` locally and inspect the tsc output; fix types in the reported files.
- ESLint issues: run `pnpm lint -- --fix` to auto-fix simple problems.

## Contributing

1. Fork the repo
2. Create a feature branch
3. Run the dev server and add tests if applicable
4. Open a pull request with a clear description of changes

