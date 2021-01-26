import React from "react";
import { useHistory } from "react-router-dom";
import './StyleNavBar.css';

export const NavBar = () => {

    const history = useHistory();
    const HandlerLogOut = () => {
        history.push("/")
    }

    return (
        <section className="main-section-navbar">
            <div className="container-logo">
                <h1 className="logo">KaffeeKasse</h1>
            </div>
            <div className="wrapper-buttons">
                <button className="button-login">Login</button>
                <button className="button-logout" onClick={HandlerLogOut}>Logout</button>
            </div>
        </section>
    )

} 