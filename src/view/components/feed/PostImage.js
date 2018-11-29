import React from 'react';
import PostCountComment from './PostCountComment';

const PostImage = (props) => {
    return (
        <div className="card container pt-2 mt-2 mb-2 col-12 col-md-10 col-lg-8" >
            <div className="card-body p-0 m-2">
                <img className="card-img mb-3" src="https://via.placeholder.com/500x300" alt="Card cap" />
                <PostCountComment />
            </div>
        </div>
    )
}

export default PostImage