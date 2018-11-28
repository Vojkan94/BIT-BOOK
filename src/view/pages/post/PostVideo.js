import React from 'react';

const PostVideo = (props) => {
    return (
        <div className="card container mt-5 mb-5">
            <div className="card-body m-3">
                <div className="embed-responsive embed-responsive-16by9 mb-3">
                    <iframe title="video" className="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowfullscreen></iframe>
                </div>
                <p className="card-text float-left">Video Post</p>
                <p className="card-text float-right">15 comments</p>
            </div>
        </div>
    )
}

export default PostVideo