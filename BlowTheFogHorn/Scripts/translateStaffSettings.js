/*
Translates staffsetting page
 */


function translateStaffSettingsTo(language){
    var translation = translationStaffingSetting(language);
    $("#vipOrders").text(translation[0]);
    $("#updateBeerDB").text(translation[1]);
    $("#updateVIPDB").text(translation[2]);

}

/*
Fetches translations from translations.js
 */
function translationStaffingSetting(language) {
    var translation = [];

    for(i=0;i<language.staffSettings.length;i++){
        translation.push(language.staffSettings[i].vipOrders);
        translation.push(language.staffSettings[i].updateBeerDB);
        translation.push(language.staffSettings[i].updateVIPDB);

    }
    return translation;

}