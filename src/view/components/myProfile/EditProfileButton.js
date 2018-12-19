import React from 'react';

const EditProfileButton = ({ openModal }) => {
    return (
        <div className="row text-center mb-4">
            <button type="button" 
                className="btn btn-primary offset-4 col-4 offset-lg-5 col-lg-2" 
                onClick={openModal}>
                <i className="fa fa-cog mr-2" ></i>Edit Profile
            </button>
        </div>

    )
}
export default EditProfileButton;
