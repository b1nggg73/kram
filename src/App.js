import React from 'react';
import AppRoutes from './components/AppRoutes';
import Header from './components/Header/Header';
import './App.css';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <AppRoutes />
      <Footer />
    </div>
  );
};

export default App;
