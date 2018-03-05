/*
Script for translate the PlaceNewOrder
 */

function translatePlaceNewOrderTo(language) {

    var translation = translationPlaceNewOrder(language);

    $("#newOrder").text(translation[0]);
    $("#mostPopular").text(translation[1]);
    $("#vipBtn").text(translation[2]);
    $("#cartBtn").text(translation[3]);


}



/*
Fetches information for translations.js
 */

function translationPlaceNewOrder(language){
    var translations = [];

    for(i=0;i<language.placeNewOrder.length;i++){
        translations.push(language.placeNewOrder[i].newOrder);
        translations.push(language.placeNewOrder[i].mostPopular);


    }

    /* Master Page */
    for(j=0;j<language.masterPage.length;j++){
        translations.push(language.masterPage[j].vipBtn);
        translations.push(language.masterPage[j].cartBtn);

    }


    return translations;

}