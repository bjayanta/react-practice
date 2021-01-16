import React, { Component } from "react";

class MultipleInput extends Component {

    constructor() {
        super();

        this.state = {
            first_name: "",
            last_name: "",
            email: ""
        }
    }

    catchInput = (event) => {
        var name = event.target.name,
            value = event.target.value;

        this.setState({[name]: value});
    }

    render() {
        return (
            <div>
                <form>
                    <input type="text" name="first_name" onChange={ this.catchInput }/>
                    <input type="text" name="last_name" onChange={ this.catchInput }/>
                    <input type="text" name="email" onChange={ this.catchInput }/>
                </form>

                <table>
                    <thead>
                        <tr>
                            <th>First name</th>
                            <th>Last name</th>
                            <th>Email address</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>{ this.state.first_name }</td>
                            <td>{ this.state.last_name }</td>
                            <td>{ this.state.email }</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }

}

export default MultipleInput;