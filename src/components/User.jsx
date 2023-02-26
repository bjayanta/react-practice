import React, { Component } from 'react'
import { connect } from "react-redux";
import { addUser } from "../features/user/userSlice";

class User extends Component {
    state = {
        user: "",
    };

    handleUser = (e) => {
        this.setState({
            user: e.target.value
        });
    }

    addUserFromInput = () => {
        this.props.addUser(this.state.user);
        this.setState({
            user: ''
        });
    }

    render() {
        return (
            <div>
                <div>
                    <input type="text" onChange={this.handleUser} value={this.state.user} />
                    <button onClick={this.addUserFromInput}>Add new user</button>
                </div>
                
                <ul>
                    {this.props.data.map((user, id) => (<li key={id}>{user}</li>))}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    data: state.user.data
});

export default connect(mapStateToProps, {addUser})(User);
