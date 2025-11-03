# Recipe Explorer - Frontend (React)

A modern, responsive UI to browse, search, and view recipe details. Built with Create React App and a lightweight Ocean Professional theme.

## Features
- Ocean Professional theme with blue and amber accents
- Header with search, recipe grid, and detail modal
- Search by title or ingredient
- Graceful loading/error/empty states
- API integration via environment variable with automatic mock fallback

## Getting Started
- Install: `npm install`
- Run: `npm start`
- Build: `npm run build`
- Test: `npm test`

## Environment Variables
The app reads the API base from the following vars (in precedence order):
1. `REACT_APP_API_BASE`
2. `REACT_APP_BACKEND_URL`

If neither is set, the app uses an internal mock data provider with sample recipes.

Optional vars (pre-existing in container):
- `REACT_APP_FRONTEND_URL`, `REACT_APP_WS_URL`, `REACT_APP_NODE_ENV`, etc. are not required by this app directly.

Create a `.env` file based on `.env.example`.

## Project Structure
- `src/services/api.js` — API client using env-based base URL
- `src/services/mockData.js` — Mock provider used when API is not configured
- `src/hooks/useRecipes.js` — State management for listing/search/detail
- `src/components/*` — Header, SearchBar, RecipeGrid, RecipeCard, RecipeDetail
- `src/styles/theme.css`, `src/styles/global.css` — Theme and global styles
- `src/App.js` — App shell orchestrating components and modal

## Styling
- Minimal CSS with variables
- Subtle shadows, rounded corners, smooth transitions
- Responsive grid (1/2/3 columns)

## Future integration
- TODO: Replace mock provider with live API once the backend is available. Keep the same data access methods (fetchRecipes, fetchRecipeById) for a seamless swap.

## Accessibility
- Keyboard accessible cards and modal (Enter/Space to open, Esc to close)
- Semantic roles and aria labels for assistive tech
