
/*
Scripts for translations
*/

/*
Appends the different swedish translations to the html file
*/

function translateToSwedish() {
    translation = swedishTranslation();

    $("#origin").text(translation[0]);
    $("#provider").text(translation[1]);
    $("#nr").text(translation[2]);
    $("#classOfGoods").text(translation[3]);
    $("#alcoholPercentage").text(translation[4]);
    $("#packaging").text(translation[5]);
    $(".payButton").text(translation[6]);

}

function translateToEnglish() {
    translation = englishTranslation();
    $("#origin").text(translation[0]);
    $("#provider").text(translation[1]);
    $("#nr").text(translation[2]);
    $("#classOfGoods").text(translation[3]);
    $("#alcoholPercentage").text(translation[4]);
    $("#packaging").text(translation[5]);
    $(".payButton").text(translation[6]);
}

/*
Fetches data for translations.js and returns an array with the translations
*/
function swedishTranslation(){
    var translations = [];

    for(i=0;i<swedish.customerBeerInfo.length;i++){
        translations.push(swedish.customerBeerInfo[i].origin);
        translations.push(swedish.customerBeerInfo[i].provider);
        translations.push(swedish.customerBeerInfo[i].nr);
        translations.push(swedish.customerBeerInfo[i].classOfGoods);
        translations.push(swedish.customerBeerInfo[i].alcoholPercentage);
        translations.push(swedish.customerBeerInfo[i].packaging);
        translations.push(swedish.customerBeerInfo[i].payButton);

    }
    return translations;
}

function englishTranslation() {
    var translations = [];

    for(i=0;i<english.customerBeerInfo.length;i++){
        translations.push(english.customerBeerInfo[i].origin);
        translations.push(english.customerBeerInfo[i].provider);
        translations.push(english.customerBeerInfo[i].nr);
        translations.push(english.customerBeerInfo[i].classOfGoods);
        translations.push(english.customerBeerInfo[i].alcoholPercentage);
        translations.push(english.customerBeerInfo[i].packaging);
        translations.push(english.customerBeerInfo[i].payButton);
    }
    return translations;


}

