import React from 'react';
import SearchBar from './SearchBar';

// PUBLIC_INTERFACE
export default function Header({ query, onQueryChange }) {
  /** App header with brand and search input. */
  return (
    <header className="header">
      <div className="container header-inner">
        <div className="brand" aria-label="Recipe Explorer">
          <div className="brand-logo" aria-hidden="true" />
          <div className="brand-title">Recipe Explorer</div>
        </div>
        <div style={{ flex: 1 }}>
          <SearchBar value={query} onChange={onQueryChange} />
        </div>
      </div>
    </header>
  );
}
