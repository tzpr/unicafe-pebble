var UI = require('ui');


function showLunchMenu(menuJson){

    var lunchMenu = new UI.Card({
        title: 'Korona',
        body: 'Lihapullia ja salaattia',
    });

    return lunchMenu;
}

module.exports = showLunchMenu;