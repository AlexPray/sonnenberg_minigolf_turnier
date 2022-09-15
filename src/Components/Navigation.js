import React from 'react';
import './Navigation.css';

const Navigation = () => {
  return (
    <div className="nav-container">
      <header className='nav container'>
        <img className='nav-logo' src="./src/img/logo.svg" alt="logo" />
        <p className='nav-title'>Sonnenberg Minigolf Turnier</p>
        <img className='burger-menu' src="./src/img/burger_menu.svg" alt="burger_menu" />
        <div className='nav-links'>
          <a href="o">Regelment/Preise</a>
          <a href="o">Teamwertung</a>
          <a href="o">Spielerwertung</a>
          <a href="o">Admin</a>
        </div>
      </header>
    </div>
  );
};
export default Navigation;
