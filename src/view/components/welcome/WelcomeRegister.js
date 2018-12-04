import React from 'react';

const WelcomeRegister = () => {
    return (
        <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
            <div class="row">
                <form class="col-12 mt-1" id="loginForm">

                    <div class="form-group">
                        <input type="text" class="form-control mt-3" id="registerName" placeholder="Enter Name" />
                    </div>

                    <div class="form-group">
                        <input type="text" class="form-control mt-3" id="registerEmail" placeholder="Enter Email" />
                    </div>

                    <div class="form-group">
                        <input type="password" class="form-control" id="registerPassword" placeholder="Enter Password" />
                    </div>

                    <button type="button" class="btn btn-primary" id="registerButton">Register</button>
                </form>
            </div>
        </div>


    )
}

export default WelcomeRegister