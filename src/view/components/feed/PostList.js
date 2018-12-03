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
            user: null,
            selectValue: "all"
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

        const postList = this.state.posts.filter((post) => {
            if (this.state.selectValue === 'all') {
                return true
            }
            return post.type === this.state.selectValue;
        }).map((post) => <PostItem key={post.id} post={post} user={this.state.user} />)
        return (
            <>
                <div className="row">
                    <div className="col-12 col-md-10 col-lg-8 offset-md-2">
                        {postList}
                    </div>
                    <div className="col-2">
                        <PostFilter changeHandler={this.changeHandler} />
                    </div>
                </div>
            </>
        )
    }
}

export default PostList;