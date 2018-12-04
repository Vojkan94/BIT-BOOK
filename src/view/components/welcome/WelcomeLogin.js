import React, { Component } from 'react';
import { userService } from '../../../services/userService';

import history from '../../../shared/history.js'


class WelcomeLogin extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userNameInput: "",
            passwordInput: "",
            error: ""
        }
    }
    changeUserNameInput = (event) => {
        this.setState({
            userNameInput: event.target.value
        })
    }
    changePasswordInput = (event) => {
        this.setState({
            passwordInput: event.target.value
        })
    }

    loginUser = () => {
        const inputData = {
            "username": this.state.userNameInput,
            "password": this.state.passwordInput
        }
        userService.loginUser(inputData)
            .then((response) => {
                console.log(response);
                if (response.sessionId) {
                    sessionStorage.setItem('sessionId', response.sessionId);
                    this.setState({
                        error: ''

                    })
                    console.log(history);
                    history.push('/feed');
                    history.go()

                }
                else {
                    this.setState({
                        error: response.error.message
                    })
                }
            })
    }




    render() {
        return (
            <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" >
                <div className="row">
                    <form className="col-12 mt-1">
                        <div className="form-group">
                            <input type="text" value={this.state.userNameInput} onChange={this.changeUserNameInput} className="form-control mt-3" placeholder="Enter username" />
                        </div>
                        <div className="form-group">
                            <input type="password" value={this.state.passwordInput} onChange={this.changePasswordInput} className="form-control" placeholder="Enter Password" />
                        </div>
                        <p className="text-danger">{this.state.error}</p>
                        <button onClick={this.loginUser} type="button" className="btn btn-primary">Login</button>
                    </form>
                </div>
            </div >
        )
    }
}

export default WelcomeLogin