import React, { Component } from "react";

class Textarea extends Component {

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
                    <textarea onChange={ this.catchInput } cols="30" rows="10" />
                    <p>{ this.state.data }</p>
                </form>
            </div>
        );
    }

}

export default Textarea;