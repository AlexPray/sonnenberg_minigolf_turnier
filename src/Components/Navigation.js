import React from 'react';
import { useState } from 'react';
import './Navigation.css';

const Navigation = () => {

  const [isHovering, setIsHovering] = useState(false);

  const handleClick = () => {
     if (isHovering === true) {
      setIsHovering(false);
     } else {
      setIsHovering(true);
     }
     console.log(isHovering);
  };


  return (
    <div className="nav-container">
      <header className='nav container'>
        <img className='nav-logo' src="./src/img/logo.svg" alt="logo" />
        <p className='nav-title'>Sonnenberg Minigolf Turnier</p>
        <img className='burger-menu' src="./src/img/burger_menu.svg" alt="burger_menu" onClick={handleClick} />
        { isHovering && (
        <div className='nav-links'>
          <a href="/regeln-preise">Regelment/Preise</a>
          <a href="/teamwertung">Teamwertung</a>
          <a href="/spielerwertung">Spielerwertung</a>
          <a href="/admin">Admin</a>
        </div>
        ) }
      </header>
    </div>
  );
};
export default Navigation;
