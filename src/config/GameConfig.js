var winSize = null;
var g_nextFlyer = 'wiper';
console.log("g_nextFlyer: "+g_nextFlyer);
var g_rightparts = 'no';
var g_action = 'flyer';
var g_time = 0;

var g_roadLayer = null;
var g_handleLayer = null;

//game state
RP.GAME_STATE = {
    HOME:0,
    PLAY:1,
    OVER:2
};

//score
RP.SCORE = 0;

//sound
RP.SOUND = true;

