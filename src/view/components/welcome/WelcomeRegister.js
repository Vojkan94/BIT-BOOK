import React, { Component } from 'react';
import { userService } from '../../../services/userService';


class WelcomeRegister extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nameInput: "",
            userNameInput: "",
            emailInput: "",
            passwordInput: ""
        }
    }

    changeNameInput = (event) => {
        this.setState({
            nameInput: event.target.value
        })
    }
    changeUserNameInput = (event) => {
        this.setState({
            userNameInput: event.target.value
        })
    }
    changeEmailInput = (event) => {
        this.setState({
            emailInput: event.target.value
        })
    }
    changePasswordInput = (event) => {
        this.setState({
            passwordInput: event.target.value
        })
    }
    registerUser = () => {
        const inputData = {
            "username": this.state.userNameInput,
            "password": this.state.passwordInput,
            "name": this.state.nameInput,
            "email": this.state.emailInput
        }
        userService.createUser(inputData)
            .then((response) => {
                console.log(response);
            })
    }


    render() {
        return (
            <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                <div className="row">
                    <form className="col-12 mt-1" id="loginForm">

                        <div className="form-group">
                            <input type="text" value={this.state.nameInput} onChange={this.changeNameInput} className="form-control mt-3" id="registerName" placeholder="Enter Name" />
                        </div>
                        <div className="form-group">
                            <input type="text" value={this.state.userNameInput} onChange={this.changeUserNameInput} className="form-control mt-3" id="registerUserName" placeholder="Enter Username" />
                        </div>

                        <div className="form-group">
                            <input type="text" value={this.state.emailInput} onChange={this.changeEmailInput} className="form-control mt-3" id="registerEmail" placeholder="Enter Email" />
                        </div>

                        <div className="form-group">
                            <input type="password" value={this.state.passwordInput} onChange={this.changePasswordInput} className="form-control" id="registerPassword" placeholder="Enter Password" />
                        </div>

                        <button type="button" onClick={this.registerUser} className="btn btn-primary" id="registerButton">Register</button>
                    </form>
                </div>
            </div>

        )
    }
}

export default WelcomeRegister