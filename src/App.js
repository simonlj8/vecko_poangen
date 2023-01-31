import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

import React, { useState, useEffect } from 'react';
import MainPage from './components/MainPage/MainPage';
import axios from 'axios';

function App() {
  const [startPage, setStartPage] = useState('start');
  const [mainPage, setMainPage] = useState('login');
  const [SignUpPage, setSignUpPage] = useState('signup');
  //const [LoginPage, setLoginPage] = useState('loginPage');
  //const [StartPage, setStartPage] = useState('start')
  function getData() {
    axios.get('/api/info').then(res=> {
      console.log(res)
    })
  }
 

 if (startPage === 'start') {
    return (
      <div className="App">
        <Header />  
        <button onClick={getData}>Test Button</button>       
        <MainPage />
        <Footer />
      </div>
    );
 }

/*
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

  if (startPage === 'signup') {
    return (
      <div className="App">
        <Header />
        <SignUp />
        <Footer />
      </div>
    )
  }*/
}
export default App;
