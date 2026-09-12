import { useState } from 'react';
import { NavLink, useNavigate } from "react-router-dom";

export default function Header() {
  const [query, setQuery] = useState('');

  const navigate = useNavigate()
  function handleSearchKeyDown(e) {
    if (e.key === 'Enter' && e.target.value.trim()) {
      navigate('/search?q=' + encodeURIComponent(e.target.value.trim()))
      e.target.value = '';
    }
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
          <NavLink to="/contacts" className="nav-item">Контакты</NavLink>

        </nav>

        <div className="header-search">
          <input type="text" placeholder="Найти фильм" onKeyDown={handleSearchKeyDown} />
        </div>
      </div>
    </header>
  );
}