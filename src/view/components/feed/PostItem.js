import React from 'react';
import { Link } from 'react-router-dom';
import PostImage from './PostImage';
import PostText from './PostText';
import PostVideo from './PostVideo';

const PostItem = ({ post }) => {
    const { type } = post
    let listItem;
    if (type === "text") {
        listItem = <Link to={`post/${post.id}`}><PostText post={post} /></Link>
    }
    if (type === "image") {
        listItem = <Link to={`post/${post.id}`}><PostImage post={post} /></Link>
    }
    if (type === "video") {
        listItem = <Link to={`post/${post.id}`}><PostVideo post={post} /></Link>
    }
    return (
        <>
            {listItem}
        </>
    )
}

export default PostItem