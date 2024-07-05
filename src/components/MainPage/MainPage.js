import { useState, useEffect } from "react";
import LogIn from "../Login/Login";
import SignUp from "../SignUp/SignUp";
import '../../App.css';
import Button from 'react-bootstrap/Button';
import Tasks from '../Tasks/Tasks'
import './MainPage.css';
import React from "react";


function MainPage() {
    const [mainPage, setMainPage] = useState('start');  

    const handleSubmit = () => {
        setMainPage('login');
        return;
    }

    const handleSubmit2 = () => {
        setMainPage('signup');
        return;
    }

    const handleSubmit3 = () => {
        setMainPage('points');
    }


    if (mainPage === 'start') {
        return (
            <div>
                <div className="App">
                    <div className="choose">
                        <p>
                            <Button id="btn1" variant="primary" size="lg" active onClick={handleSubmit}>Logga in användare</Button>
                        </p>
                        <p>
                            <Button id="btn2" variant="primary" size="lg" active onClick={handleSubmit2}>Registrera användare</Button>
                        </p>
                        <p>
                            <Button id="btn3" variant="primary" size="lg" active onClick={handleSubmit3}>Registrera Poäng</Button>
                        </p>
                    </div>
                </div>
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

    if (mainPage === 'points') {
        return (
            <div className="App">
                <Tasks />
            </div>
        )
    }

};

export default MainPage;