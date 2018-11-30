import React from 'react';

const MyProfileDesc = ({ about, aboutShort }) => {
    return (
        <div className="row mb-5">
            <div className="col-9 m-auto">
                <div className="card-body">
                    <p className="card-text text-center">{`${about} ${aboutShort}.`}</p>
                </div>
            </div>
        </div>
    )
}


export { MyProfileDesc }