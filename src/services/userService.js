import User from '../models/User';
import { apiService } from './apiService';

class UserService {

    fetchUsers() {
        return apiService.get('users')
            .then((userObj) => userObj.map((user) => {
                const { id, name, aboutShort, lastPostDate, avatarUrl } = user;

                return new User(id, name, aboutShort, lastPostDate, avatarUrl);
            }))
    };
}

export const userService = new UserService();