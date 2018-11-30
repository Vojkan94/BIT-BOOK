import React from 'react';
import PostCountComment from './PostCountComment';
import PostDelete from './PostDelete';

const PostVideo = ({ post, deletePost }) => {
    if (post.content.indexOf("youtube") === -1) {
        return null;
    }
    return (
        <div className="card container pt-2 mt-2 mb-2 col-12 col-md-10 col-lg-8">
            <div className="card-body p-0 m-2">
                <PostDelete onClick={deletePost} />
                <div className="embed-responsive embed-responsive-16by9 mb-3">
                    <iframe title="video" className="embed-responsive-item" src={post.content} allowFullScreen></iframe>
                </div>
                <PostCountComment postType={post.type} numComment={post.commentsNum} />
            </div>
        </div>
    )
}
export default PostVideo