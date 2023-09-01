"use strict";
// Singleton
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDatabase = void 0;
class UserDatabase {
    constructor() {
        this.users = [];
    }
    static getInstance() {
        if (!UserDatabase.instance)
            UserDatabase.instance = new UserDatabase();
        return UserDatabase.instance;
    }
    addUser(user) {
        this.users.push(user);
    }
    userList() {
        return this.users;
    }
}
exports.UserDatabase = UserDatabase;
UserDatabase.instance = null;
