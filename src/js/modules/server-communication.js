
module.exports = (function server() {

    var staticDevMenuJson,
        staticDevRestaurantsJson,
        offlineDev = true;

    if (offlineDev) {
        staticDevMenuJson = require('../dev-data/menu-json');
        staticDevRestaurantsJson = require('../dev-data/restaurants-json');
    }


    function menuByRestaurant(restaurantId) {
        if (staticDevMenuJson) {
            return staticDevMenuJson;
        }
        // else query server...

    }

    function restaurantsByCampus(campusId) {
        if (staticDevRestaurantsJson) {
            return staticDevRestaurantsJson;
        }
        // else query server...

    }

    
    // public api
    return {
        getRestaurantsByCampus: restaurantsByCampus,
        getMenuByRestaurant: menuByRestaurant
    };

})();
