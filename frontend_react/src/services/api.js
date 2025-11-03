const readEnv = (key) => {
  try { return process.env[key]; } catch { return undefined; }
};

const apiBaseRaw =
  readEnv('REACT_APP_API_BASE')?.trim() ||
  readEnv('REACT_APP_BACKEND_URL')?.trim() ||
  '';

const apiBase = apiBaseRaw || '';

const isConfigured = !!apiBase;

// PUBLIC_INTERFACE
export function getApiBase() {
  /** Returns the configured API base URL or empty string if not configured. */
  return apiBase;
}

// PUBLIC_INTERFACE
export async function fetchRecipes(query = '') {
  /**
   * Fetches recipe list from API if configured; otherwise throws to allow mock fallback.
   */
  if (!isConfigured) {
    throw new Error('API base not configured');
  }
  const url = new URL('/recipes', apiBase);
  if (query) url.searchParams.set('q', query);
  const res = await fetch(url.toString());
  if (!res.ok) throw new Error(`Failed to fetch recipes: ${res.status}`);
  return res.json();
}

// PUBLIC_INTERFACE
export async function fetchRecipeById(id) {
  /** Fetches recipe detail by id from API if configured; throws when not configured. */
  if (!isConfigured) {
    throw new Error('API base not configured');
  }
  const url = new URL(`/recipes/${id}`, apiBase);
  const res = await fetch(url.toString());
  if (!res.ok) throw new Error(`Failed to fetch recipe: ${res.status}`);
  return res.json();
}
