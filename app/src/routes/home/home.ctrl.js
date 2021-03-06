'use strict';

const User = require("../../models/User");
const UserStorage = require("../../models/UserStorage");

const output = {
    home: (req, res) => {
        res.render("home/index");
    },
    login: (req, res) => {
        res.render("home/login");
    },
};

// const home = (req, res) => {
//     res.render("home/index");
// };

// const login = (req, res) => {
//     res.render("home/login");
// };



const process= {
    login: (req, res) => {
        const user = new User(req.body);
        const response = user.login();
        return res.json(response);
        // // console.log(req.body);
        // // 인증하는 과정
        // const id = req.body.id,
        //     psword = req.body.psword;

        // // console.log(id, psword);

        // // const userStorage = new UserStorage();
        // const users = UserStorage.getUsers("id", "psword");

        // const response = {};
        // if (users.id.includes(id)) {
        //     const idx = users.id.indexOf(id);
        //     if (users.psword[idx] === psword) {
        //         response.success = true;
        //         return res.json(response)
        //     }
        // } 

        // response.success = false;
        // response.msg = "로그인에 실패하셨습니다." ;
        // return res.json(response)
    },
};

module.exports = {
    output,
    process
};