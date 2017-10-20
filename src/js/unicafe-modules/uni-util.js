
var Vibe = require('ui/vibe');


module.exports.shortVibe = function shortVibe() {
    Vibe.vibrate('short');
};
    
module.exports.log = function log(message){
    var logging = false;

    if (logging) {
        console.log(message + ' this: ' + this);
    }     
};

