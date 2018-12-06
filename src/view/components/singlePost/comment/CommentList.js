import React, { Component } from 'react';

import { postService } from '../../../../services/postService';
import { userService } from '../../../../services/userService';

import CommentItem from './CommentItem';
import CommentInput from './CommentInput';

class CommentList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            comments: [],
            users: [],
            commentUsers: [],
            isFirstComment: true
        }
        this.loadComments = this.loadComments.bind(this);
        this.loadUsers = this.loadUsers.bind(this);
        this.getComments = this.getComments.bind(this);
    }

    loadComments() {
        return postService.fetchComments(this.props.postId)
            .then((comments) => {
                this.setState({
                    comments
                })
            })
    }
    loadUsers() {
        return userService.fetchUsers()
            .then((users) => {
                this.setState({
                    users
                })
            })
    }
    getComments() {
        const userComments = this.state.users.filter((user) => {
            const comments = this.state.comments;
            let valid;
            for (let i = 0; i < comments.length; i++) {
                const comment = comments[i];
                valid = comment.authorId === user.id
                if (valid) { break }
            }
            return valid
        })
        this.setState({
            commentUsers: userComments
        })
    }
    displayComments() {
        const commentPromise = this.loadComments();
        const userPromise = this.loadUsers();
        Promise.all([commentPromise, userPromise])
            .then(() => {
                this.getComments();
            })
    }

    componentDidMount() {
        this.displayComments();
    }

    componentDidUpdate() {
        if (this.state.comments.length > 0 && this.state.isFirstComment) {
            this.displayComments();
            this.setState({
                isFirstComment: false
            })
        }
    }

    render() {
        if (!this.state.comments.length) {
            return (
                <>
                    <CommentInput postId={this.props.postId} loadComments={this.loadComments} />
                    <p className="mt-3 ml-auto mr-auto"> There are no comments...</p>
                </>
            )
        }
        const commentItem = this.state.comments.map((comment) => {
            return <CommentItem key={comment.id} comment={comment} users={this.state.commentUsers} />
        })
        return (
            <>
                <CommentInput postId={this.props.postId} loadComments={this.loadComments} />
                {commentItem}
            </>
        )
    }
}
export default CommentList;
