import { useState } from 'react';
import { NavLink, useNavigate } from "react-router-dom";

export default function Header() {
  const [query, setQuery] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <header className="header">
      <div className="header-inner">
        <a href="/" className="logo">
          <span className="logo-icon">▶</span>
          <span>MovieBox</span>
        </a>

        <nav className="nav">
          <NavLink to="/" className="nav-item">Главная</NavLink>
          <NavLink to="/movies" className="nav-item">Фильмы</NavLink>
          <NavLink to="/about" className="nav-item">О проекте</NavLink>

        </nav>

        <form className="search" onSubmit={handleSubmit}>
          <span className="search-icon">⌕</span>
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Поиск фильмов"
          />
        </form>
      </div>
    </header>
  );
}