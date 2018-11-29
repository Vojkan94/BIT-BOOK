import React, { Component } from 'react';
import PostItem from '../feed/PostItem';
import CommentList from './comment/CommentList';
import { postService } from '../../../services/postService'

class SinglePost extends Component {
    constructor(props) {
        super(props)

        this.state = {
            post: null
        }
    }

    componentDidMount() {
        const type = this.props.match.params.type;
        const postID = this.props.match.params.postId;
        postService.fetchSinglePost(type, postID)
            .then((post) => {
                this.setState({ post })
            })
    }

    render() {
        if (!this.state.post) { return null }
        console.log(this.props.match.params);
        return (
            <>
                <PostItem post={this.state.post} />
                <CommentList postId={this.props.match.params.postId} />
            </>
        )
    }
}

export default SinglePost