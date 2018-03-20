$.getScript("../Database/Dutchman Files/beverages.js", function() {
    //alert("Just a test.");
});


function displayCart(){

    var cart = JSON.parse(sessionStorage.getItem("cart"));
    var beer;
    alert("inne i displayCart");

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



