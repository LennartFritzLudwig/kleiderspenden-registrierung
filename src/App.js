// App.js
// Hauptkomponente der Anwendung

import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import RegistrationForm from './components/RegistrationForm';
import ConfirmationPage from './components/ConfirmationPage';

class App extends React.Component {
  constructor(props) {
    super(props);
    // Initialer Zustand der Anwendung
    this.state = {
      isSubmitted: false, // Gibt an, ob das Formular abgeschickt wurde
      submittedData: null // Speichert die übermittelten Formulardaten
    };
  }

  // Methode zum Verarbeiten der Formularübermittlung
  handleFormSubmit = (formData) => {
    this.setState({
      submittedData: formData,
      isSubmitted: true
    });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <main>
          {/* Zeigt entweder das Registrierungsformular oder die Bestätigungsseite an */}
          {!this.state.isSubmitted ? (
            <RegistrationForm onSubmit={this.handleFormSubmit} />
          ) : (
            <ConfirmationPage formData={this.state.submittedData} />
          )}
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;