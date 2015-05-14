var PreShopLayer = cc.Layer.extend({
    init:function () {
        var bRet = false;
        if (this._super()) {

            winSize = cc.Director.getInstance().getWinSize();
           
			cc.SpriteFrameCache.getInstance().addSpriteFrames(s_pointboard_plist);
            var pointboardTexture = cc.TextureCache.getInstance().addImage(s_pointboard);
            var pointboards = cc.SpriteBatchNode.createWithTexture(pointboardTexture);
            this.addChild(pointboards);
			PointBoard.sharedPointBoard();

			this._mask = cc.ProgressTimer.create(cc.Sprite.create(s_mask));
			this._mask.setType(cc.PROGRESS_TIMER_TYPE_BAR);
			//    Setup for a bar starting from the left since the midpoint is 0 for the x
			this._mask.setMidpoint(cc.p(0, 0));
			//    Setup for a horizontal bar since the bar change rate is 0 for y meaning no vertical change
			this._mask.setBarChangeRate(cc.p(1, 0));
			this._mask.setPosition(cc.p(winSize.width/2, winSize.height/2));
			this.addChild(this._mask, 30);
			
			var leftprogress = cc.ProgressTo.create(5,750);
			this._mask.runAction(leftprogress);
			this.showTitle();

            if( 'mouse' in sys.capabilities )
                this.setMouseEnabled(true);

            if( 'touches' in sys.capabilities )
                this.setTouchEnabled(true);

			bRet = true;
        }
        return bRet;
    },
	
	showTitle: function(){
		var self = this;
		setTimeout(function(){
			self._title = cc.Sprite.create(s_chooseshoptitle);
			self._title.setPosition(cc.p(winSize.width/2, winSize.height/2+100));
			self._title.setScale(0.3);
			self.addChild(self._title, 30);

			var scale = cc.ScaleTo.create(0.5, 1, 1);
			self._title.runAction(scale);

			self._pointboard = new PointBoard();
			self._pointboard.setPosition(cc.p(winSize.width/2, winSize.height/2-100));
			self.addChild(self._pointboard, 40);
		}, 1000);
	},

    onTouchesEnded:function (touches, event) {
		console.log(touches);
		if ( this._mask && this._title && this._pointboard)
		{
			var locat = event.getLocation();
			if ( locat.x > 60 && locat.y > 60 && locat.x < 690 && locat.y < 350 )
			{
				var seq = cc.Sequence.create( cc.FadeOut.create(1), cc.CallFunc.create(this.destroy, this));
				this._title.runAction(seq);
				this._mask.runAction(seq.copy());
				this._pointboard.runAction(seq.copy());
			}
		}
    },

    onMouseUp:function( event ) {
		
		if ( this._mask && this._title && this._pointboard)
		{
			var locat = event.getLocation();
			if ( locat.x > 60 && locat.y > 60 && locat.x < 690 && locat.y < 350 )
			{
				var seq = cc.Sequence.create( cc.FadeOut.create(1), cc.CallFunc.create(this.destroy, this));
				this._title.runAction(seq);
				this._mask.runAction(seq.copy());
				this._pointboard.runAction(seq.copy());
			}
		}
	},
	destroy: function(){
		this.removeChild(this._mask);
		this.removeChild(this._title);
		this.getParent().removeChild(this);
	}

});

PreShopLayer.create = function () {
    var sg = new PreShopLayer();
    if (sg && sg.init()) {
        return sg;
    }
    return null;
};

