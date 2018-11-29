import React, { Component } from 'react';
import PostItem from '../feed/PostItem';
import CommentList from './comment/CommentList';

class SinglePost extends Component {
    constructor(props) {
        super(props)

        this.state = {
            post: null
        }
    }

    componentDidMount() {


    }

    render() {
        return (
            <>
                {/* <PostItem  /> */}
                <CommentList postId={this.props.match.params.postId} />
            </>
        )
    }
}

export default SinglePost