import React from 'react';

const UserSearch = ({ user }) => {
    return (
        <>
            <div className="container input-group mb-3 col-12 col-md-10 col-lg-8">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1"><i className="fa fa-search"></i></span>
                </div>
                <input type="text" className="form-control" placeholder="Search users" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
        </>
    )
}

export default UserSearch