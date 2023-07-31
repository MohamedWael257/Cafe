let input_box = document.querySelectorAll(".input-box")
let submit_btn = document.querySelector("#register_btn")
let username = document.getElementById("username")
let email = document.getElementById("email")
let password = document.getElementById("password")
let confpassword = document.getElementById("confpassword")


// let users = []
let id = 0;
let users;
if (localStorage.user != null) {
    users = JSON.parse(localStorage.user)
    id = users.length
}
else {
    users = [];
    id = 0
}
submit_btn.addEventListener("click", function (e) {
    let userUI = {
        id: id,
        username: username.value,
        email: email.value,
        password: password.value,
    }
    id += 1
    users.push(userUI)
    localStorage.setItem('user', JSON.stringify(users))
    console.log(users);


});
