import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import LogIn from './components/Login/Login';
import React, { useState, useEffect } from 'react';

function App() {
  const [startPage, setStartPage] = useState('start')
  const [mainPage, setMainPage] = useState('login');
  //const [LoginPage, setLoginPage] = useState('loginPage');
  //const [StartPage, setStartPage] = useState('start')

  const handleSubmit = () => {
    setStartPage('login');
    return;
  }


  if (startPage === 'start') {
    return (
      <div className="App">
        <Header />
        <p>
          <button onClick={handleSubmit}>Logga in</button>
        </p>
        <h1>TEST</h1>

        <Footer />



      </div>
    );
  }


  if (startPage === 'login') {
    return (
      <div className="App">
        <Header />
        <p>

        </p>

        <LogIn />
        <Footer />


      </div>
    );
  }

  if (startPage === 'form') {
    return (
      <div className="App">
      <Header />

      <Footer />
      
      </div>
    )
  }
}
export default App;
