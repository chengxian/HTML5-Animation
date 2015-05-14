cc.dumpConfig();

var StartLayer = cc.Layer.extend({
	_howtoplayLayer: null,
	_howtoplaymask: null,
	_howtoplayboard: null,

    init:function () {
        var bRet = false;
        if (this._super()) {
            winSize = cc.Director.getInstance().getWinSize();
            var loading_bg_sp = cc.Sprite.create(s_start_bg);
            loading_bg_sp.setAnchorPoint(cc.p(0,0));
            this.addChild(loading_bg_sp, 0, 1);
/*
			var logo = cc.Sprite.create(s_title);
            logo.setAnchorPoint(cc.p(0, 1));
            logo.setPosition(0, 447);
            this.addChild(logo, 10, 1);

            var obrtomjer = cc.Sprite.create(s_obrtomjer);
            obrtomjer.setAnchorPoint(cc.p(0, 1));
            obrtomjer.setPosition(447, 302);
            this.addChild(obrtomjer, 10, 1);
*/
            var needle = cc.Sprite.create(s_index);
            needle.setAnchorPoint(cc.p(0.5, 0.5));
            needle.setPosition(543, 125);
            this.addChild(needle, 10, 1);
			
            var playGameNormal = cc.Sprite.create(s_button_play, cc.rect(0, 0, 134, 40));
            var playGameSelected = cc.Sprite.create(s_button_play, cc.rect(0, 40, 134, 40));
            var playGameDisabled = cc.Sprite.create(s_button_play, cc.rect(0, 0, 134, 40));

            var howtoplayNormal = cc.Sprite.create(s_button_howtoplay, cc.rect(0, 0, 146, 40));
            var howtoplaySelected = cc.Sprite.create(s_button_howtoplay, cc.rect(0, 40, 146, 40));
            var howtoplayDisabled = cc.Sprite.create(s_button_howtoplay, cc.rect(0, 0, 146, 40));

            var playGame = cc.MenuItemSprite.create(playGameNormal, playGameSelected, playGameDisabled, this.onPlayGame, this);

            var howtoplay = cc.MenuItemSprite.create(howtoplayNormal, howtoplaySelected, howtoplayDisabled, this.onHowtoplay, this);

            var menu = cc.Menu.create(howtoplay, playGame);
            menu.alignItemsHorizontallyWithPadding(410);
            this.addChild(menu, 20, 2);
            menu.setPosition(winSize.width/2, 45);
			
			
			cc.SpriteFrameCache.getInstance().addSpriteFrames(s_howtoplay_plist);
            var howtoplayTexture = cc.TextureCache.getInstance().addImage(s_howtoplaytexture);
            var howtoplays = cc.SpriteBatchNode.createWithTexture(howtoplayTexture);
            this.addChild(howtoplays);
			HowtoplayBoard.sharedHowtoplayBoard();


			if (RP.SOUND) {
				/*
                cc.AudioEngine.getInstance().setMusicVolume(0.7);
                cc.AudioEngine.getInstance().playMusic(s_mainMainMusic_mp3, true);
				*/
            }
			
            if( 'mouse' in sys.capabilities )
                this.setMouseEnabled(true);

            if( 'touches' in sys.capabilities )
                this.setTouchEnabled(true);

			bRet = true;
        }
        return bRet;
    },
	
	onPlayGame: function(){
		var scene = GameLayer.scene();
		cc.Director.getInstance().replaceScene(cc.TransitionFade.create(1.2, scene));
	},

	onHowtoplay: function(){
		this._howtoplaymask = cc.ProgressTimer.create(cc.Sprite.create(s_mask));
        this._howtoplaymask.setType(cc.PROGRESS_TIMER_TYPE_BAR);
        //    Setup for a bar starting from the left since the midpoint is 0 for the x
        this._howtoplaymask.setMidpoint(cc.p(0, 0));
        //    Setup for a horizontal bar since the bar change rate is 0 for y meaning no vertical change
        this._howtoplaymask.setBarChangeRate(cc.p(1, 0));
		this._howtoplaymask.setPosition(cc.p(winSize.width/2, winSize.height/2));
        this.addChild(this._howtoplaymask, 30);
		
		var leftprogress = cc.ProgressTo.create(5,750);
		this._howtoplaymask.runAction(leftprogress);
		this.doBoard();		
	},

	doBoard: function(){
		var self = this;
		setTimeout(function(){
			self._howtoplayboard = new HowtoplayBoard();
			self._howtoplayboard.setPosition(cc.p(winSize.width/2,winSize.height/2));
			self.addChild(self._howtoplayboard, 30);
		},1000);
	},

    onTouchesEnded:function (touches, event) {
		console.log(touches);
		if ( this._howtoplayboard && this._howtoplaymask)
		{
			var locat = event.getLocation();
			if ( locat.x > 60 && locat.y > 60 && locat.x < 690 && locat.y < 350 )
			{
				var seq = cc.Sequence.create( cc.FadeOut.create(1), cc.CallFunc.create(this.destroyHowtoplay, this));
				this._howtoplayboard.runAction(seq);
				this._howtoplaymask.runAction(seq.copy());
			}
		}
    },

    onMouseUp:function( event ) {
		
		if ( this._howtoplayboard && this._howtoplaymask)
		{
			var locat = event.getLocation();
			if ( locat.x > 60 && locat.y > 60 && locat.x < 690 && locat.y < 350 )
			{
				var seq = cc.Sequence.create( cc.FadeOut.create(1), cc.CallFunc.create(this.destroyHowtoplay, this));
				this._howtoplayboard.runAction(seq);
				this._howtoplaymask.runAction(seq.copy());
			}
		}
	},
	destroyHowtoplay: function(){
		this.removeChild(this._howtoplayboard);
		this.removeChild(this._howtoplaymask);
	}

});

StartLayer.create = function () {
    var sg = new StartLayer();
    if (sg && sg.init()) {
        return sg;
    }
    return null;
};

StartLayer.scene = function () {
    var scene = cc.Scene.create();
    var layer = StartLayer.create();
    scene.addChild(layer);
    return scene;
};
