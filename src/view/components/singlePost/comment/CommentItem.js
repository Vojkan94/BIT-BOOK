import React from 'react';

import './css/Comment.css'


const CommentItem = ({ comment, users }) => {
    let userImg;
    for (let i = 0; i < users.length; i++) {
        const user = users[i];
        if (user.id === comment.authorId) {
            userImg = user.img
            break;
        }

    }
    return (
        <div className="comment-item">
            <div className="clearFix">
                <img src={userImg} alt="profile" />
                <h4>{comment.authorName}</h4>
                <p className="">{comment.body}</p>
            </div>
        </div>
    )
    // https://www.w3schools.com/w3css/img_avatar3.png"
}
export default CommentItem;
