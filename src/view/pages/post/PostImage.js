import React from 'react';

const PostImage = (props) => {
    return (
        <div className="card container mt-5 mb-5" >
            <div className="card-body m-3">
                <img className="card-img mb-3" src="https://via.placeholder.com/500x300" alt="Card cap" />
                <p className="card-text float-left">Image Post</p>
                <p className="card-text float-right">15 comments</p>
            </div>
        </div>
    )
}

export default PostImage