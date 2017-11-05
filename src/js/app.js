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


var main = new UI.Menu({
    sections: [{
        title: '          PEBBLE CAFE',
        items: [{
            id: 1,
            title: ' Kampukset ',
            subtitle: 'Kampuksen valinta',
        },
        {
            id: 2,
            title: ' Ravintolat ',
            subtitle: 'Lista ravintoloista',
        },
        {
            id: 888,
            title: ' Suosikit ',
            subtitle: 'Hae lempiruokia',
        }]
    }]
}); 

main.show();


main.on('select', function (e) {
    var campuses = uniCafes.campuses();

    switch (e.item.id){
    case 2:
        var cafes = uniCafes.all();
            
        cafes.on('select', function (e) {
            lunchMenu.get(e.item.id);
        });
        cafes.show();
        break;
    case 1:
        campuses.on('select', function (e) {
            var cafes = uniCafes.byCampus(e.item.id);
        
            cafes.on('select', function (e) {
                lunchMenu.get(e.item.id);
            });
            cafes.show();
        });
        campuses.show();
        break;
    case 888:
        campuses.on('select', function (e) {
            lunchMenu.getFavs(e.item.id);
        }); 
        campuses.show();
        break;
    default:
        log('ERROR: could not resolve input');    
    }
});


Wakeup.on('wakeup', function(e) {
    shortVibeNotification();
});

// reset first
Wakeup.cancel('all');

// Set the wakeup events
Wakeup.schedule({time: Clock.weekday('monday', 10, 25)},
    function(e) {
        if (e.failed) {
            log('Wakeup set failed: ' + e.error);
        } else {
            log('Wakeup set! Event ID: ' + e.id);
        }
    }
);

Wakeup.schedule({time: Clock.weekday('tuesday', 10, 25)},
    function(e) {
        if (e.failed) {
            log('Wakeup set failed: ' + e.error);
        } else {
            log('Wakeup set! Event ID: ' + e.id);
        }
    }
);

Wakeup.schedule({time: Clock.weekday('wednesday', 10, 25)},
    function(e) {
        if (e.failed) {
            log('Wakeup set failed: ' + e.error);
        } else {
            log('Wakeup set! Event ID: ' + e.id);
        }
    }
);

Wakeup.schedule({time: Clock.weekday('thursday', 10, 25)},
    function(e) {
        if (e.failed) {
            log('Wakeup set failed: ' + e.error);
        } else {
            log('Wakeup set! Event ID: ' + e.id);
        }
    }
);

Wakeup.schedule({time:  Clock.weekday('friday', 10, 25)},
    function(e) {
        if (e.failed) {
            log('Wakeup set failed: ' + e.error);
        } else {
            log('Wakeup set! Event ID: ' + e.id);
        }
    }
);