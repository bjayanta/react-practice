import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

class AppRoute extends Component {

    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={ Home } />
                    <Route exact path="/about/:some_data?" component={ About } />
                    <Route exact path="/contact" component={ Contact } />
                    <Route component={ NotFound } />
                </Switch>
            </div>
        );
    }

}

export default AppRoute;