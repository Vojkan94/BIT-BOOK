import React from 'react';
import { Link } from 'react-router-dom';
import PostImage from './PostImage';
import PostText from './PostText';
import PostVideo from './PostVideo';

import { postService } from '../../../services/postService';

const PostItem = ({ post, user }) => {
    const { type } = post

    const deletePost = () => {
        let inputData = {
            "id": post.id,
            "dateCreated": new Date(),
            "userId": 0,
            "userDisplayName": "string",
            "type": "string",
            "commentsNum": 0
        }
        postService.postDelete(`posts/${post.id}`, inputData);

        // setTimeout(() => {
        //     window.location.reload();

        // }, 500)
    }

    let listItem;
    if (type === "text") {
        listItem = <PostText post={post} deletePost={deletePost} user={user} />
    }
    if (type === "image") {
        listItem = <PostImage post={post} deletePost={deletePost} user={user} />
    }
    if (type === "video") {
        listItem = <PostVideo post={post} deletePost={deletePost} user={user} />
    }


    return (
        <>
            {listItem}
        </>
    )
}

export default PostItem

