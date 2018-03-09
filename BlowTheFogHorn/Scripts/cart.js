$.getScript("../Database/Dutchman Files/beverages.js", function() {
    alert("Script loaded but not necessarily executed.");
});

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
    var beer;
    console.log("Display cart ");
    console.log(cart);

    for (var i = 0; i < cart.length;i++){
        beer = findBeer(cart[i]);
        alert(beer);
    }

}

function findBeer(beerName) {
    var info = [];

    for (var i = 0;DB2.spirits.length;i++){
        if (DB2.spirits[i].namn ===beerName){
            info.push(DB2.spirits[i]);
        }

    }
    return info;
}



