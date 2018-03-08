/*
        We need to create cart once a user logs into the system.
         */
function createCart() {
    var cart = [];
    alert("Cart created");
    localStorage.setItem("cart",JSON.stringify(cart));
}

function displayCart(){
    var cart = JSON.parse(localStorage.getItem("cart"));

    console.log("Display cart ");
    console.log(cart);

    for (var i = 0;i < cart.length;i++){


    }
}



