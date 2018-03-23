// Functions of the master page
$( document ).ready(function() {
    var language;
    language = localStorage.getItem("language");   // Retrieves the language stored in localstorage
    //Default language is english
    if(localStorage.getItem("language") === null) {
        console.log("ready!");
        $(window).on("load", translateCustomerBeerInfoTo(english));
        $(window).on("load", translateCustomerPageTo(english));
        $(window).on("load", translateShoppingBasketTo(english));
        $(window).on("load", translateStaffSettingsTo(english));
        $(window).on("load", translateStaffBasketTo(english));
        $(window).on("load", translatePlaceNewOrderTo(english));
        $(window).on("load", translateCompleteOrderTo(english));
        $(window).on("load", translateMasterPageTo(english));
        $(window).on("load", translateWelcomeTo(english));
        $(window).on("load", translateOrderConfirmationTo(english));
           // Checks if somebody is logge in session and return the corresponding interface
        if(sessionStorage.getItem("login") === "true") {
            $("#logout").show();
            $("#cart").show();
            $("#vipBtn").hide();
            $("#settingsIcon").show();
            $("#vipLabel").show();
            $("#login").show();
        }
    }

    // Else Retrieve the current language from localstorage
    else{

        language = eval("(" + language + ')');
        $(window).on("load", translateCustomerBeerInfoTo(language));
        $(window).on("load", translateCustomerPageTo(language));
        $(window).on("load", translateShoppingBasketTo(language));
        $(window).on("load", translateStaffSettingsTo(language));
        $(window).on("load", translateStaffBasketTo(language));
        $(window).on("load", translatePlaceNewOrderTo(language));
        $(window).on("load", translateCompleteOrderTo(language));
        $(window).on("load", translateWelcomeTo(language));
        $(window).on("load", translateOrderConfirmationTo(language));

        if(sessionStorage.getItem("login") === "true") {
            $("#logout").show();
            $("#cart").show();
            $("#vipBtn").hide();
            $("#settingsIcon").show();
            $("#vipLabel").show();
            $("#login").show();
        }

    }
});
// Function when home button called
$(function() {
    $("#home").on("click", function(){
        window.location.href = "../Views/welcome.html"

    });
});
// function to login
$(function() {
    $("#login").on("click", function(){
        window.location.href = "../Views/customerPage.html"

    });
});
// translate into swedish
$(function() {
    $("#swedishFlag").on("click", function(){
        localStorage.setItem("language", "swedish");
        translateCustomerBeerInfoTo(swedish);
        translateCustomerPageTo(swedish);
        translateShoppingBasketTo(swedish);
        translateStaffSettingsTo(swedish);
        translateStaffBasketTo(swedish);
        translatePlaceNewOrderTo(swedish);
        translateCompleteOrderTo(swedish);
        translateWelcomeTo(swedish);
        translateOrderConfirmationTo(swedish);
    });
});
// translate into english
$(function() {
    $("#ukFlag").on("click", function(){
        localStorage.setItem("language", "english");
        translateCustomerBeerInfoTo(english);
        translateCustomerPageTo(english);
        translateShoppingBasketTo(english);
        translateStaffSettingsTo(english);
        translateStaffBasketTo(english);
        translatePlaceNewOrderTo(english);
        translateCompleteOrderTo(english);
        translateMasterPageTo(english);
        translateWelcomeTo(english);
        translateOrderConfirmationTo(english);

    });
});
//Translate into greek
$(function() {
    $("#greekFlag").on("click", function(){
        // Store
        localStorage.setItem("language", "greek");
        translateCustomerBeerInfoTo(greek);
        translateCustomerPageTo(greek);
        translatePlaceNewOrderTo(greek);
        translateShoppingBasketTo(greek);
        translateStaffSettingsTo(greek);
        translateStaffBasketTo(greek);
        translateCompleteOrderTo(greek);
        translateMasterPageTo(greek);
        translateWelcomeTo(greek);
        translateOrderConfirmationTo(greek);

    });
});
//Translate into german
$(function() {
    $("#germanFlag").on("click", function(){
        localStorage.setItem("language", "german");
        translateCustomerBeerInfoTo(german);
        translateCustomerPageTo(german);
        translateShoppingBasketTo(german);
        translateStaffSettingsTo(german);
        translateStaffBasketTo(german);
        translateCompleteOrderTo(german);
        translateMasterPageTo(german);
        translateWelcomeTo(german);
        translateOrderConfirmationTo(german);
    });
});

<!-- Login Function -->
$(function () {
    $("#vipBtn").on("click", function(){
        $( "#logout" ).toggle();
        $( "#cart" ).show();
        $( "#vipBtn" ).hide();
        $("#settingsIcon").show();
        $("#vipLabel").show();
        $("#login").show();
        sessionStorage.setItem("login", "true");

    });
});
<!-- Logout Function -->
$(function() {
    $("#logoutBtn").on("click", function(){
        $( "#logout" ).toggle();
        $( "#cart" ).hide();
        $( "#vipBtn" ).show();
        $("#settingsIcon").hide();
        $("#vipLabel").hide();
        $("#login").hide();
        sessionStorage.setItem("login", "false");

    });
});

$(function goBack() {
//Function called when pressing the back button
    $("#back").on("click",function () {
        window.history.back();
        });
});

$(function goToCart() {
    $("#cart").on("click", function () {
        /*
        Calls the function saveCart which is located in the beerType.html
         */

        var location = window.location.href;
        // Checking if the substring "beertype.html "exists on the current location
        if(location.indexOf("beertype.html") !== -1){
            saveCart();
        }
        window.location.href = "shoppingBasketNew.html";


    });

});
