import React from 'react';

import './css/MyProfile.css'

const EditProfileButton = ({ openModal }) => {
    return (
        <div className="text-center mb-4">
            <button type="button" className="btn btn-primary col-1 p-1" onClick={openModal}>
                Edit Profile
            </button>
        </div>

    )
}
export default EditProfileButton;
