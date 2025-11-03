import { useEffect, useMemo, useState } from 'react';
import { fetchRecipes, fetchRecipeById, getApiBase } from '../services/api';
import { mockFetchRecipes, mockFetchRecipeById } from '../services/mockData';

// PUBLIC_INTERFACE
export function useRecipes() {
  /**
   * Provides recipe list and search behavior with loading and error states.
   * Falls back to mock provider when API is not configured.
   */
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const apiConfigured = useMemo(() => !!getApiBase(), []);

  useEffect(() => {
    let cancelled = false;
    async function load() {
      setLoading(true);
      setError('');
      try {
        const data = apiConfigured
          ? await fetchRecipes(query)
          : await mockFetchRecipes(query);
        if (!cancelled) setRecipes(Array.isArray(data) ? data : []);
      } catch (e) {
        if (!cancelled) setError(e?.message || 'Failed to load recipes');
      } finally {
        if (!cancelled) setLoading(false);
      }
    }
    load();
    return () => { cancelled = true; };
  }, [query, apiConfigured]);

  return { recipes, query, setQuery, loading, error, apiConfigured };
}

// PUBLIC_INTERFACE
export async function getRecipeDetail(id) {
  /** Fetches recipe detail via API or mock depending on configuration. */
  try {
    if (getApiBase()) {
      return await fetchRecipeById(id);
    }
  } catch (e) {
    // fall through to mock if API fails
  }
  return await mockFetchRecipeById(id);
}
