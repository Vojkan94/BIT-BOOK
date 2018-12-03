import React from 'react';
import PostImage from './PostImage';
import PostText from './PostText';
import PostVideo from './PostVideo';

import { postService } from '../../../services/postService';

const PostItem = ({ post, user }) => {
    const { type } = post

    const deletePost = () => {


        // Cccccccccccccccccc
        postService
            .postDelete(`posts/${post.id}`)
        // .then((response) => {
        //     response.status === 200
        //     this.props.loadPosts()
        // })
    }
    if (!user) { return null }
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

