import React from 'react';
import { Link } from 'react-router-dom';
import PostImage from './PostImage';
import PostText from './PostText';
import PostVideo from './PostVideo';

import { postService } from '../../../services/postService';

const PostItem = ({ post }) => {
    const { type } = post

    const deletePost = (event) => {
        event.stopPropagation();
        let inputData = {
            "id": post.id,
            "dateCreated": new Date(),
            "userId": 0,
            "userDisplayName": "string",
            "type": "string",
            "commentsNum": 0
        }
        postService.postDelete(`posts/${post.id}`, inputData)
        console.log(`posts/${post.id}`);

    }
    let listItem;
    if (type === "text") {
        const typepost = "textposts"
        listItem = <Link to={`post/${typepost}/${post.id}`}><PostText post={post} deletePost={deletePost} /></Link>
    }
    if (type === "image") {
        const typepost = "imageposts"
        listItem = <Link to={`post/${typepost}/${post.id}`}><PostImage post={post} deletePost={deletePost} /></Link>
    }
    if (type === "video") {
        const typepost = "videoposts"
        listItem = <Link to={`post/${typepost}/${post.id}`}><PostVideo post={post} deletePost={deletePost} /></Link>
    }


    return (
        <>
            {listItem}
        </>
    )
}

export default PostItem

