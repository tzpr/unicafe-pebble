
var server = require('unicafe-modules/server-communication');
var lunchUI = require('unicafe-modules/menu-display-window');
//var localStorage = require('unicafe-modules/local-storage-wrapper');


module.exports = (function(){


    function displayMenu(cafeId){

        // check cache from locastorage

        // get menu from server if needed
        var menuObj = server.getMenuByRestaurant(cafeId, lunchUI); 



        // cache to locastorage 

        //return lunchUI(menuObj);
    }


    return {
        get: displayMenu
    };
})();