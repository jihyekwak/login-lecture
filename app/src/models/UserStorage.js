"use strict";

class UserStorage {
    static #users = { // public 에서 private로 
        id : ["woorimIT", "나개발", "김팀장"],
        psword: ["1234", "1234", "123456"],
        name: [],
    };

    static getUsers(...fields) {
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {})
        return newUsers;
    };
}

module.exports = UserStorage;