import React, { Component } from 'react';

import WelcomeLogin from './WelcomeLogin'
import WelcomeRegister from './WelcomeRegister'

class WelcomeList extends Component {

    constructor(props) {
        super(props)

        this.state = {
            loginActive: true,
            registerActive: false
        }
        this.loginBtn = this.loginBtn.bind(this);
        this.registerBtn = this.registerBtn.bind(this);
    }

    loginBtn() {
        this.setState({
            loginActive: true,
            registerActive: false
        })
    }
    registerBtn() {
        this.setState({
            loginActive: false,
            registerActive: true
        })
    }



    render() {
        const isActiveLogin = this.state.loginActive ? 'active' : '';
        const isActiveRegister = this.state.registerActive ? 'active' : '';
        return (
            <div className="col-5">
                <nav>
                    <div className="nav nav-tabs nav-login" id="nav-tab" role="tablist">
                        <button onClick={this.loginBtn} className={`nav-item nav-link ${isActiveLogin}`} id="nav-home-tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Login</button>
                        <button onClick={this.registerBtn} className={`nav-item nav-link ${isActiveRegister}`} id="nav-profile-tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Register</button>
                    </div>
                </nav>
                <div className="tab-content" id="nav-tabContent">
                    <WelcomeLogin isActive={this.state.loginActive} />
                    <WelcomeRegister isActive={this.state.registerActive} loginBtn={this.loginBtn} />
                </div>

            </div>


        )
    }
}

export default WelcomeList