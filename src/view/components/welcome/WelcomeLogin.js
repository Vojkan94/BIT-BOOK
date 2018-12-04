import React from 'react';

const WelcomeLogin = () => {
    return (
        <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
            <div class="row">
                <form class="col-12 mt-1" id="loginForm">

                    <div class="form-group">
                        <input type="text" class="form-control mt-3" id="loginUsername" placeholder="Enter Email" />
                    </div>

                    <div class="form-group">
                        <input type="password" class="form-control" id="loginPassword" placeholder="Enter Password" />
                    </div>

                    <button type="button" class="btn btn-primary" id="loginButton">Login</button>
                </form>
            </div>
        </div>


    )
}

export default WelcomeLogin