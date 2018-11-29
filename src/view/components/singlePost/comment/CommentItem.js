import React from 'react';


const CommentItem = ({ comment }) => {
    return (
        <div className="mt-3 ml-auto mr-auto col-12 col-md-10 col-lg-8">
            <div className="card container mb-3 ">
                <div className="card-body">
                    <img className="float-left" src="https://via.placeholder.com/80" alt="" />
                    <p className="pl-3 pr-3 card-text float-left">{comment.body}</p>
                    <h5 className="clear">{comment.authorName}</h5>
                </div>
            </div>
        </div>
    )
}

export default CommentItem;

