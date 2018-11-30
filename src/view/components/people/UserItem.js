import React from 'react';

const UserItem = ({ user }) => {
    console.log(user);
    return (
        <>
            <div className="container py-3 col-12 col-md-10 col-lg-8">
                <div className="card">
                    <div className="row ">
                        <div className="col-md-3 text-center p-4 pl-5">
                            <img className="rounded-circle " src="http://cdn.onlinewebfonts.com/svg/img_191958.png" alt="profile" width="80" />
                        </div>
                        <div className="card-block px-3 col-md-7 p-3 mt-2">
                            <h6 className="card-title">{user.name}</h6>
                            <p className="card-text">{user.about}</p>
                        </div>

                        <div className="card-block col-2 px-3 mt-3 p-3 text-center ">
                            <p className="card-text ">Last post <br />at {user.lastPostDate}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserItem