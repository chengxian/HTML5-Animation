var HandleLayer = cc.Layer.extend({
	_time: 0,
	_wheellefthand:null,

    init:function () {
        var bRet = false;
        if (this._super()) {
            winSize = cc.Director.getInstance().getWinSize();
            
			var carnowheel_sp = cc.Sprite.create(s_CarInteriorNoWheel);
            carnowheel_sp.setAnchorPoint(cc.p(0,0));
            this.addChild(carnowheel_sp, 0, 1);

			cc.SpriteFrameCache.getInstance().addSpriteFrames(s_wheelandlefthand_plist);
            var wheellefthandTexture = cc.TextureCache.getInstance().addImage(s_wheelandlefthand);
            var wheellefthands = cc.SpriteBatchNode.createWithTexture(wheellefthandTexture);
            this.addChild(wheellefthands);
			Wheellefthand.sharedWheellefthand();
			
			this._wheellefthand = new Wheellefthand();
			this._wheellefthand.setAnchorPoint(cc.p(0,0));
			this._wheellefthand.setPosition(cc.p(23, 0));
			this.addChild(this._wheellefthand, 10);
			
			cc.SpriteFrameCache.getInstance().addSpriteFrames(s_righthanddriving_plist);
            var righthandTexture = cc.TextureCache.getInstance().addImage(s_righthanddriving);
            var righthands = cc.SpriteBatchNode.createWithTexture(righthandTexture);
            this.addChild(righthands);
			RighthandDriving.sharedRighthandDriving();
			this._righthanddriving = new RighthandDriving();
			this._righthanddriving.setAnchorPoint(cc.p(0,0));
			this._righthanddriving.setPosition(cc.p(273, 0));
			this.addChild(this._righthanddriving, 15);

			
			g_handleLayer = this;

			bRet = true;
        }
        return bRet;
    },
	
	driving: function(){
	}
});

HandleLayer.create = function () {
    var sg = new HandleLayer();
    if (sg && sg.init()) {
        return sg;
    }
    return null;
};

HandleLayer.scene = function () {
    var scene = cc.Scene.create();
    var layer = HandleLayer.create();
    scene.addChild(layer);
    return scene;
};
