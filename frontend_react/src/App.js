import React, { useEffect, useMemo, useState } from 'react';
import './App.css';
import './styles/theme.css';
import './styles/global.css';

import Header from './components/Header';
import RecipeGrid from './components/RecipeGrid';
import RecipeDetail from './components/RecipeDetail';
import { useRecipes } from './hooks/useRecipes';
import { getApiBase } from './services/api';
import { getRecipeDetail } from './hooks/useRecipes';

// PUBLIC_INTERFACE
function App() {
  /**
   * Root of Recipe Explorer: displays header, grid, and a modal for details.
   * Uses Ocean Professional theme and gracefully falls back to mock data.
   */
  const { recipes, loading, error, query, setQuery, apiConfigured } = useRecipes();
  const [selected, setSelected] = useState(null);
  const [opening, setOpening] = useState(false);

  const apiBase = useMemo(() => getApiBase(), []);

  useEffect(() => {
    document.title = 'Recipe Explorer';
  }, []);

  async function openRecipe(r) {
    try {
      setOpening(true);
      const detail = await getRecipeDetail(r.id);
      setSelected(detail || r);
    } finally {
      setOpening(false);
    }
  }

  function closeModal() { setSelected(null); }

  return (
    <div className="ocean-surface">
      <Header query={query} onQueryChange={setQuery} />
      <main className="container" style={{ padding: '20px 0 40px' }}>
        {!apiConfigured && (
          <div className="empty" style={{ paddingTop: 10 }}>
            Using mock data. Set REACT_APP_API_BASE or REACT_APP_BACKEND_URL to connect to a backend. {/* TODO: wire real API when available */}
          </div>
        )}
        {loading && <div className="empty">Loading recipes…</div>}
        {!loading && error && <div className="empty" role="alert">Error: {error}</div>}
        {!loading && !error && <RecipeGrid recipes={recipes} onSelect={openRecipe} />}
      </main>

      {(selected || opening) && (
        <div className="modal-backdrop" onClick={closeModal} aria-label="Backdrop">
          <div onClick={(e) => e.stopPropagation()}>
            {opening ? (
              <div className="modal" role="dialog" aria-modal="true">
                <div className="modal-header">
                  <h2 style={{ margin: 0 }}>Loading…</h2>
                </div>
                <div className="modal-content">
                  <p>Please wait while we load the recipe.</p>
                </div>
              </div>
            ) : (
              <RecipeDetail recipe={selected} onClose={closeModal} />
            )}
          </div>
        </div>
      )}

      <footer className="container" style={{ padding: '24px 0 40px', color: 'rgba(17,24,39,0.55)', fontSize: 13 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span>© {new Date().getFullYear()} Recipe Explorer</span>
          {apiBase ? <span>API: {apiBase}</span> : <span>API: not configured</span>}
        </div>
      </footer>
    </div>
  );
}

export default App;
