import React, { Component } from 'react';

import { postService } from '../../../services/postService';
import { userService } from '../../../services/userService';

import PostItem from './PostItem';
import PostFilter from './PostFilter';
import ScreenLoading from '../screenLoading/ScreenLoading';
import NewPostButton from './../feed/ButtonFeed/NewPostButton';



class PostList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: [],
            userId: null,
            selectValue: "all"
        }
        this.loadPosts = this.loadPosts.bind(this)
    }

    componentDidMount() {
        this.loadPosts();

        userService.fetchMyProfile()
            .then(((user) => {
                localStorage.setItem("userId", user.id)
                this.setState({
                    userId: user.id
                })
            }))
    }
    loadPosts() {
        postService.fetchPosts()
            .then((posts) => this.setState({ posts }));
    }
    changeHandler = (event) => {
        this.setState({
            selectValue: event.target.value
        })
    }
    render() {
        let postList;
        if (!this.state.posts.length) {
            postList = <ScreenLoading />
        }
        else {
            postList = this.state.posts.filter((post) => {
                if (this.state.selectValue === 'all') {
                    return true
                }
                return post.type === this.state.selectValue;
            }).map((post) => <PostItem key={post.id} post={post} userId={this.state.userId} loadPosts={this.loadPosts} />)
        }
        return (
            <>
                <div className="row">
                    <div className="offset-6 col-6 offset-md-8 col-md-4 offset-lg-10 col-lg-2">
                        <PostFilter changeHandler={this.changeHandler} />
                    </div>
                    <div className="col-12 offset-md-1 col-md-10 offset-md-2 col-lg-8 ">
                        {postList}
                    </div>
                </div>
                <NewPostButton loadPosts={this.loadPosts} />
            </>
        )
    }
}
export default PostList;
