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
  const [username, setusername] = useState('');


  function getData() {
    axios.get('/api/info').then(res => {
      console.log(res)
    })
  }

  function sendData() {
    let user = {
      username: username
    }
    axios.post('/api/validate', user).then(res => {
      console.log(res)
    })
  }



  if (startPage === 'start') {
    return (
      <div className="App">
        <Header />
        <button onClick={getData}>Test Button</button>
        <input type="text" value={username} onChange={(e) => { setusername(e.target.value) }}></input>
        <button onClick={sendData}>Send data</button>
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
