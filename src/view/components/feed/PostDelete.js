import React from 'react';
import './PostDelete.css'

const PostDelete = ({ deletePost }) => {
    return (
        <button onClick={deletePost} type="button" className="close" aria-label="Close">
            <span aria-hidden="true"><i class="fa fa-trash post-delete"></i></span>
        </button>
    )
}

export default PostDelete