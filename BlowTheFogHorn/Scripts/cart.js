$.getScript("../Database/Dutchman Files/Beverages.js", function() {
});


function displayCart(){

    var cart = JSON.parse(sessionStorage.getItem("cart"));
    var beer;

    for (var i = 0; i < cart.length;i++){
        beer = findBeer(cart[i]);

    }
}

function findBeer(beerName) {
    var info = [];

    for (var i = 0;i < DB2.spirits.length;i++){
        if (DB2.spirits[i].namn === beerName){
            alert("träff");
            info.push(DB2.spirits[i]);
        }

    }
    return info;
}



