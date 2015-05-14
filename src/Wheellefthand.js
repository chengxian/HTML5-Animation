var Wheellefthand = cc.Sprite.extend({
    tmpWidth:0,
    tmpHeight:0,
	active:true,
    ctor:function () {
        this._super();

        var pFrame = cc.SpriteFrameCache.getInstance().getSpriteFrame("Cycle_00000.png");
        this.initWithSpriteFrame(pFrame);
		//this.setBlendFunc(gl.SRC_ALPHA, gl.ONE);

        var cs = this.getContentSize();
        this.tmpWidth = cs.width;
        this.tmpHeight = cs.height;

        var animation = cc.AnimationCache.getInstance().getAnimation("LefthandDriving");
		this._leftdrivingAction = cc.RepeatForever.create(cc.Animate.create(animation));
        this.runAction(this._leftdrivingAction);
    }
});

Wheellefthand.sharedWheellefthand = function () {
    var animFrames = [];
    var str = "";
    for (var i = 0; i <= 98; i++) {
        str = "Cycle_000" + (i < 10 ? ("0" + i) : i) + ".png";
        var frame = cc.SpriteFrameCache.getInstance().getSpriteFrame(str);
        animFrames.push(frame);
    }
    var animation = cc.Animation.create(animFrames, 0.05);
    cc.AnimationCache.getInstance().addAnimation(animation, "LefthandDriving");
};