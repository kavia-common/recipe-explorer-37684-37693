import React from 'react';

// PUBLIC_INTERFACE
export default function RecipeCard({ recipe, onClick }) {
  /** Displays a recipe summary card. */
  return (
    <article className="card" role="button" tabIndex={0}
      onClick={() => onClick?.(recipe)}
      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onClick?.(recipe)}
      aria-label={`Open ${recipe.title}`}>
      <img className="card-img" src={recipe.image} alt={recipe.title} />
      <div className="card-body">
        <h3 className="card-title">{recipe.title}</h3>
        <p className="card-desc">{recipe.description}</p>
        <div className="card-meta">
          <span className="tag">{recipe.tag || 'Recipe'}</span>
          <span aria-label="Time" title="Preparation time">⏱ {recipe.time} min</span>
        </div>
      </div>
    </article>
  );
}
