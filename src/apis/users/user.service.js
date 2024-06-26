// import fs from 'fs';

// const FileName = './data.json';
// class UserService {
//     getUsers() {
//         const data = fs.readFileSync(FileName, 'utf-8');
//         return JSON.parse(data);
//     }

//     setUsers(users){
//         fs.writeFileSync(FileName, JSON.stringify(users));
//     }
// }

import UserModel from "../model/user.model";

class UserService {
    constructor() {
        this.UserModel = new UserModel();
    }
    async getUsers() {
        try {
            const users = await this.UserModel.getAllUsers();
            return users;
        } catch(error) {
            throw error;
        }
    }

    async createUsers(user) {
        try {
            await this.UserModel.createUser(user);
            return true;
        }catch(error) {
            throw error;
        }
    }

    async updateUsers(userId, user) {
        try {
            await this.UserModel.updateUser(userId, user);
            return true;
        }catch(error) {
            throw error;
        }
    }

    async deleteUsers(userId) {
        try {
            await this.UserModel.deleteUser(userId);
            return true;
        }catch(error) {
            throw error;
        }
    }
}

export default new UserService();