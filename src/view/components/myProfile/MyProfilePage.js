import React, { Component } from 'react';
import { MyProfilePicAndName } from './MyProfilePicAndName';
import { MyProfileDesc } from './MyProfileDesc';
import { MyProfileCount } from './MyProfileCount';
import { userService } from '../../../services/userService';
import { Modal } from './Modal';

class MyProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null,
            open: false
        }
    }

    componentDidMount() {

        userService.fetchMyProfile()
            .then(((user) => {
                this.setState({ user })
            }))

    }
    openModal = () => {
        this.setState({
            open: true
        })
    }
    closeModal = () => {
        this.setState({
            open: false
        })
    }

    render() {
        if (!this.state.user) { return null }
        const { user } = this.state;
        return (
            <>
                <Modal open={this.state.open} closeModal={this.closeModal}></Modal>
                <MyProfilePicAndName name={user.name} img={user.img} openModal={this.openModal} />
                <MyProfileDesc about={user.about} aboutShort={user.aboutShort} />
                <MyProfileCount commentsCount={user.commentsCount} postsCount={user.postsCount} />

            </>
        )
    }
}

export { MyProfile }