/**
 * Pebble Cafe
 */

var Clock = require('clock'),
    Wakeup = require('wakeup'),
    UI = require('ui'),
    uniCafes = require('unicafe-modules/cafe-container'),
    lunchMenu = require('unicafe-modules/lunch-handler'),
    log = require('unicafe-modules/uni-util').log,
    shortVibeNotification = require('unicafe-modules/uni-util').shortVibe;


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


Wakeup.on('wakeup', function(e) {
    shortVibeNotification();
});

// kind of a hackish thing before setting wakeup events.
Wakeup.cancel('all');

// Set the wakeup events
Wakeup.schedule({time: Clock.weekday('monday', 10, 15)},
    function(e) {
        if (e.failed) {
            log('Wakeup set failed: ' + e.error);
        } else {
            log('Wakeup set! Event ID: ' + e.id);
        }
    }
);

Wakeup.schedule({time: Clock.weekday('tuesday', 10, 15)},
    function(e) {
        if (e.failed) {
            log('Wakeup set failed: ' + e.error);
        } else {
            log('Wakeup set! Event ID: ' + e.id);
        }
    }
);

Wakeup.schedule({time: Clock.weekday('wednesday', 10, 15)},
    function(e) {
        if (e.failed) {
            log('Wakeup set failed: ' + e.error);
        } else {
            log('Wakeup set! Event ID: ' + e.id);
        }
    }
);

Wakeup.schedule({time: Clock.weekday('thursday', 10, 15)},
    function(e) {
        if (e.failed) {
            log('Wakeup set failed: ' + e.error);
        } else {
            log('Wakeup set! Event ID: ' + e.id);
        }
    }
);

Wakeup.schedule({time:  Clock.weekday('friday', 10, 15)},
    function(e) {
        if (e.failed) {
            log('Wakeup set failed: ' + e.error);
        } else {
            log('Wakeup set! Event ID: ' + e.id);
        }
    }
);