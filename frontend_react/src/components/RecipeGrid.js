import React from 'react';
import RecipeCard from './RecipeCard';

// PUBLIC_INTERFACE
export default function RecipeGrid({ recipes, onSelect }) {
  /** Grid of recipe cards with empty state. */
  if (!recipes?.length) {
    return <div className="empty">No recipes found. Try a different search.</div>;
  }
  return (
    <div className="grid" role="list">
      {recipes.map((r) => (
        <div key={r.id} className="col-12-sm col-6-md col-4-lg" role="listitem">
          <RecipeCard recipe={r} onClick={onSelect} />
        </div>
      ))}
    </div>
  );
}
