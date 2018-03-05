/*
Script for translate the PlaceNewOrder
 */

function translateCompleteOrderTo(language) {

    var translation = translationCompleteOrder(language);

    $("#infoSpan").text(translation[0]);
    $("#resultSpan").text(translation[1]);
    $("#addToBasket").text(translation[2]);
    $("#beersToOrder").text(translation[3]);

    $("#vipBtn").text(translation[4]);
    $("#cartBtn").text(translation[5]);


}



/*
Fetches information for translations.js
 */

function translationCompleteOrder(language){
    var translations = [];

    for(i=0;i<language.completeOrder.length;i++){
        translations.push(language.completeOrder[i].info);
        translations.push(language.completeOrder[i].result);
        translations.push(language.completeOrder[i].addToBasket);
        translations.push(language.completeOrder[i].beersToOrder);


    }

    /* Master Page */
    for(j=0;j<language.masterPage.length;j++){
        translations.push(language.masterPage[j].vipBtn);
        translations.push(language.masterPage[j].cartBtn);

    }


    return translations;

}