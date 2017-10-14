
var Settings = require('settings');
var log = require('unicafe-modules/uni-util').log;

module.exports = (function localStorageApi(){
    
    function updateRestaurantWeight(cafeId){
        var weights = Settings.data('cafeWeights');
        if(!weights){
            weights = {};
            weights[cafeId] = 1;
        }else{
            if(weights[cafeId]){
                weights[cafeId] = weights[cafeId] + 1;
            }else{
                weights[cafeId] = 1;
            }
        }
        log(' updateRestaurantWeight: ' + JSON.stringify(weights));
        Settings.data('cafeWeights', weights);
    }


    return{
        updateRestaurantWeight: updateRestaurantWeight
    };

})();
