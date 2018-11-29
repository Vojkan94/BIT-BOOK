import React from 'react';
import PostCountComment from './PostCountComment';

const PostVideo = (props) => {
    return (
        <div className="card container pt-2 mt-2 mb-2 col-12 col-md-10 col-lg-8">
            <div className="card-body p-0 m-2">
                <div className="embed-responsive embed-responsive-16by9 mb-3">
                    <iframe title="video" className="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowfullscreen></iframe>
                </div>
                <PostCountComment />
            </div>
        </div>
    )
}

export default PostVideo