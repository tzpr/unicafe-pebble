var UI = require('ui');
var log = require('unicafe-modules/uni-util').log;
var util = require('unicafe-modules/uni-util');

module.exports = (function(){

    // TODO: just a very rough sketch, finish. 
    function parse(menusForCampus, listOfFavMeals){
        var favoritesString = '';
        var m;
        var dm;
        
        // parse and search favorites from each cafe for today
        // construct list of cafes
        for (var i = 0; i < menusForCampus.length; i++) {
            m = util.parseMenu(menusForCampus[i]);
            dm = util.daysMenu(m);
            log('days menu: ' + dm);

            for(var d = 0; d < listOfFavMeals.length; d++){
                if(dm.toUpperCase().includes(listOfFavMeals[d].food.toUpperCase())){
                    favoritesString += m.cafe + '\n' +
                    listOfFavMeals[d].food + '\n';
                }
            }
            log('FAVS: ' + m.cafe);
        }
        showFavorites(favoritesString);
    }

    function showFavorites(favoritesString){
        var favorites;
        log('showFavorites: ' + favoritesString);

        if (favoritesString && favoritesString !== '') {
            favorites = new UI.Card({
                title: 'Suosikit',
                body: favoritesString,
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