let username = document.getElementById("username")
let allusers = localStorage.getItem('user');
let users = JSON.parse(allusers);
let login_btn = document.querySelector("#login_btn")
login_btn.addEventListener("click", function (e) {
    // e.preventDefault()
    users.filter((ele) => {
        if (ele.username === username.value) {
            localStorage.setItem("username", ele.username);
        }

    })
});