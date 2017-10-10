/**
 * Pebble Cafe
 */

var Clock = require('clock');
//var Settings = require('settings');
var Vibe = require('ui/vibe');
var Wakeup = require('wakeup');
var UI = require('ui');
var uniCafes = require('unicafe-modules/cafe-container');
var lunchMenu = require('unicafe-modules/lunch-handler');



var main = new UI.Card({
    title: 'PebbleCafe',
    body: 'Lounasterve! Ravintolat valitse R. Kampukset valitse K',
    action: {
        up: 'images/menu_icon.png',
        down: 'images/menu_icon.png',
        select: 'images/menu_icon.png'
    }
});

main.show();

// example
//Settings.data('playerInfo', { id: 1, name: 'Gordon Freeman' });
//var playerInfo = Settings.data('playerInfo');
//console.log("Player's name is " + playerInfo.name);

main.on('click', 'up', function (e) {
    var campuses = uniCafes.campuses();

    campuses.on('select', function (e) {
        var cafes = uniCafes.byCampus(e.item.id);

        cafes.on('select', function (e) {
            lunchMenu.get(e.item.id);
        });
        cafes.show();
    });
    campuses.show();
});

main.on('click', 'down', function(e){
    var cafes = uniCafes.all();
    
    cafes.on('select', function (e) {
        lunchMenu.get(e.item.id);
    });
    cafes.show();
});


// Single wakeup event handler example:
Wakeup.on('wakeup', function(e) {
    Vibe.vibrate('long');
    //console.log('Wakeup event! ' + JSON.stringify(e));
});

// Set the wakeup events
Wakeup.schedule({time: Clock.weekday('monday', 10, 15)},
    function(e) {
        if (e.failed) {
            console.log('Wakeup set failed: ' + e.error);
        } else {
            console.log('Wakeup set! Event ID: ' + e.id);
        }
    }
);

Wakeup.schedule({time: Clock.weekday('tuesday', 19, 20)},
    function(e) {
        if (e.failed) {
            console.log('Wakeup set failed: ' + e.error);
        } else {
            console.log('Wakeup set! Event ID: ' + e.id);
        }
    }
);

Wakeup.schedule({time: Clock.weekday('tuesday', 19, 21)},
    function(e) {
        if (e.failed) {
            console.log('Wakeup set failed: ' + e.error);
        } else {
            console.log('Wakeup set! Event ID: ' + e.id);
        }
    }
);

Wakeup.schedule({time: Clock.weekday('tuesday', 19, 22)},
    function(e) {
        if (e.failed) {
            console.log('Wakeup set failed: ' + e.error);
        } else {
            console.log('Wakeup set! Event ID: ' + e.id);
        }
    }
);

Wakeup.schedule({time:  Clock.weekday('tuesday', 19, 26)},
    function(e) {
        if (e.failed) {
            console.log('Wakeup set failed: ' + e.error);
        } else {
            console.log('Wakeup set! Event ID: ' + e.id);
        }
    }
);