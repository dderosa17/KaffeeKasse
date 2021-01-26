import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { HomePage } from "../views/homepage";
import { LoginPage } from "../views/login";

export const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact={true} path="/" component={LoginPage} />
                <Route exact={true} path="/homepage" component={HomePage} />
            </Switch>
        </Router>
    )
}