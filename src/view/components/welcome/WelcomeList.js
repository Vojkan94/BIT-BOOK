import React from 'react';

import WelcomeLogin from './WelcomeLogin'
import WelcomeRegister from './WelcomeRegister'

const WelcomeList = () => {
    return (
        <div className="col-5">
            <nav>
                <div className="nav nav-tabs nav-login" id="nav-tab" role="tablist">
                    <a className="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Login</a>
                    <a className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Register</a>

                </div>
            </nav>
            <div className="tab-content" id="nav-tabContent">
                <WelcomeLogin />
                <WelcomeRegister />

            </div>
        </div>


    )
}

export default WelcomeList