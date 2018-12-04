import React from 'react';

import './css/MyProfile.css'


const MyProfilePicAndName = ({ img, name, openModal }) => {
    return (
        <>
            <div className="text-center mb-4">
                <button type="button" onClick={openModal} className="btn btn-primary col-1 p-1 ">
                    Edit Profile
                </button>
            </div>
            <div className="profile-header">
                <img src={img} alt="Profile img" />
                <h3 className="">{name}</h3>
            </div>
        </>

    )
}
export { MyProfilePicAndName }