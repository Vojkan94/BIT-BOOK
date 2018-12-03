import React from 'react';

const PostDelete = ({deletePost}) => {
    return (
        <button onClick={deletePost}type="button" className="close pb-2" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
    )
}

export default PostDelete