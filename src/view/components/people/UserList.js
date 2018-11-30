import React, { Component } from 'react';
import UserItem from './UserItem';

import { userService } from '../../../services/userService';
import UserSearch from './UserSearch';


class UserList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            users: []
        }
    }

    componentDidMount() {
        userService.fetchUsers()
            .then((users) => {
                this.setState({
                    users
                })
            })
    }


    render() {
        const userList = this.state.users.map((user) => <UserItem key={user.id} user={user} />)
        return (
            <>

                <UserSearch />
                {userList}

            </>
        )
    }
}

export default UserList;