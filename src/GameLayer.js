var GameLayer = cc.Layer.extend({
	_timeVlaue: 1,
	_time: 0,
	_wiperFlyer: null,
	_brakeFlyer: null,
	_fuseFlyer: null,
	_taillightFlyer: null,
	_shopChoiceMenu: null,
	_flagPreShop: false,
	init:function () {
        var bRet = false;
        if (this._super()) {
            winSize = cc.Director.getInstance().getWinSize();

			cc.SpriteFrameCache.getInstance().addSpriteFrames(s_wiperflyer_plist);
            var wiperflyerTexture = cc.TextureCache.getInstance().addImage(s_wiperflyertexture);
            var wiperflyers = cc.SpriteBatchNode.createWithTexture(wiperflyerTexture);
            this.addChild(wiperflyers);
			WiperFlyer.sharedWiperFlyer();

			if( 'mouse' in sys.capabilities )
                this.setMouseEnabled(true);

            if( 'touches' in sys.capabilities )
                this.setTouchEnabled(true);
			
			this.schedule(this.timer,0.5);

			bRet = true;
        }
        return bRet;
    },
	
	timer: function()
	{
		g_time ++;

		if ( g_time == 20 )
		{
			var wiperflyer = new WiperFlyer();
			wiperflyer.setPosition(cc.p(winSize.width,winSize.height));
			this.addChild(wiperflyer,20);
		}
		
		if ( g_time == 30 )
		{
			this._sign = new Sign();
			this._sign.setScale(0.2);
			this._sign.setPosition(cc.p(winSize.width/2-80, winSize.height/2 + 40));
			this._sign.setAnchorPoint(cc.p(0.5,0));
			this.addChild(this._sign);
			

			var move = cc.MoveTo.create(1.5,cc.p(180, winSize.height/2+30));
			var scale = cc.ScaleTo.create(1.5,1,1);
			this._sign.runAction(move);
			this._sign.runAction(scale);
		}
		
		if ( g_time == 31 )
		{
			g_roadLayer._roadline.stopAction(g_roadLayer._roadline._action);
			g_handleLayer._wheellefthand.stopAction(g_handleLayer._wheellefthand._leftdrivingAction);
			g_handleLayer._righthanddriving.stopAction(g_handleLayer._righthanddriving._righthandaction);
		}

		if ( g_time == 34 )
		{
			var scene = cc.Director.getInstance().getRunningScene();
			this._preshopLayer = PreShopLayer.create();
			scene.addChild(this._preshopLayer);
			this._flagPreShop = true;
		}

		if ( g_time == 40 )
		{
			
		}
	},
	
	onShop: function(){
		if ( this._flagPreShop )
		{
			var random = Math.floor(Math.random()*2);
			if ( random )
			{
				var scene = ShopLayer.scene('right');
				cc.Director.getInstance().replaceScene(cc.TransitionFade.create(1.2, scene));
				/*
				var scene = cc.Director.getInstance().getRunningScene();
				this._shopLayer = ShopLayer.create('right');
				scene.addChild(this._shopLayer);
				*/
			}
			else
			{
				var scene = ShopLayer.scene('wrong');
				cc.Director.getInstance().replaceScene(cc.TransitionFade.create(1.2, scene));
				/*
				var scene = cc.Director.getInstance().getRunningScene();
				this._shopLayer = ShopLayer.create('wrong');
				scene.addChild(this._shopLayer);
				*/
			}
		}
	},

    onTouchesEnded:function (touches, event) {
		
    },

    onMouseUp:function( event ) {
		
	}
});

GameLayer.create = function () {
    var sg = new GameLayer();
    if (sg && sg.init()) {
        return sg;
    }
    return null;
};

GameLayer.scene = function () {
	var scene = cc.Scene.create();
	var roadLayer = RoadLayer.create();
	var handleLayer = HandleLayer.create();
	var gameLayer = GameLayer.create();

	scene.addChild(roadLayer);
	scene.addChild(gameLayer);
	scene.addChild(handleLayer);
	return scene;
};
