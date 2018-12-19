import React from 'react';

const PostDelete = ({ deletePost }) => {
    return (
        <button onClick={deletePost} type="button" className="close" aria-label="Close">
            <span aria-hidden="true"><i className="fa fa-trash text-danger"></i></span>
        </button>
    )
}
export default PostDelete;
