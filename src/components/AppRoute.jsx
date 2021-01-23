import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom';

// Pages
import Home from "../pages/Home";
import About from "../pages/About";
import Contract from "../pages/Contract";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import NotFound from "../pages/NotFound";


export default class AppRoute extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={ Home } />
                    <Route exact path="/about" component={ About } />
                    <Route exact path="/contract" component={ Contract } />

                    {/* auth route */}
                    <Route exact path="/login" component={ Login } />
                    <Route exact path="/register" component={ Register } />

                    <Route component={ NotFound } />
                </Switch>
            </div>
        )
    }
}
