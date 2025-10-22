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
- Single top-level App component with local state for board and turn management
- Presentational Board and Square components driven by props
- Derived state calculates winner, winning line, and draw
- CSS variables and classes implement the Ocean Professional theme

## Tech
- React 18 + Vite 5
- TypeScript

## Scripts
- `npm run dev` — start the development server
- `npm run build` — create a production build
- `npm run preview` — preview the production build locally

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

## Theming
The Ocean Professional theme is applied via CSS variables in `src/styles.css`. Use `var(--primary)` for accents, `var(--secondary)` for win highlights, and keep text/background contrast strong.

## Notes
- No external APIs or environment variables are required.
- The first player is always X.

## Documentation
See `../kavia-docs/tic-tac-toe-docs.md` for the full Product Requirements, Architecture, Game Logic, Theming, and Future Enhancements.

## License
MIT
