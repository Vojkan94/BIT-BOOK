import React from 'react';

import './css/MyProfile.css'


const EditProfileButton = ({ openModal }) => {
    return (
        <div className="text-center mb-4">
            <button type="button" onClick={openModal} className="btn btn-primary col-1 p-1 ">
                Edit Profile
                </button>
        </div>

    )
}
export { EditProfileButton }