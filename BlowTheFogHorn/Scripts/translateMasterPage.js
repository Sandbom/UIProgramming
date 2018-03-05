
/*
Scripts for translations
*/

function translateMasterPageTo(language) {
    var translation = translationMasterPage(language);

    $("#vipBtn").text(translation[0]);
    $("#cartBtn").text(translation[1]);


}

/*
Fetches translations from translations.js
 */
function translationMasterPage(language){
    var translations = [];


    /* Master Page */
    for(j=0;j<language.masterPage.length;j++){
        translations.push(language.masterPage[j].vipBtn);
        translations.push(language.masterPage[j].cartBtn);

    }
    return translations;
}



