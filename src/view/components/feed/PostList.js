import React, { Component } from 'react';
import PostItem from './PostItem';
import PostFilter from './PostFilter';
import ScreenLoading from '../ScreenLoading/ScreenLoading';
import { Link } from 'react-router-dom';
import { postService } from '../../../services/postService';
import { userService } from '../../../services/userService';
import { NewPostButton } from "./../feed/ButtonFeed/NewPostButton"


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

        const tenPosts = [];
        for (let i = 0; i <= 10; i++) {
            const postItem = postList[i];
            tenPosts.push(postItem)
        }
        return (
            <>
                <div className="row">
                    <div className="col-12 col-md-10 col-lg-8 offset-md-2">
                        {tenPosts}
                        <ul class="pagination">
                            <li class="page-item"><a class="page-link" href="#!">Previous</a></li>
                            <li class="page-item"><a class="page-link" href="#!">1</a></li>
                            <li class="page-item"><a class="page-link" href="#!">2</a></li>
                            <li class="page-item"><a class="page-link" href="#!">3</a></li>
                            <li class="page-item"><a class="page-link" href="#!">Next</a></li>
                        </ul>
                    </div>
                    <div className="col-2">
                        <PostFilter changeHandler={this.changeHandler} />
                    </div>
                </div>
                <NewPostButton loadPosts={this.loadPosts} />
            </>
        )
    }
}

export default PostList;