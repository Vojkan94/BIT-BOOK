import React from 'react';
import PostList from './../feed/PostList'
import { Route, Switch } from 'react-router-dom';
import SinglePost from '../singlePost/SinglePost';
import { NewPostButton } from "./../feed/ButtonFeed/NewPostButton"
import { MyProfile } from '../myProfile/MyProfilePage'
const Main = () => {
    return (
        <main className="container mt-5">
            <Switch>
                <Route path="/post/:type/:postId" component={SinglePost} />
                <Route path="/myprofile" component={MyProfile} />
                <Route path="/" component={PostList} />
            </Switch>
            <NewPostButton />
        </main>
    )
}



export default Main