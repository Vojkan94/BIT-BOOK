import React from 'react';

const WelcomeRegister = () => {
    return (
        <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
            <div className="row">
                <form className="col-12 mt-1" id="loginForm">

                    <div className="form-group">
                        <input type="text" className="form-control mt-3" id="registerName" placeholder="Enter Name" />
                    </div>

                    <div className="form-group">
                        <input type="text" className="form-control mt-3" id="registerEmail" placeholder="Enter Email" />
                    </div>

                    <div className="form-group">
                        <input type="password" className="form-control" id="registerPassword" placeholder="Enter Password" />
                    </div>

                    <button type="button" className="btn btn-primary" id="registerButton">Register</button>
                </form>
            </div>
        </div>


    )
}

export default WelcomeRegister