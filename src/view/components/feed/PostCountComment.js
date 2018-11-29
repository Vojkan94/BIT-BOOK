import React from 'react';

const PostCountComment = ({ postType, numComment }) => {
    return (
        <>
            <p className="card-text float-left">{`${postType} post`}</p>
            <p className="card-text float-right">{`Comments: ${numComment}`}</p>
        </>

    )
}

export default PostCountComment