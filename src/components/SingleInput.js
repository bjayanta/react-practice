import React, { Component } from "react";

class SingleInput extends Component {

    constructor() {
        super();

        this.state = {
            data: ""
        }
    }

    catchInput = (event) => {
        this.setState({"data": event.target.value});
    }

    render() {
        return (
            <div>
                <form>
                    <input type="text" onChange={ this.catchInput }/>
                    <p>{ this.state.data }</p>
                </form>
            </div>
        );
    }

}

export default SingleInput;