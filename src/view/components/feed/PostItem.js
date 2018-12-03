import React from 'react';
import { Link } from 'react-router-dom';
import PostImage from './PostImage';
import PostText from './PostText';
import PostVideo from './PostVideo';

import { postService } from '../../../services/postService';

const PostItem = ({ post, user, selectValue }) => {
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

    let listItemText;
    let listItemImage;
    let listItemVideo;

    if (selectValue === "posts") {
        listItemText = <PostText post={post} deletePost={deletePost} user={user} />
        listItemImage = <PostImage post={post} deletePost={deletePost} user={user} />
        listItemVideo = <PostVideo post={post} deletePost={deletePost} user={user} />
    }
    if (type === "text" && selectValue === "text") {
        listItemText = <PostText post={post} deletePost={deletePost} user={user} />
    }
    if (type === "image" && selectValue === "image") {
        listItemImage = <PostImage post={post} deletePost={deletePost} user={user} />
    }
    if (type === "video" && selectValue === "video") {
        listItemVideo = <PostVideo post={post} deletePost={deletePost} user={user} />
    }



    return (
        <>
            {listItemText}
            {listItemImage}
            {listItemVideo}
        </>
    )
}

export default PostItem

