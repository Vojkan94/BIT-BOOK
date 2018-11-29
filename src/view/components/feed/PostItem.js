import React from 'react';
import PostImage from './PostImage';
import PostText from './PostText';
import PostVideo from './PostVideo';

const PostItem = ({ post }) => {
    // if (!props.posts) { return null }
    const { type } = post
    if (type === "video") {

        console.log(post.content);
    }
    let listItem;
    if (type === "text") {
        listItem = <PostText post={post} />
    }
    if (type === "image") {
        listItem = <PostImage post={post} />
    }
    if (type === "video") {
        listItem = <PostVideo post={post} />
    }
    return (
        <>
            {listItem}

        </>
    )
}

export default PostItem