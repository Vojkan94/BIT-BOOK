import React from 'react';
import PostImage from './PostImage';
import PostText from './PostText';
import PostVideo from './PostVideo';

const PostItem = (props) => {

    return (
        <>
            <PostImage />
            <PostText />
            <PostVideo />
        </>
    )
}

export default PostItem