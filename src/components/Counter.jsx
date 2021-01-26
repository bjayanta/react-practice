import React, { Component } from 'react'
import { connect } from "react-redux";
import { increment, decrement } from "../services/actions/counterAction";

class Counter extends Component {
    render() {
        return (
            <div>
                <h1>{ this.props.count }</h1>
                <button onClick={ () => this.props.increment(2) }>+ Increment</button>
                <button onClick={ () => this.props.decrement(1) }>- Decrement</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        count: state.counterReducer.count
    }
}

const mapDispatchToProps = () => {
    return {
        increment, 
        decrement
    }
}

export default connect(mapStateToProps, mapDispatchToProps())(Counter);
