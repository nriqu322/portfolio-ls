import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import Portfolio from './components/Portfolio';
import About from './components/About';
import ContactForm from './components/Contact';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => (
  <Router>
    <Header />
    <Main exact path="/" />
    <Portfolio path="/portfolio" />
    <About path="/about" />
    <ContactForm path="/contact" />
    <Footer />
  </Router>
);

export default App;
