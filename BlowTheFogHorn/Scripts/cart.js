var info = [];
$(document).ready((function (){

    var cart = JSON.parse(sessionStorage.getItem("cart"));
    var count = 0;
    var myTable = document.getElementById('tableid');
    var beers = [] ;
        for (var i = 0; i < cart.length;i++){
           // alert(cart[i]);
            var beer = findBeer(cart[i]);
            beers[i] = beer;
            alert("To show: "+beer);

        }
   // alert(beers[0]);
   // alert(beers);
}));

//myTable.rows[i+1].cells[1].innerHTML = beer[i].namn;
//myTable.rows[i+1].cells[3].innerHTML = beer[i].prisinklmoms
function findBeer(beerName) {


    var count = 1;
    alert("Result: "+DB2.spirits.length);
    alert("Name: "+beerName);

    for (var i = 0;i < DB2.spirits.length;i++){
        console.log(DB2.spirits[i].namn);
        if  (DB2.spirits[i].namn ===beerName.trim()){

            alert("Result: "+DB2.spirits[i]);
            return(DB2.spirits[i].namn);
           // alert("This is being added to the list: " + count + " " + DB2.spirits[i].namn);

        }
        return "not found";

    }

}

