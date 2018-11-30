import React from 'react';


const MyProfilePicAndName = ({ img, name, openModal }) => {
    return (
        <>
            <div className="text-center mb-4">
                <button type="button" onClick={openModal} className="btn btn-primary col-1 p-1 ">
                    Edit Profile
                </button>
            </div>
            <div className="row mb-4">
                <img className="col-4 ml-auto mr-auto h-100" src={img} alt="Card cap" />
                <h3 className="col-12 text-center mt-4">{name}</h3>
            </div>
        </>
    )
}
export { MyProfilePicAndName }