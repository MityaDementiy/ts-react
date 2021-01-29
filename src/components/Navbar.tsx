import React from 'react';
import '../App.css';

export const Navbar: React.FC = () => {
  return (
    <nav>
    <div className="nav-wrapper pd-10">
      <a href="/" className="brand-logo">React + TS</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><a href="/">Список дел</a></li>
        <li><a href="/">Информация</a></li>
      </ul>
    </div>
  </nav>
  );
};