// ConfirmationPage.js
// Komponente zur Anzeige der Bestätigungsseite nach erfolgreicher Registrierung

import React from 'react';

function ConfirmationPage({ formData }) {
  // Mapping für Krisengebietsnamen
  const crisisRegionNames = {
    ukraine: 'Ukraine',
    syria: 'Syrien',
    yemen: 'Jemen',
    ethiopia: 'Äthiopien',
    afghanistan: 'Afghanistan'
  };

  return (
    <div className="confirmation-page">
      {/* Bestätigungsnachricht */}
      <h2>Vielen Dank für Ihre Kleiderspende!</h2>
      <p>Ihre Spende wurde erfolgreich registriert.</p>
      
      {/* Details der Spende */}
      <h3>Details Ihrer Spende:</h3>
      <ul>
        {/* Art der Übergabe */}
        <li>Art der Übergabe: {formData.donationType === 'pickup' ? 'Abholung' : 'Übergabe an der Geschäftsstelle'}</li>
        
        {/* Art der Kleidung */}
        <li>Art der Kleidung: {formData.clothingType}</li>
        
        {/* Gewähltes Krisengebiet */}
        <li>Gewähltes Krisengebiet: {crisisRegionNames[formData.crisisRegion] || formData.crisisRegion}</li>
        
        {/* Bedingte Anzeige der Abholinformationen */}
        {formData.donationType === 'pickup' && (
          <>
            <li>Abholadresse: {formData.pickupAddress}</li>
            <li>Postleitzahl: {formData.postcode}</li>
          </>
        )}
      </ul>
      
      {/* Zeitstempel der Registrierung */}
      <p>Datum und Uhrzeit der Registrierung: {new Date().toLocaleString()}</p>
    </div>
  );
}

export default ConfirmationPage;