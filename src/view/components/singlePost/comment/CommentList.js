import React, { Component } from 'react';
import CommentItem from './CommentItem';
import CommentInput from './CommentInput';

class CommentList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            comments: []
        }
    }


    render() {
        return (
            <>
                <CommentInput />
                <CommentItem />
            </>
        )
    }
}
export default CommentList;