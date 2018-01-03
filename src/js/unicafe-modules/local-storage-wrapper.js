
var Settings = require('settings');
var log = require('unicafe-modules/uni-util').log;

module.exports = (function localStorageApi(){

    // local storage keys
    var CAFE_WEIGHTS = 'cafeWeights',
        FAVORITE_FOODS = 'favoriteFoods',
        MENU_SERVER_URL = 'menuApiAddress',
        VIBE = 'enableVibeNotification';

    function updateRestaurantWeight(cafeId){
        var weights = Settings.data(CAFE_WEIGHTS);
        if (!weights) {
            weights = {};
            weights[cafeId] = 1;
        } else {
            if (weights[cafeId]) {
                weights[cafeId] = weights[cafeId] + 1;
            } else {
                weights[cafeId] = 1;
            }
        }
        log(' updateRestaurantWeight: ' + JSON.stringify(weights));
        Settings.data(CAFE_WEIGHTS, weights);
    }

    function cafeWeights(){
        return Settings.data(CAFE_WEIGHTS);
    }

    function favoriteFood(favoriteList){
        if (favoriteList) {
            // act as a setter
            Settings.data(FAVORITE_FOODS, favoriteList);
        } else {
            // act as a getter
            return Settings.data(FAVORITE_FOODS);
        }
    }

    function serverUrl(){
        return Settings.option(MENU_SERVER_URL);
    }

    function vibe(){
        return Settings.option(VIBE) == true ? true : false;
    }


    return{
        updateRestaurantWeight: updateRestaurantWeight,
        cafeWeights: cafeWeights,
        favoriteFoodSelection: favoriteFood,
        serverUrl: serverUrl,
        vibe: vibe,
    };

})();
