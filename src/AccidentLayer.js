var AccidentLayer = cc.Layer.extend({
	init:function () {
        var bRet = false;
        if (this._super()) {
            winSize = cc.Director.getInstance().getWinSize();
            
			cc.SpriteFrameCache.getInstance().addSpriteFrames(s_badwiperbee_plist);
            var badwiperbeeTexture = cc.TextureCache.getInstance().addImage(s_badwiperbeetexture);
            var badwiperbees = cc.SpriteBatchNode.createWithTexture(badwiperbeeTexture);
            this.addChild(badwiperbees);
			Bees.sharedBees();

			cc.SpriteFrameCache.getInstance().addSpriteFrames(s_goodwiper_plist);
            var goodwiperTexture = cc.TextureCache.getInstance().addImage(s_goodwipertexture);
            var goodwipers = cc.SpriteBatchNode.createWithTexture(goodwiperTexture);
            this.addChild(goodwipers);
			Goodwiper.sharedGoodwiper();

			cc.SpriteFrameCache.getInstance().addSpriteFrames(s_bang_plist);
            var bangTexture = cc.TextureCache.getInstance().addImage(s_bangtexture);
            var bangs = cc.SpriteBatchNode.createWithTexture(bangTexture);
            this.addChild(bangs);
			Bang.sharedBang();
			
			this.beeAccident();

			bRet = true;
		
        }
        return bRet;
    },

	beeAccident: function(){
		var badbee = new Bees(this.resultBeeAccident, this);
		badbee.setAnchorPoint(cc.p(0.5,1));
		badbee.setPosition(cc.p(winSize.width/2, winSize.height));
		this.addChild(badbee, 10);
	},

	resultBeeAccident: function(){
		if ( g_rightparts == 'yes' )
		{
			var badbee = new Bees(this.goodWiper, this);
			badbee.setAnchorPoint(cc.p(0.5,1));
			badbee.setPosition(cc.p(winSize.width/2, winSize.height));
			this.addChild(badbee, 10);
		}
		else
		{
			var badbee = new Bees(this.badWiper, this);
			badbee.setAnchorPoint(cc.p(0.5,1));
			badbee.setPosition(cc.p(winSize.width/2, winSize.height));
			this.addChild(badbee, 10);
		}
	},

	goodWiper: function(){
		var goodwiper = new Goodwiper();
		goodwiper.setAnchorPoint(cc.p(0.5,1));
		goodwiper.setPosition(cc.p(winSize.width/2, winSize.height));
		this.addChild(badbee, 10);
	},
	
	badWiper: function(){
		
	}
});

AccidentLayer.create = function (roadLayer, handleLayer) {
    var sg = new AccidentLayer();
    if (sg && sg.init()) {
        return sg;
    }
    return null;
};
