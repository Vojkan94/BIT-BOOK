import React, { Component } from 'react';
import PostItem from '../feed/PostItem';
import CommentList from './comment/CommentList';
import { postService } from '../../../services/postService'
import { userService } from '../../../services/userService'

class SinglePost extends Component {
    constructor(props) {
        super(props)

        this.state = {
            post: null,
            user: null
        }
    }

    componentDidMount() {
        const type = this.props.match.params.type;
        const postID = this.props.match.params.postId;
        postService.fetchSinglePost(type, postID)
            .then((post) => {
                this.setState({ post })
            })

        userService.fetchMyProfile()
            .then(((user) => {
                this.setState({ user })
            }))
    }

    render() {
        if (!this.state.post) { return null }
        if (!this.state.user) { return null }
        return (
            <>
                <PostItem post={this.state.post} user={this.state.user} />
                <CommentList postId={this.props.match.params.postId} />
            </>
        )
    }
}

export default SinglePost