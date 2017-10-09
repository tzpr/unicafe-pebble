var UI = require('ui');


function showLunchMenu(menuObj){


    // this component could also filter the correct day

    var lunchMenu = new UI.Card({
        title: menuObj.cafe,
        body: menuObj.day[0].menu,
        scrollable: true,
    });

    return lunchMenu;
}

module.exports = showLunchMenu;