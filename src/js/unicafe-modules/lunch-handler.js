
var server = require('unicafe-modules/server-communication');
var lunchUI = require('unicafe-modules/menu-display-window');
var favoritesUI = require('unicafe-modules/favorites-display-window');


module.exports = (function(){

    function displayMenu(cafeId){
        server.getMenuByRestaurant(cafeId, lunchUI.show); 
    }

    function displayFavorites(listOfFavoritesToSearch){
        server.searchFavorites(listOfFavoritesToSearch, favoritesUI.show); 
    }

    return {
        get: displayMenu,
        getFavs: displayFavorites
    };
})();