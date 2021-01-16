import React, { Component } from "react";

class About extends Component {

    constructor({ match }) {
        super();
        this.state = {
            url_data: match.params.some_data
        }
    }
    
    render() {
        return (
            <div>
                <h1>About</h1>
                { this.state.url_data }
            </div>
        );
    }

}

export default About;