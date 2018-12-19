import React from 'react';

import './MyProfilePicAndName.css'


const MyProfilePicAndName = ({ img, name }) => {
    return (
        <div className="profile-header">
            <img src={img} alt="Profile img" />
            <h3 className="">{name}</h3>
        </div>
    )
}
export default MyProfilePicAndName;
