/**
 * Pebble Cafe
 */

var UI = require('ui');
var uniCafes = require('unicafe-modules/cafe-container');
var lunchMenu = require('unicafe-modules/lunch-handler');


var main = new UI.Card({
    title: 'PebbleCafe 0.9',
    body: 'Lounasterve! Ravintolat valitse R. Kampukset valitse K',
    action: {
        up: 'images/menu_icon.png',
        down: 'images/menu_icon.png',
        select: 'images/menu_icon.png'
    }
});



main.on('click', 'up', function (e) {
    var campuses = uniCafes.campuses();

    campuses.on('select', function (e) {
        var cafes = uniCafes.byCampus(e.item.id);

        cafes.on('select', function (e) {
            lunchMenu.get(e.item.id).show();
        });
        cafes.show();
    });
    campuses.show();
});

main.on('click', 'down', function(e){
    var cafes = uniCafes.all();
    
    cafes.on('select', function (e) {
        lunchMenu.get(e.item.id).show();
    });
    cafes.show();
});

main.show();