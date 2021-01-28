import React, { Component } from 'react'
import { connect } from "react-redux";

class Home extends Component {
    render() {
        return (
            <div>
                <strong>Home</strong>
                <h1>{ this.props.msg }</h1>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        msg: state.logReducer.message
    }
}

export default connect(mapStateToProps)(Home);
