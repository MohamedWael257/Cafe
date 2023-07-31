let menuDom = document.querySelector(".menu-content")
let fatora = document.querySelector(".fatora");
let fatoraDom = document.querySelector(".fatora div");
let fatoraPrice = document.querySelector(".fatora p");
// let delete_all = document.querySelector(".fatora .deleteall");
let menu = [
    {
        id: 0,
        ImageUrl: "img/menu-1.jpg",
        title: "Black Coffee",
        price: "5",
        p: "Sit lorem ipsum et diam elitr est dolor sed duo guberg sea et et lorem dolor"
    },
    {
        id: 1,
        ImageUrl: "img/menu-2.jpg",
        title: "Chocolate  Coffee",
        price: "15",
        p: "Sit lorem ipsum et diam elitr est dolor sed duo guberg sea et et lorem dolor"
    },
    {
        id: 2,
        ImageUrl: "img/menu-3.jpg",
        title: "Coffee With Milk",
        price: "7",
        p: "Sit lorem ipsum et diam elitr est dolor sed duo guberg sea et et lorem dolor"
    },
    {
        id: 3,
        ImageUrl: "img/menu-1.jpg",
        title: "Black Coffee",
        price: "6",
        p: "Sit lorem ipsum et diam elitr est dolor sed duo guberg sea et et lorem dolor"
    },
    {
        id: 4,
        ImageUrl: "img/menu-2.jpg",
        title: "Chocolate  Coffee",
        price: "10",
        p: "Sit lorem ipsum et diam elitr est dolor sed duo guberg sea et et lorem dolor"
    },
    {
        id: 5,
        ImageUrl: "img/menu-3.jpg",
        title: "Coffee With Milk",
        price: "20",
        p: "Sit lorem ipsum et diam elitr est dolor sed duo guberg sea et et lorem dolor"
    }
]
function drawMenuUI() {
    menu.map((item) => {
        menuDom.innerHTML += ` <div class="card">
        <img src="${item.ImageUrl}" alt="">
        <p class="price">${item.price} $</p>
        <div class="card-details">
            <h1>${item.title}</h1>
            <p>${item.p}</p>
            <button onclick="addToFatora(${item.id})">Add To Order</button>
        </div>
    </div>`;
    });
}
drawMenuUI();
let total = 0;
let arr = []
function addToFatora(a) {
    menu.filter((item) => {
        if (item.id === a) {
            fatoraDom.innerHTML += `<div>
            <span class="title">${item.title}</span>
            <span class="price">${item.price}</span>
            <ion-icon name="close-outline" onclick="removeFromFatora(${item.id})"></ion-icon>
            </div>`;
            total = total + (+item.price);
            arr.push(item)
        }
        fatoraPrice.innerHTML = `<p>Total: ${total}</p>`
    });
    console.log(arr);
}
function removeFromFatora(a) {
    const objWithIdIndex = arr.findIndex((obj) => obj.id === a)

    // console.log(item);
    arr.splice(objWithIdIndex, 1)
    console.log(arr);
    fatoraDom.innerHTML = ``
    total = 0
    arr.map((item) => {
        fatoraDom.innerHTML += `<div>
            <span class="title">${item.title}</span>
            <span class="price">${item.price}</span>
            <ion-icon name="close-outline" onclick="removeFromFatora(${item.id})"></ion-icon>
            </div>`;
        total = total + (+item.price);
    });
    fatoraPrice.innerHTML = `<p>Total: ${total}</p>`

}
// delete_all.addEventListener('click', function () {
//     fatoraDom.innerHTML = ""
//     fatoraPrice.innerHTML = `<p>Total:0 </p>`
// });