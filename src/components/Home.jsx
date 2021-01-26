import React, { Component } from 'react'
import { connect } from "react-redux";

class Home extends Component {
    render() {
        return (
            <div>
                Home
                <h1>{ this.props.count }</h1>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        count: state.counterReducer.count
    }
}

export default connect(mapStateToProps)(Home);