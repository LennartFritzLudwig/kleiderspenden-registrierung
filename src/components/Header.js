// Header.js
// Komponente für den Kopfbereich der Webseite

import React from 'react';

function Header() {
  return (
    <header>
      {/* Logo-Platzhalter */}
      <div className="logo">KS</div>
      
      {/* Hauptüberschrift */}
      <h1>Kleiderspenden-Registrierung</h1>
      
      {/* Navigationsmenü */}
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">Über uns</a></li>
          <li><a href="/contact">Kontakt</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;