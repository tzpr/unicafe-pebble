var UI = require('ui');
var log = require('unicafe-modules/uni-util').log;

module.exports = (function(){

    function showFavorites(message){
        
        log('showFavorites: ' + message);

        var favorites = new UI.Card({
            title: 'Suosikit',
            body: message,
            scrollable: true,
        });

        favorites.show();
    }

    return {
        show: showFavorites
    };

})();