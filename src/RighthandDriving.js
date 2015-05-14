var RighthandDriving = cc.Sprite.extend({
    tmpWidth:0,
    tmpHeight:0,
	active:true,
	_righthandaction: null,
    ctor:function () {
        this._super();

        var pFrame = cc.SpriteFrameCache.getInstance().getSpriteFrame("righthand (0).png");
        this.initWithSpriteFrame(pFrame);
		//this.setBlendFunc(gl.SRC_ALPHA, gl.ONE);

        var cs = this.getContentSize();
        this.tmpWidth = cs.width;
        this.tmpHeight = cs.height;

        var animation = cc.AnimationCache.getInstance().getAnimation("RighthandDriving");
		this._righthandaction = cc.RepeatForever.create(cc.Animate.create(animation));
        this.runAction(this._righthandaction);
    }
});

RighthandDriving.sharedRighthandDriving = function () {
    var animFrames = [];
    var str = "";
    for (var i = 0; i <= 98; i++) {
        str = "righthand (" + i + ").png";
        var frame = cc.SpriteFrameCache.getInstance().getSpriteFrame(str);
        animFrames.push(frame);
    }
    var animation = cc.Animation.create(animFrames, 0.05);
    cc.AnimationCache.getInstance().addAnimation(animation, "RighthandDriving");
};