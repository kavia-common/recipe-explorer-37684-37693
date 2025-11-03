import React from 'react';

// PUBLIC_INTERFACE
export default function SearchBar({ value, onChange }) {
  /** Search input to filter recipes by title/ingredient. */
  return (
    <label className="searchbar" aria-label="Search recipes">
      <span className="icon" aria-hidden="true">🔎</span>
      <input
        type="search"
        placeholder="Search recipes by name or ingredient…"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </label>
  );
}
