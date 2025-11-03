import React, { useEffect } from 'react';

// PUBLIC_INTERFACE
export default function RecipeDetail({ recipe, onClose }) {
  /** Shows ingredients and instructions of a recipe. */
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose?.(); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [onClose]);

  if (!recipe) return null;

  return (
    <div className="modal" role="dialog" aria-modal="true" aria-label={`${recipe.title} details`}>
      <div className="modal-header">
        <h2 style={{ margin: 0 }}>{recipe.title}</h2>
        <button className="close-btn" onClick={onClose} aria-label="Close">✕</button>
      </div>
      <div className="modal-content">
        <img src={recipe.image} alt={recipe.title} style={{ width: '100%', borderRadius: 12, maxHeight: 280, objectFit: 'cover' }} />
        <div style={{ height: 12 }} />
        <p style={{ color: 'rgba(17,24,39,0.75)' }}>{recipe.description}</p>
        <div style={{ display: 'flex', gap: 10, alignItems: 'center', margin: '8px 0 16px' }}>
          <span className="tag">{recipe.tag || 'Recipe'}</span>
          <span>⏱ {recipe.time} min</span>
        </div>
        <div style={{ display: 'grid', gap: 18 }}>
          <section>
            <h3>Ingredients</h3>
            <ul>
              {(recipe.ingredients || []).map((i, idx) => <li key={idx}>{i}</li>)}
            </ul>
          </section>
          <section>
            <h3>Instructions</h3>
            <ol>
              {(recipe.instructions || []).map((s, idx) => <li key={idx}>{s}</li>)}
            </ol>
          </section>
        </div>
      </div>
    </div>
  );
}
