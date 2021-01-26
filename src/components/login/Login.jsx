import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { NavBar } from '../navBar/NavBar';
import './StyleLogin.css';


export const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();

    const HandlerEmail = (e) => {
        setEmail(e.currentTarget.value);
    }

    const HandlerPassword = (e) => {
        setPassword(e.currentTarget.value)
    }

    const HandlerLogin = () => {
        history.push("/homePage")
    }

    return (
        <>
            <section className="main-container-login">
                <div className="wrapper-login">
                    <div className="wrapper-login-write">
                        <span className="login-write">Login</span>
                    </div>
                    <div className="wrapper-email-login">
                        <input className="text-fild-email" type="text" placeholder="Email" onChange={HandlerEmail} />
                    </div>
                    <div className="wrapper-pwd-login">
                        <input className="text-fild-psw" type="password" placeholder="Password" onChange={HandlerPassword} />
                    </div>
                    <div className="wrapper-login-button">
                        <button className="button-login-form" onClick={HandlerLogin}>Login</button>
                    </div>
                    <div className="registration-link">
                        <span className="registration-write">don't have an acconut?&nbsp;</span><a href="https://www.gmail.com" target="blank" className="registration-write-singup">Sing up</a>
                    </div>
                </div>
            </section>
        </>
    )
}