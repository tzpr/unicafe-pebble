
var ajax = require('ajax');
var log = require('unicafe-modules/uni-util').log;
var cafeContainer = require('unicafe-modules/cafe-container');
var storage = require('unicafe-modules/local-storage-wrapper');


module.exports = (function server() {
    var staticDevMenuJson;
    var offlineDev = false;

    if (offlineDev) {
        staticDevMenuJson = require('../dev-data/menu-json');
    }

    function getMenuByRestaurant(restaurantId, display) {
        if (staticDevMenuJson) {
            return staticDevMenuJson;
        } else {
            log('***** menuByRestaurant: ' + (storage.serverUrl() + restaurantId));
            ajax({
                method: 'get',
                url: (storage.serverUrl() + restaurantId),
                type: 'json'
            },
            function (data, status, request) {
                log('GET success');
                display(data, restaurantId);
            },
            function (message, status, request) {
                if (status === 'OK') {
                    log('GET success: message:' + message + ' status: ' + status);
                }else{
                    log('GET failure: message:' + message + ' status: ' + status);
                }
            });
        }
    }

    function getMenusForCampus(campusId, callback, favsList){
        var cafeList = cafeContainer.cafeListByCampus(campusId); 
        var menus = [];
        
        function lastRestaurant(){
            return menus.length === cafeList.length;
        }

        function errorObject(message, status){
            var menuErrorObject = {};
            menuErrorObject.message = message;
            menuErrorObject.status = status;
        }

        for (var i = 0; i < cafeList.length; i++) {
            log('*** menuByRestaurant: ' + (storage.serverUrl() + cafeList[i].id));
            ajax({
                method: 'get',
                url: (storage.serverUrl() + cafeList[i].id),
                type: 'json'
            },
            function (data, status, request) {
                log('GET success');
                menus.push(data);
                if (lastRestaurant()) {                  
                    callback(menus, favsList);
                }
            },
            function (message, status, request) {
                log('GET failure: message:' + message + ' status: ' + status); 
                menus.push(errorObject(message, status));
            });            
        }
    }

    function searchFavorites(listOfFavMeals, campusId, display){
        log('searchFavorites: ' + listOfFavMeals + ' campusId: ' + campusId );
        getMenusForCampus(campusId, display, listOfFavMeals);
    }

    
    return {
        getMenuByRestaurant: getMenuByRestaurant,
        searchFavorites: searchFavorites
    };
})();
