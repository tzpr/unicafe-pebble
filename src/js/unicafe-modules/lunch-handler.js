
var server = require('unicafe-modules/server-communication');
var lunchUI = require('unicafe-modules/menu-display-window');


module.exports = (function(){

    function displayMenu(cafeId){
        server.getMenuByRestaurant(cafeId, lunchUI.show); 
    }

    return {
        get: displayMenu
    };
})();