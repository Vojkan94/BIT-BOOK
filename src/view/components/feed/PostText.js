import React from 'react';
import PostCountComment from './PostCountComment';

const PostText = (props) => {

    return (
        <div className="card container pt-2 mt-2 mb-2 col-12 col-md-10 col-lg-8">
            <div className="card-body p-0 m-2">
                <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <PostCountComment />
            </div>
        </div>
    )
}

export default PostText