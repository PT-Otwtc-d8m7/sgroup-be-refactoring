import UserModel from "../../model/user.model";

class AuthService {
    constructor() {
        this.UserModel = new UserModel();
    }

    async login(username) {
        try {
            const user = await this.UserModel.getUserByEmail(username);
            console.log("🚀 ~ file: auth.service.js:11 ~ AuthService ~ login ~ user:", user)
            return user;
        }catch(error) {
            throw error;
        }
    }

    async register(username) {
        try {
            const user = await this.UserModel.getUserByEmail(username);
            console.log("🚀 ~ file: auth.service.js:11 ~ AuthService ~ login ~ user:", user)
            return user;
        }catch(error) {
            throw error;
        }
    }
}

export default new AuthService();