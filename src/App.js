import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import React, { useState } from 'react';
import MainPage from './components/MainPage/MainPage';


function App() {
  const [startPage, setStartPage] = useState('start');


  if (startPage === 'start') {
    return (
      <div className="App">
        <Header />
        <MainPage />
        <Footer />
      </div>
    );
  }
}
export default App;
