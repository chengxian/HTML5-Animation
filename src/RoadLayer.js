var RoadLayer = cc.Layer.extend({
	_handleLayer:null,
	_time : 0,
	_arrow: true,
	_sign: null,

	init:function () {
        var bRet = false;
        if (this._super()) {
			g_roadLayer = this;

            winSize = cc.Director.getInstance().getWinSize();
			
			var road_bg = cc.Sprite.create(s_road_bg);
			road_bg.setAnchorPoint(cc.p(0.5,0.5));
			road_bg.setPosition(cc.p(winSize.width/2,winSize.height/2));
			this.addChild(road_bg);
			
			cc.SpriteFrameCache.getInstance().addSpriteFrames(s_loadline_plist);
            var loadlineTexture = cc.TextureCache.getInstance().addImage(s_loadline);
            var loadlines = cc.SpriteBatchNode.createWithTexture(loadlineTexture);
            this.addChild(loadlines);
			Roadline.sharedRoad();

			this._roadline = new Roadline();
			this._roadline.setAnchorPoint(cc.p(0.5,0.5));
			this._roadline.setPosition(cc.p(winSize.width/2-40, winSize.height/2+7));
			this.addChild(this._roadline, 10);
			
			this.schedule(this.roadtimer,0.5);
			bRet = true;
        }
        return bRet;
    },

	roadtimer: function(){
		var index = Math.floor(Math.random()*2);
		var item = null;
		
		if ( g_time == 30 )
		{
			this.unschedule(this.roadtimer);
		}

		if ( g_time % 5 == 0 )
		{
			item = cc.Sprite.create(s_tree3);
		}
		else if ( g_time % 13 == 0 )
		{
			item = cc.Sprite.create(s_tree4);
		}
		else {
			switch ( index )
			{
			case 0:
				item = cc.Sprite.create(s_tree1);
				break;
			case 1:
				item = cc.Sprite.create(s_tree2);
				break;
			}
		}

		if ( this._arrow )
		{
			item.setScale(0.2);
			item.setPosition(cc.p(winSize.width/2+40, winSize.height/2 + 40));
			item.setAnchorPoint(cc.p(0.5,0));
			this.addChild(item);

			var killer = cc.CallFunc.create(function(){
				this.getParent().removeChild(this,true);
			},item);

			var move = cc.Sequence.create(cc.MoveTo.create(1,cc.p(winSize.width+50, winSize.height/2 - 50)),killer);
			var scale = cc.ScaleTo.create(1,1,1);
			item.runAction(move);
			item.runAction(scale);
		}
		else
		{
			item.setScale(0.2);
			item.setPosition(cc.p(winSize.width/2-100, winSize.height/2 + 40));
			item.setAnchorPoint(cc.p(0.5,0));
			this.addChild(item);

			var killer = cc.CallFunc.create(function(){
				this.getParent().removeChild(this,true);
			},item);

			var move = cc.Sequence.create(cc.MoveTo.create(1,cc.p(-200, winSize.height/2 - 50)),killer);
			var scale = cc.ScaleTo.create(1,1,1);
			item.runAction(move);
			item.runAction(scale);
		}

		this._arrow = !this._arrow;
	}
});

RoadLayer.create = function () {
    var sg = new RoadLayer();
    if (sg && sg.init()) {
        return sg;
    }
    return null;
};
