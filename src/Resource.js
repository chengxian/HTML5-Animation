var dirImg = "res/";
var dirMusic = "res/Music/";

//image
var s_start_bg = dirImg + "start.png";
var s_index = dirImg + "index.png";
var s_road_bg = dirImg + "Background.png";

var s_button_play = dirImg + "buttons/" + "play.png";
var s_button_howtoplay = dirImg + "buttons/" + "howtoplay.png";

var s_CarInteriorNoWheel = dirImg + "CarInteriorNoWheel.png";

var s_shopchoice = dirImg + "shopchoice.png";
var s_mask = dirImg + "mask.png";

var s_welcome = dirImg + "welcome.png";
var s_goodshop_bg = dirImg + "goodshop.png";
var s_badshop_bg = dirImg + "badshop.png";
var s_goodshopinfo = dirImg + "goodshopinfo.png";
var s_badshopinfo = dirImg + "badshopinfo.png";
var s_sign = dirImg + "Sign.png";
var s_goodsign = dirImg + "GoodShopSign.png";
var s_badsign = dirImg + "BadShopSign.png";
var s_salesman = dirImg + "salesman.png";

var s_chooseshoptitle = dirImg + "chooseshoptitle.png";

var s_howtoplaytexture = dirImg + "textures/" + "howtoplay.png";
var s_wheelandlefthand = dirImg + "textures/" + "wheelandlefthand.png";
var s_righthanddriving = dirImg + "textures/" + "righthanddriving.png";
var s_righthandpressinghorn = dirImg + "textures/" + "righthandpressinghorn.png";
var s_loadline = dirImg + "textures/" + "roadline.png";
var s_wrenchtexture = dirImg + "textures/" + "wrench.png";
var s_wiperflyertexture = dirImg + "textures/" + "wiperflyer.png";
var s_pointboard = dirImg + "textures/" + "pointboard.png";

var s_tree1 = dirImg + "Drvo.png";
var s_tree2 = dirImg + "Drvo02.png";
var s_tree3 = dirImg + "Speed60.png";
var s_tree4 = dirImg + "SpeedLimit45.png";

// plist
var s_howtoplay_plist = dirImg + "textures/" + "howtoplay.plist";
var s_righthanddriving_plist = dirImg + "textures/" + "righthanddriving.plist";
var s_righthandpressinghorn_plist = dirImg + "textures/" + "righthandpressinghorn.plist";
var s_wheelandlefthand_plist = dirImg + "textures/" + "wheelandlefthand.plist";
var s_loadline_plist = dirImg + "textures/" + "roadline.plist";
var s_wrench_plist= dirImg + "textures/" + "wrench.plist";
var s_wiperflyer_plist= dirImg + "textures/" + "wiperflyer.plist";
var s_pointboard_plist= dirImg + "textures/" + "pointboard.plist";


// music
var g_loading = [
    {src:s_start_bg},
    {src:s_index},
	{src:s_button_play},
    {src:s_button_howtoplay},
	{src:s_CarInteriorNoWheel},
	{src:s_mask},
	{src:s_goodsign},
	{src:s_badsign},
	{src:s_road_bg},
	{src:s_tree1},
	{src:s_tree2},
	{src:s_tree3},
	{src:s_tree4},
	{src:s_chooseshoptitle},
	{src:s_goodshop_bg},
	{src:s_badshop_bg},
	{src:s_chooseshoptitle},
	{src:s_salesman},
	{src:s_goodshopinfo},
	{src:s_badshopinfo},

	{src:s_howtoplaytexture},
	{src:s_wheelandlefthand},
	{src:s_righthanddriving},
	{src:s_righthandpressinghorn},
	{src:s_loadline},
	{src:s_shopchoice},
	{src:s_wrenchtexture},
	{src:s_wiperflyertexture},
	{src:s_pointboard},

	{src:s_howtoplay_plist},
	{src:s_righthanddriving_plist},
	{src:s_righthandpressinghorn_plist},
	{src:s_wheelandlefthand_plist},
	{src:s_loadline_plist},
	{src:s_wrench_plist},
	{src:s_wiperflyer_plist},
	{src:s_pointboard_plist}
];


/*
var s_menu = dirImg + "menu.png";
var s_logo = dirImg + "logo.png";
var s_b01 = dirImg + "b01.png";
var s_cocos2dhtml5 = dirImg + "cocos2d-html5.png";
var s_gameOver = dirImg + "gameOver.png";
var s_menuTitle = dirImg + "menuTitle.png";
var s_flare = dirImg + "flare.jpg";
var s_explosion = dirImg + "explosion.png";
var s_arial14 = dirImg + "arial-14.png";
var s_arial14_fnt = dirImg + "arial-14.fnt";
var s_textureOpaquePack = dirImg + "textureOpaquePack.png";
var s_textureTransparentPack = dirImg + "textureTransparentPack.png";

//music
var s_bgMusic_mp3 = dirMusic + "bgMusic.mp3";
var s_mainMainMusic_mp3 = dirMusic + "mainMainMusic.mp3";

//effect
var s_buttonEffect_mp3 = dirMusic + "buttonEffet.mp3";
var s_explodeEffect_mp3 = dirMusic + "explodeEffect.mp3";
var s_fireEffect_mp3 = dirMusic + "fireEffect.mp3";
var s_shipDestroyEffect_mp3 = dirMusic + "shipDestroyEffect.mp3";

var s_bgMusic_ogg = dirMusic + "bgMusic.ogg";
var s_mainMainMusic_ogg = dirMusic + "mainMainMusic.ogg";

//effect
var s_buttonEffect_ogg = dirMusic + "buttonEffet.ogg";
var s_explodeEffect_ogg = dirMusic + "explodeEffect.ogg";
var s_fireEffect_ogg = dirMusic + "fireEffect.ogg";
var s_shipDestroyEffect_ogg = dirMusic + "shipDestroyEffect.ogg";

//tmx
var s_level01 = dirImg + "level01.tmx";

//plist
var s_explosion_plist = dirImg + "explosion.plist";
var s_textureOpaquePack_plist = dirImg + "textureOpaquePack.plist";
var s_textureTransparentPack_plist = dirImg + "textureTransparentPack.plist";

var g_mainmenu = [
    {src:s_loading},
    {src:s_flare},
    {src:s_menu},
    {src:s_logo},
    {src:s_flare},
	{src:s_b01},
    {src:s_mainMainMusic_mp3},
    {src:s_mainMainMusic_ogg},
    {src:s_menuTitle},
    {src:s_textureTransparentPack_plist},
    {src:s_textureTransparentPack}
];

var g_maingame = [
    //image
    {src:s_cocos2dhtml5},
    {src:s_gameOver},
    {src:s_arial14},
    {src:s_explosion},
    {src:s_textureOpaquePack},

    //tmx
    {src:s_level01},

    //plist
    {src:s_explosion_plist},
    {src:s_textureOpaquePack_plist},

    //music
    {src:s_bgMusic_mp3},
    {src:s_bgMusic_ogg},

    //effect
    {src:s_buttonEffect_mp3},
    {src:s_explodeEffect_mp3},
    {src:s_fireEffect_mp3},
    {src:s_shipDestroyEffect_mp3},
    {src:s_buttonEffect_ogg},
    {src:s_explodeEffect_ogg},
    {src:s_fireEffect_ogg},
    {src:s_shipDestroyEffect_ogg},

    // FNT
    {src:s_arial14_fnt}
];
*/