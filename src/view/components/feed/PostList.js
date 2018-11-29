import React, { Component } from 'react';
import PostItem from './PostItem';



class PostList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }

    render() {

        return (
            <>
                <PostItem />
            </>
        )
    }
}

export default PostList;