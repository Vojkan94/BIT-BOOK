import React, { Component } from 'react';
import { MyProfilePicAndName } from './MyProfilePicAndName';
import { MyProfileDesc } from './MyProfileDesc';
import { MyProfileCount } from './MyProfileCount';


class MyProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null
        }
    }

    componentDidMount() {

    }
    render() {
        return (
            <>
                <MyProfilePicAndName />
                <MyProfileDesc />
                <MyProfileCount />
            </>
        )
    }
}

export { MyProfile }