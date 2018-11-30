import React, { Component } from 'react';
import UserItem from './UserItem';
import UserSearch from './UserSearch';

import { userService } from '../../../services/userService';


class UserList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            users: [],
            usersSearch: [],
        }
        this.onChangeSearch = this.onChangeSearch.bind(this)
    }

    componentDidMount() {
        userService.fetchUsers()
            .then((users) => {
                this.setState({
                    users,
                    usersSearch: users
                })
            })
    }
    onChangeSearch(inputValue) {
        const searchedUsers = this.state.users.filter(user =>
            user.name.includes(inputValue.toLowerCase())
        );
        this.setState({
            usersSearch: searchedUsers
        });
    };


    render() {
        const userList = this.state.usersSearch.length
            ? this.state.usersSearch.map((user) => <UserItem key={user.id} user={user} />)
            : this.state.users.map((user) => <UserItem key={user.id} user={user} />)

        return (
            <>
                <UserSearch onChangeSearch={this.onChangeSearch} />
                {userList}
            </>
        )
    }
}
export default UserList;