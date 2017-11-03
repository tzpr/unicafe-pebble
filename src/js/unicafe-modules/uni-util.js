
var Vibe = require('ui/vibe');

module.exports.parseMenu = function parse(data, cafeId){
    var menuObj = {},
        dayz = data.data,
        days = [],
        mealsList,
        lunch;
    
    menuObj.cafeId = cafeId;
    menuObj.cafe = data.information.restaurant;

    for (var i = 0; i < 5; i += 1) { // take just first 5 days
        mealsList = dayz[i].data;
        lunch = '';
        for (var j = 0; j < mealsList.length; j += 1) {
            lunch = lunch + mealsList[j].name;
            lunch = lunch + ' (' + mealsList[j].price.name + ') \n';
        }
        days.push({
            date: dayz[i].date_en,  // "Mon 09.10"
            menu: lunch,
        });
    }
    menuObj.days = days;

    return menuObj;
};

module.exports.daysMenu = function daysMenu(menuObj){
    var weekDay = new Date().getDay(); // su === 0
    var menuMessage = '';
    
    if (weekDay === 0 || weekDay === 6) {
        menuMessage = 'Ei ruokaa! \n Hyvää viikonloppua!';
    } else {
        menuMessage = menuObj.days[weekDay-1].menu;
    }
    return menuMessage;
};

module.exports.shortVibe = function shortVibe() {
    Vibe.vibrate('short');
};
    
module.exports.log = function log(message){
    var logging = true;

    if (logging) {
        console.log(message + ' this: ' + this);
    }     
};

