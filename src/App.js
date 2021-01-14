import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => (
  <div>
    <Header />
    <Main />
    <Portfolio />
    <Footer />
  </div>
);

export default App;
