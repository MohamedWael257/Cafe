let account = document.querySelector("header nav")
let logout_btn = document.querySelector(".logout");
let menupage = document.querySelector(".menu-page");
let signin = document.querySelector(" .Signin")
let username = localStorage.getItem('username');
if (username) {
    signin.style.display = "none"
    logout_btn.style.display = "inline-block"
    menupage.style.display = "inline-block"
    let user = document.createElement('a')
    user.innerText = `${username}`
    user.style.cssText = `cursor: pointer;
    // border:3px solid black;
    // padding:0 10px;`
    account.append(user)
}
else {
    signin.style.display = "inline-block"
    logout_btn.style.display = "none"
    menupage.style.display = "none"
}
logout_btn.addEventListener("click", function () {
    localStorage.removeItem("username");
    // location.reload()
    window.location.replace("../index.html");

});