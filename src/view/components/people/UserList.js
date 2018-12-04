import React, { Component } from 'react';
import UserItem from './UserItem';
import { Link } from 'react-router-dom'
import UserSearch from './UserSearch';
import { userService } from '../../../services/userService';

import './css/people.css'


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
            user.name.toLowerCase().includes(inputValue.toLowerCase())
        );
        this.setState({
            usersSearch: searchedUsers
        });
    };


    render() {
        const userList = this.state.usersSearch.length
            ? this.state.usersSearch.map((user) => <Link to={`profile/${user.id}`}><UserItem key={user.id} user={user} /></Link>)
            : this.state.users.map((user) => <Link to={`profile/${user.id}`}><UserItem key={user.id} user={user} /></Link>)

        return (
            <>
                <UserSearch onChangeSearch={this.onChangeSearch} />
                <div className='user-list'>
                    {userList}
                </div>
            </>
        )
    }
}
export default UserList;