// Header.js
// Komponente für den Kopfbereich der Webseite

import React from 'react';

function Header({ onPageChange }) {
  return (
    <header>
      {/* Logo-Platzhalter */}
      <div className="logo">KS</div>
      
      {/* Hauptüberschrift */}
      <h1>Kleiderspenden-Registrierung</h1>
      
      {/* Navigationsmenü */}
      <nav>
        <ul>
          <li><a href="#" onClick={() => onPageChange('home')}>Home</a></li>
          <li><a href="#" onClick={() => onPageChange('about')}>Über uns</a></li>
          <li><a href="#" onClick={() => onPageChange('contact')}>Kontakt</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;