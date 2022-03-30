import React from 'react';
import './App.css';
import Header from './Header/Header';
import Footer from './Footer/Footer'
import Dashboard from './Dashboard/Dashboard'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Dashboard/>
      <Footer/>
    </div>
  );
}

export default App;
