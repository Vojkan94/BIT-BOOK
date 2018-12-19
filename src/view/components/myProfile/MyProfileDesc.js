import React from 'react';

import './MyProfileDesc.css'

const MyProfileDesc = ({ about }) => {
    return (
        <div className="profile-desc">
            <h3>- About -</h3>
            <p className="card-text text-center p-4">
                {`${about}`}
            </p>
        </div>
    )
}
export default MyProfileDesc;
