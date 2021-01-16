import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
    
    render() {
        return (
            <div>
                <h1>Home</h1>
                <Link to="/about/hello">Go to about with some value</Link>
            </div>
        );
    }

}

export default Home;