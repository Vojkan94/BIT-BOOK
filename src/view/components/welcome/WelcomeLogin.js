import React from 'react';

const WelcomeLogin = () => {
    return (
        <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
            <div className="row">
                <form className="col-12 mt-1">
                    <div className="form-group">
                        <input type="text" className="form-control mt-3" placeholder="Enter Email" />
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" placeholder="Enter Password" />
                    </div>
                    <button type="button" className="btn btn-primary">Login</button>
                </form>
            </div>
        </div>


    )
}

export default WelcomeLogin