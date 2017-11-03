
var server = require('unicafe-modules/server-communication');
var lunchUI = require('unicafe-modules/menu-display-window');
var favoritesUI = require('unicafe-modules/favorites-display-window');
var storage = require('unicafe-modules/local-storage-wrapper');


module.exports = (function(){

    // hard coded predefined values for now. later maybe else.
    var favFoodTemplate = [
        {
            food: 'lihapulla',
            selected: true,
        },
        {
            food: 'hernekeitto',
            selected: true,
        },
        {
            food: 'silakkapihvi',
            selected: true,
        },
        {
            food: 'savulohi',
            selected: true,
        },
        {
            food: 'kirjolohi',
            selected: true,
        },        
        {
            food: 'siskonmakkara',
            selected: true,
        },  
        {
            food: 'kasvis',
            selected: true,
        },
        {
            food: 'vuohen',
            selected: true,
        },            
    ];

    function displayMenu(cafeId){
        storage.updateRestaurantWeight(cafeId);
        server.getMenuByRestaurant(cafeId, lunchUI.show); 
    }

    function displayFavorites(campusId){
        if (storage.favoriteFoodSelection()) {
            server.searchFavorites(storage.favoriteFoodSelection(), campusId, favoritesUI.show); 
        } else {
            // TODO: ask favorites from user and save selections to local storage
            storage.favoriteFoodSelection(favFoodTemplate);
            server.searchFavorites(storage.favoriteFoodSelection(), campusId, favoritesUI.show);
        }
    }

    return {
        get: displayMenu,
        getFavs: displayFavorites
    };
})();