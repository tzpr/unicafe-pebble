
var ajax = require('ajax');


module.exports = (function server() {

    // could be in settings
    var SERVER_URL = 'http://messi.hyyravintolat.fi/publicapi/restaurant/';
    var staticDevMenuJson;
    var offlineDev = false;

    if (offlineDev) {
        staticDevMenuJson = require('../dev-data/menu-json');
    }


    function menuByRestaurant(restaurantId, display) {
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
                display(data, restaurantId);
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

    
    // public api
    return {
        getMenuByRestaurant: menuByRestaurant
    };

})();
