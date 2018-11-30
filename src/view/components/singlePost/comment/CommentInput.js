import React, { Component } from 'react';
import { postService } from '../../../../services/postService';

class CommentInput extends Component {
    constructor(props) {
        super(props)
        this.state = {
            changeInput: "",
            isDisabled: true,
        }
        this.handlerChange = this.handlerChange.bind(this)
        this.postComment = this.postComment.bind(this)
    }
    handlerChange(event) {
        const disabled = event.target.value ? false : true;
        this.setState({
            changeInput: event.target.value,
            isDisabled: disabled
        })
    }
    postComment() {
        const inputData = {
            "id": 0,
            "dateCreated": new Date(),
            "body": this.state.changeInput,
            "postId": this.props.postId,
            "authorName": "string",
            "authorId": 0
        }
        postService.postComment("comments", inputData)
        this.setState({
            changeInput: ''
        })
    }


    render() {
        return (
            <div className="m-auto row col-12 col-md-10 col-lg-8">
                <input type="text" onChange={this.handlerChange} value={this.state.changeInput} className="form-control col-10" placeholder="Add your comment" />
                <button type="button" onClick={this.postComment} className="btn btn-primary col-2 " disabled={this.state.isDisabled}>Send</button>
            </div>
        )
    }

}

export default CommentInput;