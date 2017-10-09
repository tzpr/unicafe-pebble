
var ajax = require('ajax');


module.exports = (function server() {

    // could be in settings
    var SERVER_URL = 'http://messi.hyyravintolat.fi/publicapi/restaurant/';
    var staticDevMenuJson;
    var offlineDev = false;

    if (offlineDev) {
        staticDevMenuJson = require('../dev-data/menu-json');
    }


    function menuByRestaurant(restaurantId, succesHandler) {
        if (staticDevMenuJson) {
            return staticDevMenuJson;
        } else {
            console.log('*** menuByRestaurant: ' + (SERVER_URL + restaurantId));
            ajax({
                method: 'get',
                url: (SERVER_URL + restaurantId),
                type: 'json'
            },
            function (data, status, request) {
                console.log('GET success');
                succesHandler(parse(data, restaurantId)).show();
            },
            function (message, status, request) {
                if (status === 'OK') {
                    console.log('GET success: message:' + message + " status: " + status);
                }else{
                    console.log('GET failure: message:' + message + " status: " + status);
                }
            });
        }
    }

    function parse(data, cafeId){
        // parse menu
        var menuObj = {};
        menuObj.cafeId = cafeId;
        menuObj.cafe = data.information.restaurant;
        var dayz = data.data;
        var days = [];
        for (var i = 0; i < 5; i += 1){ // take just first 5 days
            var arr = dayz[i].data;
            var lunch = '';
            for (var ii = 0, nn = arr.length; ii < nn; ii += 1){
                lunch = lunch  + arr[ii].name + ' ' ;
                lunch = lunch + '(' + arr[ii].price.name + ') \n';
            }
            days.push({
                date: dayz[i].date_en,  // "Mon 09.10"
                menu: lunch,
            });
        }
        menuObj.day = days;
        return menuObj;
    }

    
    // public api
    return {
        getMenuByRestaurant: menuByRestaurant
    };

})();
