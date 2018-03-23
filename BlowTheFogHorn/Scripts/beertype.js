/*
Print Beer information into the list
*/

/* Kind of ugly solution but it did not work having if else statements based on the id's of the links clicked so
this will have to */
/* These functions are triggered when clicking any of the four categories in searchbeer.html */

/*
        Loads the master.html into the page
 */
$(function(){
    $("#masterContent").load("master.html",null,function(){
    });
});


// Global user variable
var user = "Johan";
//Cart Counter Variable
var counter=0;

// Implement Drag
function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

// implement Drop
// This function first copies the item that is being
// dragged and then adds it to the element it is dragged to
// The copied string is also manipulated to remove the first part before the ":" to get the price of the product to be able to alter the total sum variable.
function drop(ev) {
    // This part is for the drag n' drop and how the element is copied to the new location
    // without removing it from the location it was dragged from
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    var nodeCopy = document.getElementById(data).cloneNode(true);
    var nodeCopy1 = nodeCopy.cloneNode(true);
    nodeCopy.draggable ="false";
    nodeCopy.id = Math.random();
    var info1 = $("#"+data).text();

    ev.target.appendChild(nodeCopy);

    // This part is for the total sum variable and its manipulation
    var elementdragged = $("#" +data).text();

    var priceofelement = elementdragged.split(":")[1];
    var removesek = priceofelement.substring(0, priceofelement.length - 6);
    var desiredint = removesek.substring(1);

    var finalint = parseFloat(desiredint);
    totalsum = totalsum + finalint;
    totalsum = Number((totalsum).toFixed(2));
    $("#totalid").text("\t\u03A3 = " + totalsum + " kr.");
    var calc = totalsum - finalint;
    var before = Number((calc).toFixed(2));

    // Adds the different variables to the stacks to keep track of what has been added
    addtostack(nodeCopy);
    addsum(before);
    addredosum(finalint);
}

function allowDrop(ev) {
    ev.preventDefault();
}

function saveCart(){
    /*
    Read the text from the cart div and convert it to a string
    */
    var textFromDiv = $("#cartview").text();
    textFromDiv = JSON.stringify(textFromDiv);

    /*
    Manipulates the string, removes white spaces and '\n'
    Split it to an array.
    */
    textFromDiv = textFromDiv.replace(/\s+/, '');
    textFromDiv = textFromDiv.replace(/\\n/g, ":");
    var textArray = textFromDiv.split(":");
    var finalArray = textFromDiv.split("SEK ,");
    /*
    Removes the first and last element in the array
    The first and last element was \n because that was how
    the beer was saved in the db.
    */
    textArray.shift();
    textArray.pop();

    var saveToStorage = [];
    /*
    Pushes every second element to the array saveToStorage
     */
    for(var i = 0; i < textArray.length; i +=2){
        console.log(textArray[i]);
        saveToStorage.push(textArray[i].trim());
    }

    sessionStorage.setItem("totalsum", totalsum);
    sessionStorage.setItem("cart", JSON.stringify(saveToStorage));


}


function lagerclicked(){
        var lightlager = "\u00c3\u2013l, Ljus lager";
        localStorage.setItem("beertype", lightlager);
        window.location.href="beertype.html"
}

function psclicked(){
        var pands = "\u00c3\u2013l, Porter och Stout";
        localStorage.setItem("beertype", pands);
        window.location.href="beertype.html"
}

function aleclicked(){
        var ale = "\u00c3\u2013l, Ale";
        localStorage.setItem("beertype", ale);
        window.location.href="beertype.html"
}

function dlclicked(){
        var darklager = "\u00c3\u2013l, M\u00c3\u00b6rk lager";
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
        var toAppend = beer[i].namn+":         "+beer[i].prisinklmoms+" SEK \n";
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
    Constant = 75 because of we want to display 25 beers of each category
    since we extract 3 variables from each beer the total is 25*3 = 75
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


