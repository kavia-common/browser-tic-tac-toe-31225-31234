# Tic Tac Toe Frontend (React + Vite)

A clean, modern Tic Tac Toe game implemented in React with the Ocean Professional theme.

## Overview
This application provides a simple, responsive Tic Tac Toe game for two local players. It focuses on clarity, accessibility, and smooth interactions.

## Features
- Interactive 3x3 board with click-based moves
- Current player indicator and accessible status updates
- Automatic winner and draw detection
- Prevents further moves after game ends
- Reset button to start a new game (X starts)
- Modern minimalist UI with blue and amber accents

## Architecture
- React 18 + Vite 5 + TypeScript
- App manages state; presentational Board and Square components in `src/components`
- Winner calculation extracted to `src/lib/calculateWinner.ts`
- CSS variables and classes implement the Ocean Professional theme

## Tech
- React 18 + Vite 5
- TypeScript
- ESLint + Prettier

## Scripts
- `npm run dev` — start the development server
- `npm run build` — create a production build (also runs `tsc -b`)
- `npm run preview` — preview the production build locally
- `npm run lint` — run ESLint
- `npm run lint:fix` — run ESLint with auto-fix
- `npm run format` — run Prettier to format
- `npm run typecheck` — run TypeScript in build mode

## Getting started
1. Install dependencies
   ```
   npm install
   ```
2. Start the dev server
   ```
   npm run dev
   ```
3. Open the URL printed in the console (defaults to http://localhost:5173).

## Accessibility
- Squares are buttons with `aria-pressed` and descriptive `aria-label`s.
- Status text uses `aria-live="polite"` to announce changes.
- Focus-visible styles are provided for keyboard users.

## Theming
The Ocean Professional theme is applied via CSS variables in `src/styles.css`. Use `var(--primary)` for accents, `var(--secondary)` for win highlights, and keep text/background contrast strong.

## Notes
- No external APIs or environment variables are required.
- The first player is always X.

## Documentation
See `../kavia-docs/tic-tac-toe-docs.md` for the full Product Requirements, Architecture, Game Logic, Theming, and Future Enhancements.

## License
MIT
