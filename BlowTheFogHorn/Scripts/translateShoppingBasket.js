/*
Script to translate shopping basket
 */


function translateShoppingBasketTo(language) {
    var translation = translationShoppingBasket(language);
    $("#article").text(translation[0]);
    $("#amount").text(translation[1]);
    $("#cost").text(translation[2]);
    $("#pay_under_cart").text(translation[3]);
    $("#browsebeerheading").text(translation[4]);
}


function translationShoppingBasket(language){
    var translation = [];

    for(i=0;i<language.shoppingBasket.length;i++){
        translation.push(language.shoppingBasket[i].article);
        translation.push(language.shoppingBasket[i].amount);
        translation.push(language.shoppingBasket[i].cost);
        translation.push(language.shoppingBasket[i].payButton);
        translation.push(language.shoppingBasket[i].headingShoppingCart);
    }

    return translation
}