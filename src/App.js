import './App.css';
import Navbar from './components/Footer/Footer';
import Header from './components/Header/Header';
import LogIn from './components/Login/Login';
import React, { useState, useEffect } from 'react';

function App() {
  const [mainPage, setMainPage] = useState('start')
  //const [LoginPage, setLoginPage] = useState('loginPage');
  //const [StartPage, setStartPage] = useState('start')

  const handleSubmit = () => {
    setMainPage('login');
  return;
  }
  

  if (mainPage === 'start') { 
    return (
      <div className="App">    
          <Header />
          <p>          
          <button onClick={handleSubmit}>Logga in</button>
          </p>
           <h1>TEST</h1>         
        
        <footer>
        
          <Navbar />
        </footer>
      </div>
    );
  }




  if (mainPage === 'login') { 
  return (
    <div className="App">    
        <Header />
        <p>
       
        </p>
        
        <LogIn />
      <footer>
        <Navbar />
      </footer>
    </div>
  );
}
}
export default App;
