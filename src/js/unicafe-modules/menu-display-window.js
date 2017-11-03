var UI = require('ui'),
    util = require('unicafe-modules/uni-util');

    
module.exports = (function(){

    // parse menu
    function parse(data, cafeId){
        showLunchMenu(util.parseDaysMenu(data, cafeId));
    }

    function showLunchMenu(menuObj){
        var lunchMenu = new UI.Card({
            title: menuObj.cafe,
            body: menuObj,
            scrollable: true,
        });

        lunchMenu.show();
    }

    return {
        show: parse
    };

})();