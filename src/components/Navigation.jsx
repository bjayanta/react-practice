import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Navigation extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li><NavLink exact to="/">Home</NavLink></li>
                    <li><NavLink exact to="/about">About</NavLink></li>
                    <li><NavLink exact to="/contract">Contract</NavLink></li>
                </ul>

                <ul>
                    <li><NavLink exact to="/login">Login</NavLink></li>
                    <li><NavLink exact to="/register">Register</NavLink></li>
                </ul>
            </div>
        )
    }
}
