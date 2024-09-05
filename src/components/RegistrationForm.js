// RegistrationForm.js
// Komponente für das Kleiderregistrierungsformular

import React from 'react';

// Angenommene Postleitzahl der Geschäftsstelle (sollte in der Praxis konfigurierbar sein)
const OFFICE_POSTCODE = '12345';

class RegistrationForm extends React.Component {
  constructor(props) {
    super(props);
    // Initialer Zustand des Formulars
    this.state = {
      formData: {
        donationType: '',
        clothingType: '',
        crisisRegion: '',
        pickupAddress: '',
        postcode: ''
      },
      formErrors: {} // Speichert Validierungsfehler
    };
  }

  // Behandelt Änderungen in Formularfeldern
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      formData: {
        ...prevState.formData,
        [name]: value
      }
    }));
  };

  // Behandelt die Formularübermittlung
  handleSubmit = (e) => {
    e.preventDefault();
    let errors = {};

    // Validierung der Postleitzahl bei Abholung
    if (this.state.formData.donationType === 'pickup') {
      if (!/^\d{5}$/.test(this.state.formData.postcode)) {
        errors.postcode = 'Bitte geben Sie eine gültige 5-stellige Postleitzahl ein.';
      } else if (this.state.formData.postcode.substr(0, 2) !== OFFICE_POSTCODE.substr(0, 2)) {
        errors.postcode = 'Abholung nur im Umkreis der Geschäftsstelle möglich.';
      }
    }

    // Wenn keine Fehler, Formular absenden, sonst Fehler anzeigen
    if (Object.keys(errors).length === 0) {
      this.props.onSubmit(this.state.formData);
    } else {
      this.setState({ formErrors: errors });
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {/* Übergabeart Auswahl */}
        <div>
          <label htmlFor="donationType">Art der Übergabe:</label>
          <select
            id="donationType"
            name="donationType"
            value={this.state.formData.donationType}
            onChange={this.handleChange}
            required
          >
            <option value="">Bitte wählen</option>
            <option value="pickup">Abholung</option>
            <option value="dropoff">Übergabe an der Geschäftsstelle</option>
          </select>
        </div>

        {/* Kleiderart Eingabe */}
        <div>
          <label htmlFor="clothingType">Art der Kleidung:</label>
          <input
            type="text"
            id="clothingType"
            name="clothingType"
            value={this.state.formData.clothingType}
            onChange={this.handleChange}
            required
          />
        </div>

        {/* Krisengebiet Auswahl */}
        <div>
          <label htmlFor="crisisRegion">Krisengebiet:</label>
          <select
            id="crisisRegion"
            name="crisisRegion"
            value={this.state.formData.crisisRegion}
            onChange={this.handleChange}
            required
          >
            <option value="">Bitte wählen</option>
            <option value="ukraine">Ukraine</option>
            <option value="syria">Syrien</option>
            <option value="yemen">Jemen</option>
            <option value="ethiopia">Äthiopien</option>
            <option value="afghanistan">Afghanistan</option>
          </select>
        </div>

        {/* Zusätzliche Felder für Abholung */}
        {this.state.formData.donationType === 'pickup' && (
          <>
            <div>
              <label htmlFor="pickupAddress">Abholadresse:</label>
              <input
                type="text"
                id="pickupAddress"
                name="pickupAddress"
                value={this.state.formData.pickupAddress}
                onChange={this.handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="postcode">Postleitzahl:</label>
              <input
                type="text"
                id="postcode"
                name="postcode"
                value={this.state.formData.postcode}
                onChange={this.handleChange}
                required
              />
              {this.state.formErrors.postcode && <p className="error">{this.state.formErrors.postcode}</p>}
            </div>
          </>
        )}

        <button type="submit">Spende registrieren</button>
      </form>
    );
  }
}

export default RegistrationForm;