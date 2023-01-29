import { useState, useEffect } from "react";
import LogIn from "../Login/Login";
import SignUp from "../SignUp/SignUp";
import '../../App.css'



function MainPage() {
    const [mainPage, setMainPage] = useState('start');
    //const [startPage, setStartPage] = useState('login')

    /* const handleSubmitSignUp = (e) => {
       e.preventDefault();
       setStartPage=('signup');
     }*/


    const handleSubmit = () => {
        setMainPage('login');
        return;
    }

    const handleSubmit2 = () => {
        setMainPage('signup');
        return;
    }


    if (mainPage === 'start') {
        return (
            <div className="App">
                <p>
                    <button onClick={handleSubmit}>Logga in</button>
                </p>
                <p>
                    <button onClick={handleSubmit2}>Registrera</button>
                </p>
            </div>
        );
    }


    if (mainPage === 'login') {
        return (
            <div className="App">               
                <LogIn />
            </div>
        );
    }

    if (mainPage === 'signup') {
        return (
            <div className="App">
                <SignUp />
            </div>
        )
    }

};

export default MainPage;