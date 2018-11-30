import React from 'react';
import dateFormat from './../../../shared/dateFormat'

const UserItem = ({ user }) => {
    return (
        <>
            <div className="container py-3 col-12 col-md-10 col-lg-8">
                <div className="card">
                    <div className="row ">
                        <div className="col-md-3 text-center p-4 ">
                            <img className="" src={user.img} alt="profile" width="80px" />
                        </div>
                        <div className="card-block px-3 col-md-9 p-3 mt-2">
                            <h6 className="card-title">{user.name}</h6>
                            <p className="card-text">{user.about}</p>
                        </div>
                        <div className="card-block col-12 text-right">
                            <p className="card-text text-muted pr-3 pb-1">{dateFormat(user.lastPostDate)}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserItem