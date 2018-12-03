import React, { Component } from 'react';

class PostFilter extends Component {
    constructor(props) {
        super(props);

        this.state = {
        }
    }

    componentDidMount() {
    }



    render() {
        return (
            <>
                <select onChange={this.props.changeHandler} className="form-control mt-2">
                    <option value="all">All posts</option>
                    <option value="text">Text posts</option>
                    <option value="image">Image posts</option>
                    <option value="video">Video posts</option>
                </select>
            </>

        )
    }
}

export default PostFilter;