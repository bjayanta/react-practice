import React, { Component } from 'react'
import { connect } from "react-redux";
import { printLog } from "../services/actions/logActions";

class AppLog extends Component {
    render() {
        return (
            <div>
                <h1>{ this.props.msg }</h1>
                <input type="text" onChange={ (e) => this.props.printLog(e.target.value) } />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        msg: state.logReducer.message
    }
}

const mapDispatchToProps = () => {
    return {
        printLog
    }
}

export default connect(mapStateToProps, mapDispatchToProps())(AppLog);