/*
Script for translate the CustomerPage
 */

function translateCustomerPageTo(language) {

    var translation = TranslationCustomerPage(language);

    $("#CheckBalance").text(translation[0]);
    $("#TopUp").text(translation[1]);
    $("#SeeOrder").text(translation[2]);
    $("#ChangePassword").text(translation[3]);

}



/*
Fetches information for translations.js
 */

function TranslationCustomerPage(language){
    var translations = [];

    for(i=0;i<language.customerPage.length;i++){
        translations.push(language.customerPage[i].checkBalance);
        translations.push(language.customerPage[i].topUpCredit);
        translations.push(language.customerPage[i].seeOrderHistory);
        translations.push(language.customerPage[i].changePassword);

    }

    return translations;

}