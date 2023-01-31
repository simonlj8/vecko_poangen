import { useState, useEffect } from "react";
import LogIn from "../Login/Login";
import SignUp from "../SignUp/SignUp";
import '../../App.css';
import Button from 'react-bootstrap/Button';



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
                    <Button variant="primary" size="lg" active onClick={handleSubmit}>Logga in</Button>
                </p>
                <p>
                    <Button variant="secondary" size="lg" active onClick={handleSubmit2}>Registrera</Button>
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