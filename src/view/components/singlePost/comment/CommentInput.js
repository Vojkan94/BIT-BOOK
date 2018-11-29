import React from 'react';


const CommentInput = (props) => {

    return (
        <div className="form-group row">
            <input type="text" className="form-control col-11" placeholder="Add your comment" />
            <button type="button" className="btn btn-primary col-1 ">Send</button>
        </div>
    )
}

export default CommentInput;