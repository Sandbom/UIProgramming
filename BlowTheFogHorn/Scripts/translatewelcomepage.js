

function translateWelcomeTo(language) {
    var translation = translationBeerInfo(language);

    $("#welcomeheader").text(translation[0]);
    $("#beerbutton").text(translation[1]);
}

/*
Fetches translations from translations.js
 */
function translationBeerInfo(language){
    var translations = [];

    for(i=0;i<language.welcome.length;i++){
        translations.push(language.welcome[i].welcomeheader);
        translations.push(language.welcome[i].beerbutton);
    }
    
    return translations;
}


