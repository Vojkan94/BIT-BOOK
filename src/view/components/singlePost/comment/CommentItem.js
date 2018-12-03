import React from 'react';


const CommentItem = ({ comment }) => {
    return (

        <div className="container py-3">
            <div className="card">
                <div className="row ">
                    <div className="col-md-3 text-center p-2">
                        <img className="rounded-circle" src="http://cdn.onlinewebfonts.com/svg/img_191958.png" alt="profile" width="80" />
                        <h6 className="card-title">{comment.authorName}</h6>
                    </div>
                    <div className="col-md-9 px-3 p-2">
                        <div className="card-block px-3">
                            <p className="card-text">{comment.body}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CommentItem;
