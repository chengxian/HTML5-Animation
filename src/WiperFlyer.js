var WiperFlyer = cc.Sprite.extend({
    tmpWidth:0,
    tmpHeight:0,
	active:true,
    ctor:function (callback, target) {
        this._super();

        var pFrame = cc.SpriteFrameCache.getInstance().getSpriteFrame("WiperFlyer0.png");
        this.initWithSpriteFrame(pFrame);
		//this.setBlendFunc(gl.SRC_ALPHA, gl.ONE);

        var cs = this.getContentSize();
        this.tmpWidth = cs.width;
        this.tmpHeight = cs.height;
		
		
		var array = [
			cc.p(0,0),
			cc.p(-50,-50),
			cc.p(-120,40),
			cc.p(-400,-130)
		];


		var move1 = cc.CardinalSplineBy.create(1, array, 0);
		var move2 = cc.MoveTo.create(0.8, cc.p(-50, winSize.height+50));
        var animation1 = cc.AnimationCache.getInstance().getAnimation("WiperFlyer1");
		var animation2 = cc.AnimationCache.getInstance().getAnimation("WiperFlyer2");
		var shake1 = cc.MoveBy.create(1, cc.p(30, -10));
		var shake2 = cc.MoveBy.create(1, cc.p(-30, 10));
		var shake3 = cc.MoveBy.create(1, cc.p(30, -10));
		var delay = cc.DelayTime.create(4.5);
		var killer = cc.CallFunc.create(function(){this.getParent().removeChild(this,true);},this);
        this.runAction(cc.Sequence.create(move1, cc.Animate.create(animation1), shake1, shake2, shake3, move2, killer));
		this.runAction(cc.Sequence.create(delay, cc.Animate.create(animation2)));
    }
});

WiperFlyer.sharedWiperFlyer = function () {
    var animFrames = [];
    var str = "";
    for (var i = 0; i <= 5; i++) {
        str = "WiperFlyer" + i + ".png";
        var frame = cc.SpriteFrameCache.getInstance().getSpriteFrame(str);
        animFrames.push(frame);
    }
    var animation = cc.Animation.create(animFrames, 0.05);
    cc.AnimationCache.getInstance().addAnimation(animation, "WiperFlyer1");

	animFrames = [];
	for (var i = 6; i <= 11; i++) {
        str = "WiperFlyer" + i + ".png";
        var frame = cc.SpriteFrameCache.getInstance().getSpriteFrame(str);
        animFrames.push(frame);
    }
    animation = cc.Animation.create(animFrames, 0.05);
    cc.AnimationCache.getInstance().addAnimation(animation, "WiperFlyer2");
};