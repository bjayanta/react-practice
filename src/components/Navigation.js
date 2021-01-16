import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Navigation extends Component {

    render() {
        return (
            <div>
                <ul>
                    <li><NavLink exact activeStyle={ {color: "red"} } to="/">Home</NavLink></li>
                    <li><NavLink exact activeStyle={ {color: "red"} } to="/about">About</NavLink></li>
                    <li><NavLink exact activeStyle={ {color: "red"} } to="/contact">Contact</NavLink></li>
                </ul>
            </div>
        );
    }

}

export default Navigation;