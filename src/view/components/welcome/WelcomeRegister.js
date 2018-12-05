import React, { Component } from 'react';
import { userService } from '../../../services/userService';
import { validateService } from '../../../services/validationService';

class WelcomeRegister extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nameInput: "",
            userNameInput: "",
            emailInput: "",
            passwordInput: "",
            errorName: false,
            errorUserName: false,
            errorEmail: false,
            errorPassword: false,
            validInput: true
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
    changeEmailInput = (event) => {
        const valid = validateService.validateEmail(event.target.value);
        this.setState({
            emailInput: event.target.value,
            errorEmail: !valid
        })
    }
    changePasswordInput(event) {
        this.setState({
            passwordInput: event.target.value
        })
    }
    registerUser = () => {

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
    onKeyPress = (event) => {
        if (event.key === 'Enter') {
            this.registerUser();
        }
    }
    render() {
        const { errorName, errorUserName, errorEmail, errorPassword } = this.state
        const isAllValid = (errorName && errorUserName && errorEmail && errorPassword) ? false : true
        const isActive = this.props.isActive ? 'active' : '';
        return (
            <div className={`tab-pane fade show  ${isActive}`} role="tabpanel" aria-labelledby="nav-profile-tab">
                <div className="row">
                    <form className="col-12 mt-1" id="loginForm">
                        <div className="form-group">
                            <input type="text" className="form-control mt-3" id="registerName" placeholder="Enter Name"
                                value={this.state.nameInput}
                                onChange={this.changeNameInput}
                                onKeyPress={this.onKeyPress}
                            />
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control mt-3" id="registerUserName" placeholder="Enter Username"
                                value={this.state.usernameInput}
                                onChange={this.changeUsernameInput}
                                onKeyPress={this.onKeyPress}
                            />
                        </div>
                        <div className="form-group">


                            <input type="text" className="form-control mt-3" id="registerEmail" placeholder="Enter Email"
                                value={this.state.emailInput}
                                onChange={this.changeEmailInput}
                                onKeyPress={this.onKeyPress}
                            />
                            {this.state.errorEmail ? <p className="text-danger mt-1">Please enter valid e-mail address.</p> : null}
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control" id="registerPassword" placeholder="Enter Password"
                                value={this.state.passwordInput}
                                onChange={this.changePasswordInput}
                                onKeyPress={this.onKeyPress}
                            />
                        </div>

                        <button type="button" onClick={this.registerUser} disabled={isAllValid} className="btn btn-primary" id="registerButton">Register</button>
                        <p className="text-danger">{this.state.error}</p>

                    </form>
                </div>
            </div>
        )
    }
}
export default WelcomeRegister;