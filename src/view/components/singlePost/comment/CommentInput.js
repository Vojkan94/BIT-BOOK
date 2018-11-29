import React from 'react';


const CommentInput = (props) => {

    return (
        <div className="m-auto row col-12 col-md-10 col-lg-8">
            <input type="text" className="form-control col-10" placeholder="Add your comment" />
            <button type="button" className="btn btn-primary col-2 ">Send</button>
        </div>
    )
}

export default CommentInput;