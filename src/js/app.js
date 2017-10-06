/**
 * Unicafe Menu
 */

var UI = require('ui');
var Vector2 = require('vector2');
var server = require('modules/server-communication');
var localStorage = require('modules/local-storage-wrapper');


var splashWindow = new UI.Window();

// Text element to inform user
var text = new UI.Text({
    position: new Vector2(0, 0),
    size: new Vector2(144, 168),
    text:'Haetaan menuja...',
    font:'GOTHIC_28_BOLD',
    color:'black',
    textOverflow:'wrap',
    textAlign:'center',
    backgroundColor:'white'
});

// Add to splashWindow and show
splashWindow.add(text);
splashWindow.show();