
var server = require('unicafe-modules/server-communication');
var lunchUI = require('unicafe-modules/menu-display-window');
var favoritesUI = require('unicafe-modules/favorites-display-window');
var storage = require('unicafe-modules/local-storage-wrapper');


module.exports = (function(){


    function displayMenu(cafeId){
        storage.updateRestaurantWeight(cafeId);
        server.getMenuByRestaurant(cafeId, lunchUI.show); 
    }

    function displayFavorites(campusId){
        server.searchFavorites(storage.favoriteFoodSelection(), campusId, favoritesUI.show); 
    }

    return {
        get: displayMenu,
        getFavs: displayFavorites
    };
})();