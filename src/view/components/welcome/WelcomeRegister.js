import React, { Component } from 'react';
import { userService } from '../../../services/userService';


class WelcomeRegister extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nameInput: '',
            usernameInput: '',
            emailInput: '',
            passwordInput: '',
            error: ''
        }
        this.changeNameInput = this.changeNameInput.bind(this);
        this.changeUsernameInput = this.changeUsernameInput.bind(this);
        this.changeEmailInput = this.changeEmailInput.bind(this);
        this.changePasswordInput = this.changePasswordInput.bind(this);
        this.registerUser = this.registerUser.bind(this);
    }

    changeNameInput(event) {
        this.setState({
            nameInput: event.target.value
        })
    }
    changeUsernameInput(event) {
        this.setState({
            usernameInput: event.target.value
        })
    }
    changeEmailInput(event) {
        this.setState({
            emailInput: event.target.value
        })
    }
    changePasswordInput(event) {
        this.setState({
            passwordInput: event.target.value
        })
    }
    registerUser() {
        const inputData = {
            'username': this.state.usernameInput,
            'password': this.state.passwordInput,
            'name': this.state.nameInput,
            'email': this.state.emailInput
        }
        userService.createUser(inputData)
            .then((response) => {
                if (response.sessionId) {
                    this.setState({ error: '' })
                    this.props.loginBtn();
                    this.props.successRegister();
                }
                else {
                    this.setState({ error: response.error.message })
                }
            })
    }
    render() {
        const isActive = this.props.isActive ? 'active' : '';
        return (
            <div className={`tab-pane fade show  ${isActive}`} role="tabpanel" aria-labelledby="nav-profile-tab">
                <div className="row">
                    <form className="col-12 mt-1" id="loginForm">
                        <div className="form-group">
                            <input type="text" value={this.state.nameInput} onChange={this.changeNameInput} className="form-control mt-3" id="registerName" placeholder="Enter Name" />
                        </div>
                        <div className="form-group">
                            <input type="text" value={this.state.usernameInput} onChange={this.changeUsernameInput} className="form-control mt-3" id="registerUserName" placeholder="Enter Username" />
                        </div>
                        <div className="form-group">
                            <input type="text" value={this.state.emailInput} onChange={this.changeEmailInput} className="form-control mt-3" id="registerEmail" placeholder="Enter Email" />
                        </div>
                        <div className="form-group">
                            <input type="password" value={this.state.passwordInput} onChange={this.changePasswordInput} className="form-control" id="registerPassword" placeholder="Enter Password" />
                        </div>
                        <p className="text-danger">{this.state.error}</p>
                        <button type="button" onClick={this.registerUser} className="btn btn-primary" id="registerButton">Register</button>
                    </form>
                </div>
            </div>
        )
    }
}
export default WelcomeRegister;