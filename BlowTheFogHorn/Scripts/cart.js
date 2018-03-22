$(function (){

    var cart = JSON.parse(sessionStorage.getItem("cart"));
    var count = 0;
        for (var i = 0; i < cart.length;i++){
            var beer = findBeer(cart[i]);
            var myTable = document.getElementById('tableid');
            myTable.rows[i+1].cells[1].innerHTML = beer[i].namn;
            myTable.rows[i+1].cells[3].innerHTML = beer[i].prisinklmoms
        }
});

function findBeer(beerName) {

    var info = [];
    var count = 1;

    for (var i = 0;i < DB2.spirits.length;i++){
        if (DB2.spirits[i].namn === beerName){
            info.push(DB2.spirits[i]);
            alert("This is being added to the list: " + count + " " + DB2.spirits[i].namn);
            count++;
        }

    }
    return info;
}

