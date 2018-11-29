import React from 'react';
import { Link } from 'react-router-dom';
import PostImage from './PostImage';
import PostText from './PostText';
import PostVideo from './PostVideo';

const PostItem = ({ post }) => {
    const { type } = post
    let listItem;
    if (type === "text") {
        const typepost = "textposts"
        listItem = <Link to={`post/${typepost}/${post.id}`}><PostText post={post} /></Link>
    }
    if (type === "image") {
        const typepost = "imageposts"
        listItem = <Link to={`post/${typepost}/${post.id}`}><PostImage post={post} /></Link>
    }
    if (type === "video") {
        const typepost = "videoposts"
        listItem = <Link to={`post/${typepost}/${post.id}`}><PostVideo post={post} /></Link>
    }
    return (
        <>
            {listItem}
        </>
    )
}

export default PostItem