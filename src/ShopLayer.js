var ShopLayer = cc.Layer.extend({
	_type : 'right',
	init:function (type) {
        var bRet = false;
        if (this._super()) {
            winSize = cc.Director.getInstance().getWinSize();
			this._type = type;
			if ( type == 'right' )
			{
				var goodshop_bg = cc.Sprite.create(s_goodshop_bg);
				goodshop_bg.setPosition(cc.p(winSize.width/2, winSize.height/2));
				this.addChild(goodshop_bg, 1);
				
				this._sign = cc.Sprite.create(s_goodsign);
				this._shopinfo = cc.Sprite.create(s_goodshopinfo);
				this._salesman = cc.Sprite.create(s_salesman);
			}
			else if ( type == 'wrong' )
			{
				var badshop_bg = cc.Sprite.create(s_badshop_bg);
				badshop_bg.setPosition(cc.p(winSize.width/2, winSize.height/2));
				this.addChild(badshop_bg, 1);

				this._sign = cc.Sprite.create(s_badsign);
				this._shopinfo = cc.Sprite.create(s_badshopinfo);
			}
			
			this._welcome = cc.Sprite.create(s_welcome);

			cc.SpriteFrameCache.getInstance().addSpriteFrames(s_wrench_plist);
            var wrenchTexture = cc.TextureCache.getInstance().addImage(s_wrenchtexture);
            var wrenchs = cc.SpriteBatchNode.createWithTexture(wrenchTexture);
            this.addChild(wrenchs);
			Wrench.sharedWrench();


			if( 'mouse' in sys.capabilities )
                this.setMouseEnabled(true);

            if( 'touches' in sys.capabilities )
                this.setTouchEnabled(true);
			
			this.show();

			bRet = true;
			
        }
        return bRet;
    },

	show: function(){
		this._welcome.setPosition(cc.p(winSize.width + 300, winSize.height - 70));
		var action = cc.MoveTo.create(0.5, cc.p(winSize.width/2-100, winSize.height - 70));
		var callback = cc.CallFunc.create(this.showSign, this);
		this.addChild(this._welcome, 15);
		this._welcome.runAction(cc.Sequence.create(action, callback));
	},
	
	showSign: function(){
		if ( this._type == 'right' )
		{
			this._sign.setPosition(cc.p(-300, winSize.height - 200));
			var action = cc.MoveTo.create(0.3, cc.p(winSize.width/2-50, winSize.height - 200));
			var callback = cc.CallFunc.create(this.showInfo, this);
			this.addChild(this._sign, 10);
			this._sign.runAction(action);

			this._salesman.setPosition(cc.p(winSize.width/2+100, winSize.height + 200));
			var action = cc.MoveTo.create(0.3, cc.p(winSize.width/2+100, winSize.height / 2 - 100));
			var callback = cc.CallFunc.create(this.showInfo, this);
			this.addChild(this._salesman, 10);
			this._salesman.runAction(cc.Sequence.create(action, callback));
		}
		else
		{
			this._sign.setPosition(cc.p(-300, winSize.height - 200));
			var action = cc.MoveTo.create(0.3, cc.p(winSize.width/2-50, winSize.height - 200));
			var callback = cc.CallFunc.create(this.showInfo, this);
			this.addChild(this._sign, 10);
			this._sign.runAction(cc.Sequence.create(action, callback));
		}
	},
	
	showInfo: function(){
		var self = this;
		this._shopinfo.setPosition(cc.p(winSize.width + 300, 150));
		var action = cc.MoveTo.create(0.3, cc.p(winSize.width/2, 130));
		var callback = cc.CallFunc.create(function(){
			var wrench = new Wrench();
			wrench.setPosition(cc.p(winSize.width/2, 120));
			this.addChild(wrench,20);
		}, this);
		this.addChild(this._shopinfo, 10);
		this._shopinfo.runAction(cc.Sequence.create(action,callback));
	},

    onTouchesEnded:function (touches, event) {
		var scene = GameLayer.scene();
		cc.Director.getInstance().replaceScene(cc.TransitionFade.create(1.2, scene));
    },

    onMouseUp:function( event ) {
		var scene = GameLayer.scene();
		cc.Director.getInstance().replaceScene(cc.TransitionFade.create(1.2, scene));
	}
	
});
	
ShopLayer.create = function(type){
    var sg = new ShopLayer();
    if (sg && sg.init(type)) {
        return sg;
    }
    return null;
}

ShopLayer.scene = function (type) {
	var scene = cc.Scene.create();
	scene.addChild(ShopLayer.create(type));
	return scene;
};
