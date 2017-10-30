var UI = require('ui');

module.exports = (function(){

    // parse menu
    function parse(data, cafeId){
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

        showLunchMenu(menuObj);
    }

    function showLunchMenu(menuObj){
        var lunchMenu;

        // filter the correct menu for the current day
        function daysMenu(menuObj){
            var weekDay = new Date().getDay(); // su === 0
            var menuMessage = '';
            
            if (weekDay === 0 || weekDay === 6) {
                menuMessage = 'Ei ruokaa! \n Hyvää viikonloppua!';
            } else {
                menuMessage = menuObj.days[weekDay-1].menu;
            }
            return menuMessage;
        }

        lunchMenu = new UI.Card({
            title: menuObj.cafe,
            body: daysMenu(menuObj),
            scrollable: true,
        });

        lunchMenu.show();
    }

    return {
        show: parse
    };

})();