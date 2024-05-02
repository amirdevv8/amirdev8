var AllItems = [

    {
        id: 1,
        name: " Phone",
        price: 3000000
    },
    {
        id: 2,
        name: "glass",
        price: 25000
    },
    {
        id: 3,
        name: "keyboard",
        price: 800000
    },
    {
        id: 4,
        name: " mus",
        price: 400000
    }
];

var usersItem = [{
        id: 1,
        name: "Airpad",
        price: 12000000
    },
    {
        id: 2,
        name: "sun",
        price: 50000
    },
    {
        id: 3,
        name: "sum",
        price: 14000
    },
];

var userRequest = prompt("1. add product \n 2. remove product");

if (userRequest === "1") {
    // alert("add")
    var userProductNew = prompt("Enter your product");

    var productDate
    var IsInShop = AllItems.some(function (product) {
        if (product.name === userProductNew) {
            productDate = product
            return true
        }

    });
    if (IsInShop === true) {
        var NewProduct = {
            id: 4,
            name: productDate.name,
            price: productDate.price
        };
        usersItem.push(NewProduct);
        console.log("your product", usersItem);

    } else {
        alert("not product")
    }


} else if (userRequest === "2") {
    //  alert("remove")

    var userProductNew = prompt("Enter your remove product");

    var productIndex = usersItem.findIndex(function (product) {
        return product.name === userProductNew;
    });

    usersItem.splice(productIndex, 1)

    console.log("your items  : ", usersItem)

} else {
    alert("لطفا گذینه صحیح را انتخاب نمایید")
}