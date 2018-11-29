import React from 'react';
import PostList from './../feed/PostList'
import { Route, Switch } from 'react-router-dom';
import SinglePost from '../singlePost/SinglePost';
const Main = () => {
    return (
        <main className="container mt-5">
            <Switch>
                <Route path="/post/:postId" component={SinglePost} />
                <Route path="/" component={PostList} />
            </Switch>
        </main>
    )
}

export default Main