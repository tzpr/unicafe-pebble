var UI = require('ui');
var log = require('unicafe-modules/uni-util').log;

module.exports = (function(){


    function parse(menusForCampus, listOfFavMeals){
        // parse and search favorites from each cafe for today
        // construct list of cafes

        showFavorites();
    }


    function showFavorites(listOfCafesAndFood){
        var favorites;
        log('showFavorites: ' + listOfCafesAndFood);

        if (listOfCafesAndFood) {
            favorites = new UI.Card({
                title: 'Suosikit',
                body: 'Lihapullia Biokeskuksessa.',
                scrollable: true,
            });        
        }else{
            favorites = new UI.Card({
                title: 'Suosikit',
                body: 'Ei suosikkeja tänään tarjolla.',
                scrollable: true,
            });
        }
        favorites.show();
    }

    return {
        show: parse
    };

})();