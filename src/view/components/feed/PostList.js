import React, { Component } from 'react';
import PostItem from './PostItem';

import { postService } from '../../../services/postService';


class PostList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        postService.fetchPosts()
            .then((posts) => this.setState({ posts }))
    }

    render() {
        const postList = this.state.posts.map((post) => <PostItem key={post.id} post={post} />)
        return (
            <>
                {postList}
            </>
        )
    }
}

export default PostList;