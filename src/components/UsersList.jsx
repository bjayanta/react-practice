import React, { Component } from 'react'
import { connect } from "react-redux";
import { getUsers } from "../services/actions/userAction";

class UsersList extends Component {
    render() {
        return (
            <div>
                User
                { (this.props.loading) ? <h3>Loading ...</h3> : ''}
                <button onClick={ () => this.props.getUsers() }>Get Users</button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        loading: state.userReducer.loading,
        userList: state.userReducer.users,
        error: state.userReducer.error
    }
}

const mapDispatchToProps = () => {
    return {
        getUsers
    }
}

export default connect(mapStateToProps, mapDispatchToProps())(UsersList)