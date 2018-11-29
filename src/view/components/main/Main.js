import React from 'react';
import PostList from './../feed/PostList'
import { NewPostButton } from "./../feed/ButtonFeed/NewPostButton"

const Main = () => {
    return (
        <main className="container mt-5">
            <PostList />
            <NewPostButton />
        </main>
    )
}

export default Main