import React, { Component } from 'react'
import axios from "../../utils/axios";

export default class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: 'bjayanta.neo@gmail.com',
            password: '123456'
        }
    }

    login = e => {
        e.preventDefault();

        // login
        axios.post('login', {
            email: this.state.email,
            password: this.state.password
        }).then(response => {
            console.log(response.data);
        }).catch(errors => {
            console.log(errors);
        });
    }

    render() {
        return (
            <div>
                <h1>Login</h1>
                <form onSubmit={ this.login }>
                    <div>
                        <label htmlFor="email">Email address</label>
                        <input type="text" onChange={ e => {this.setState({email: e.target.value})} } value={ this.state.email } id="email" />
                    </div>

                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" onChange={ e => {this.setState({password: e.target.value})} } value={ this.state.password } id="password" />
                    </div>

                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}
