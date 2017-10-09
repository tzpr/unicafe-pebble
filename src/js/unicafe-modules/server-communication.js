
module.exports = (function server() {

    var staticDevMenuJson,
        offlineDev = true;

    if (offlineDev) {
        staticDevMenuJson = require('../dev-data/menu-json');
    }


    function menuByRestaurant(restaurantId) {
        if (staticDevMenuJson) {
            return staticDevMenuJson;
        }
        // else query server...

    }

    
    // public api
    return {
        getMenuByRestaurant: menuByRestaurant
    };

})();
