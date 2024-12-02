// App.js
import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import RegistrationForm from './components/RegistrationForm';
import ConfirmationPage from './components/ConfirmationPage';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSubmitted: false,
      submittedData: null,
      currentPage: 'home'
    };
  }

  handleFormSubmit = (formData) => {
    this.setState({
      submittedData: formData,
      isSubmitted: true
    });
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  render() {
    return (
      <div className="App">
        <Header onPageChange={this.handlePageChange} />
        <main>
          {this.state.currentPage === 'home' && (
            !this.state.isSubmitted ? (
              <RegistrationForm onSubmit={this.handleFormSubmit} />
            ) : (
              <ConfirmationPage formData={this.state.submittedData} />
            )
          )}
          {this.state.currentPage === 'about' && <AboutUs />}
          {this.state.currentPage === 'contact' && <Contact />}
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;