import React from 'react';

import './PostCountComment.css'

const PostCountComment = ({ postType, numComment }) => {
    return (
        <>
            <p className="float-left post-type">{`${postType} post`}</p>
            <p className="float-right "><i class="fa fa-comments" aria-hidden="true"></i> <span className="counter-message">{numComment}</span></p>
        </>

    )
}

export default PostCountComment