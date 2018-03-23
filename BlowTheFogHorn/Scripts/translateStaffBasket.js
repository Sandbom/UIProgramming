/*
Script for translating StaffBasket page
 */


function translateStaffBasketTo(language) {
    var translation = translateStaffBasket(language);
    $("#article").text(translation[0]);
    $("#amount").text(translation[1]);
    $("#cost").text(translation[2]);
    $("#payStaff").text(translation[3]);

}



function translateStaffBasket(language) {
    var translations = [];

    for(i=0;i < language.staffBasket.length;i++){
        translations.push(language.staffBasket[i].article);
        translations.push(language.staffBasket[i].amount);
        translations.push(language.staffBasket[i].cost);
        translations.push(language.staffBasket[i].payStaff);

    }

    return translations;
}