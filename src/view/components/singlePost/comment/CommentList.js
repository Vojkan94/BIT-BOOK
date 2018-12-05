import React, { Component } from 'react';
import CommentItem from './CommentItem';
import CommentInput from './CommentInput';
import { postService } from '../../../../services/postService';
import { userService } from '../../../../services/userService';
import { resolve } from 'path';

class CommentList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            comments: [],
            users: [],
            commentUsers: [],

        }

    }
    loadComments = () => {

        return postService.fetchComments(this.props.postId)
            .then((comments) => {
                this.setState({
                    comments
                })
            })
    }




    loadUsers = () => {
        return userService.fetchUsers()
            .then((users) => {
                this.setState({
                    users
                })
            })
    }



    getComments = () => {
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
    componentDidMount() {
        const commentPromise = this.loadComments();
        const userPromise = this.loadUsers();

        Promise.all([commentPromise, userPromise])
            .then((values) => {
                this.getComments();
            })

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