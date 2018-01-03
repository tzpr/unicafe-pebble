var Clay = require('clay'),
    Settings = require('settings'),
    clayConfig = require('config.json'),
    clay = new Clay(clayConfig, null, {autoHandleEvents: false});


// https://github.com/pebble/clay/blob/v0.1.7/README.md
Pebble.addEventListener('showConfiguration', function(e) {
    Pebble.openURL(clay.generateUrl());
});
    
Pebble.addEventListener('webviewclosed', function(e) {
    if (e && !e.response) {
        return;
    }   
    var settingsDict = clay.getSettings(e.response); 
    // Save the Clay settings to the Settings module. 
    Settings.option(settingsDict);
});