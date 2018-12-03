import React, { Component } from 'react';
import PostItem from './PostItem';
import PostFilter from './PostFilter';

import { postService } from '../../../services/postService';
import { userService } from '../../../services/userService';


class PostList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: [],
            user: {},
            selectValue: "posts"
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

    changeHandler = (event) => {
        this.setState({
            selectValue: event.target.value

        })
        console.log(this.state.selectValue);
    }

    render() {
        console.log(this.state.posts);

        const postList = this.state.posts.map((post) => <PostItem key={post.id} post={post} user={this.state.user} selectValue={this.state.selectValue} />)
        return (
            <>
                <PostFilter changeHandler={this.changeHandler} />
                {postList}
            </>
        )
    }
}

export default PostList;