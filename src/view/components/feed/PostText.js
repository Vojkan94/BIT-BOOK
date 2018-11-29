import React from 'react';
import PostCountComment from './PostCountComment';

const PostText = ({ post }) => {

    return (
        <div className="card container pt-2 mt-2 mb-2 col-12 col-md-10 col-lg-8">
            <div className="card-body p-0 m-2"> <p>{post.content}
            </p>
                <PostCountComment postType={post.type} numComment={post.commentsNum} />
            </div>
        </div >
    )
}

export default PostText