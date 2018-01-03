var UI = require('ui');
var log = require('unicafe-modules/uni-util').log;
var util = require('unicafe-modules/uni-util');

module.exports = (function(){

    // TODO: just a very rough sketch, finish. 
    function parse(menusForCampus, listOfFavMeals){
        var favoritesString = '';
        var m;
        var dm;

        function capitalFirstLetter(string){
            return string.charAt(0).toUpperCase() + string.slice(1);
        }
        
        // parse and search favorites from each cafe for today
        // construct list of cafes
        for (var i = 0; i < menusForCampus.length; i++) {
            m = util.parseMenu(menusForCampus[i]);
            dm = util.daysMenu(m);
            log('days menu: ' + dm);

            for (var d = 0; d < listOfFavMeals.length; d++) {
                if (dm.toUpperCase().includes(listOfFavMeals[d].toUpperCase())) {
                    favoritesString += m.cafe + '\n' +
                    capitalFirstLetter(listOfFavMeals[d]) + '\n';
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
        } else {
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