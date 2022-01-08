"use strict";

const id = document.querySelector("#id"),
    psword = document.querySelector("#psword"),
    loginBtn = document.querySelector("button");

loginBtn.addEventListener("click", login);

function login() {
    const req = {
    id: id.value,
    psword: psword.value,
    }
    console.log(req, JSON.stringify(req));

    // 어떤 경로로 전달할 것인지, json형태로 바꿔주려면 stringyfy
    fetch("/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json" // 요정하는 데이터가 json형태임을 알려줌
        },
        body: JSON.stringify(req)
    })
        .then((res) => res.json())
        .then((res)=>{
            if (res.success) {
                location.href = "/";
            } else {
                alert(res.msg)
            }
        })
        .catch((err) => {
            console.error(new Error("로그인 중 에러 발생"))
        })
}