// index.js
// Haupteinstiegspunkt der React-Anwendung

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// Rendert die App-Komponente in das root-Element der HTML-Datei
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);