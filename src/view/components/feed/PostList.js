import React, { Component } from 'react';
import PostItem from './PostItem';

import { postService } from '../../../services/postService';
import { userService } from '../../../services/userService';


class PostList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: [],
            user: {}
        }
    }

    componentDidMount() {
        postService.fetchPosts()
            .then((posts) => this.setState({ posts }));

        userService.fetchMyProfile()
            .then(((user) => {
                this.setState({ user })
            }))
    }



    render() {

        const postList = this.state.posts.map((post) => <PostItem key={post.id} post={post} user={this.state.user} />)
        return (
            <>
                {postList}
            </>
        )
    }
}

export default PostList;