var UI = require('ui'),
    util = require('unicafe-modules/uni-util');

    
module.exports = (function(){

    // parse menu
    function parse(data, cafeId){
        showLunchMenu(util.parseMenu(data, cafeId));
    }

    function showLunchMenu(menuObj){
        var lunchMenu = new UI.Card({
            title: menuObj.cafe,
            body: util.daysMenu(menuObj),
            scrollable: true,
        });

        lunchMenu.show();
    }

    return {
        show: parse
    };

})();