import React, { Component } from 'react';
import CommentItem from './CommentItem';
import CommentInput from './CommentInput';
import { postService } from '../../../../services/postService';

class CommentList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            comments: []
        }
    }
    componentDidMount() {
        postService.fetchComments(this.props.postId)
            .then((comments) => {
                this.setState({
                    comments
                })
            })
    }

    componentWillUpdate() {

    }

    render() {
        console.log(this.props.postId)

        if (!this.state.comments.length) {
            return (
                <>
                    <CommentInput postId={this.props.postId} />
                    <p className="mt-3 ml-auto mr-auto col-12 col-md-10 col-lg-8"> There are no comments...</p>
                </>
            )
        }
        const commentItem = this.state.comments.map((comment) => {
            return <CommentItem key={comment.id} comment={comment} />
        })
        return (
            <>
                <CommentInput postId={this.props.postId} />
                {commentItem}
            </>
        )
    }
}
export default CommentList;