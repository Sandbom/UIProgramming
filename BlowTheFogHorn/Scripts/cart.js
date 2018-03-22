$(document).ready((function (){

    var cart = JSON.parse(sessionStorage.getItem("cart"));
    var count = 0;
    var myTable = document.getElementById('tableid');
    var beers = [] ;
        for (var i = 0; i < cart.length; i++){
           // alert(cart[i]);
            var beer = findBeer(cart[i]);
          // alert(cart[i]);
            beers[i] = beer;
            //alert(beer[i]);
           // alert("To show: "+ beer[i].namn);
           //myTable.rows[i+1].cells[1].innerHTML = beer[i].namn;
           //myTable.rows[i+1].cells[3].innerHTML = beer[i].prisinklmoms

        }
   // alert(beers[0]);
   // alert(beers);
}));


function findBeer(beerName) {
    var info = [];
    for (var i = 0; i < DB2.spirits.length; i++){
        if(DB2.spirits[i].namn === beerName){
            info.push(DB2.spirits[i].namn);
            alert(info);
            break;
        }

    }
    return info;

}

