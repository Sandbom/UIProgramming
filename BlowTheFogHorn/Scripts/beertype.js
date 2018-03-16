/*
Print Beer information into the two divs
*/

/* Kind of ugly solution but it did not work having if else statements based on the id's of the links clicked so
this will have to */
/* These functions are triggered when clicking any of the four categories in searchbeer.html */
function lagerclicked(){
        var lightlager = "\u00c3\u2013l, Ljus lager"
        localStorage.setItem("beertype", lightlager);
        window.location.href="beertype.html"
}

function psclicked(){
        var pands = "\u00c3\u2013l, Porter och Stout"
        localStorage.setItem("beertype", pands);
        window.location.href="beertype.html"
}

function aleclicked(){
        var ale = "\u00c3\u2013l, Ale"
        localStorage.setItem("beertype", ale);
        window.location.href="beertype.html"
}

function dlclicked(){
        var darklager = "\u00c3\u2013l, M\u00c3\u00b6rk lager"
        localStorage.setItem("beertype", darklager);
        window.location.href="beertype.html"
}

$(function displayToDivs(){
    /*
    beer is an array of beers with the length == const MAX
     */
    var beer = findBeer(localStorage.getItem("beertype"));
    var iterator = 1;
    for(var i = 0; i<beer.length;i++){
        /*
        A solution to print ',' after the first and second variable
         (not the third)
         */
        //var abeer = beer[i].split(", ");
        // var abeer2 = beer[i].split("/n");
        // console.log(beer[i].prisinklmoms);
        var toAppend = beer[i].namn+":         "+beer[i].prisinklmoms+" SEK \n";
        console.log(beer[i]);
        // console.log(toAppend);
        $("#item" + iterator).append(beer[i]).append(toAppend);
        iterator++;
    }
    var slr = localStorage.getItem("beertype").slice(4,30);
    $("#beertypeheader").append(slr);
});

var clickedType = 0;
var beercat = "";

/*
Input: a spirit name
Output: An array of beers of the specific "varugrupp" and length == const MAX
*/
function findBeer(spiritName) {
    var info = [];

    /*
    Constant = 30 because of we want to display 10 beers of each category
    since we extract 3 variables from each beer the total is 10*3 = 30
    */
    const MAX = 75;
    /* Maximum amount of beers of each type*/

    for (var i = 0; i < DB2.spirits.length; i++) {
        if (DB2.spirits[i].varugrupp === spiritName && info.length < MAX) {
            info.push(DB2.spirits[i]);
        }
    }
    return info;
}

/*
On click, stores the beer name i a session storage
and redirects to the customerBeerInfo.html
 */
$(document).ready(function () {
    $(".beeritems").click(function (event) {
        // var infoItem1 = $(".beeritems").get($(this.id));
        //alert(event.target.id);
        var info = $("#" + event.target.id).text();
        //alert(info);
        var arrayItem1 = info.split(":");
        /*
        Extract the name of the drink
         */
        var name1 = arrayItem1[0];
        /*
        Removes the space before the name to get the beerName
         */
        var beerName1 = name1.substring(1);
        //alert(name1);
        /*
        Stores the beerName in the local storage.
        To give customerBeerInfo access to the specific beer
         */
        localStorage.setItem("beerName", beerName1);
        window.location.href = "customerBeerInfo.html";
    });
});


