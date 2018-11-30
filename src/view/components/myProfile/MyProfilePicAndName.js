import React from 'react';


const MyProfilePicAndName = ({ img, name }) => {
    return (
        <div className="row mb-4">
            <img className="col-4 ml-auto mr-auto h-100" src={img} alt="Card cap" />
            <h3 className="col-12 text-center mt-4">{name}</h3>
        </div>
    )
}
export { MyProfilePicAndName }