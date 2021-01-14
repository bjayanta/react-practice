import React, { Component } from "react";

class EventHandler extends Component {
    constructor(props) {
        super(props);

        this.state = {
            message: "My message.",
        }

        // this.demoEventHandler = this.demoEventHandler.bind(this);
    }
    
    doAlert() {
        alert("Hello World!");
    }

    greetings(person) {
        var msg = "Welcome to " + person + ".";

        console.log(msg);
        alert(msg);
    }

    // demoEventHandler(event) {
    //     this.setState({message: event.target.value})
    // }

    demoEventHandler = (event) => this.setState({message: event.target.value})

    render() {
        return (
            <div style={ {"margin": "15px"} }>
                <div>
                    <button onClick={ this.doAlert }>Do Alert</button>
                    <button onClick={ this.greetings.bind(this, this.props.person) }>Greetings</button>
                </div>

                <p>{ this.state.message }</p>
                <input type="text" onChange={ this.demoEventHandler } value={this.state.message} />
            </div>
        );
    }

}

export default EventHandler;