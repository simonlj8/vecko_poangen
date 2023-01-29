import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import LogIn from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import React, { useState, useEffect } from 'react';
import MainPage from './components/MainPage/MainPage';

function App() {
  const [startPage, setStartPage] = useState('start')
  const [mainPage, setMainPage] = useState('login');
  const [SignUpPage, setSignUpPage] = useState('signup')
  //const [LoginPage, setLoginPage] = useState('loginPage');
  //const [StartPage, setStartPage] = useState('start')

 

  if (startPage === 'start') {
    return (
      <div className="App">
        <Header />            
        <p>
        <MainPage />
        </p>
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
