var BrakeFlyer = cc.Sprite.extend({
    tmpWidth:0,
    tmpHeight:0,
	active:true,
    ctor:function (callback, target) {
        this._super();

        var pFrame = cc.SpriteFrameCache.getInstance().getSpriteFrame("BrakeFliyer (0).png");
        this.initWithSpriteFrame(pFrame);
		//this.setBlendFunc(gl.SRC_ALPHA, gl.ONE);

        var cs = this.getContentSize();
        this.tmpWidth = cs.width;
        this.tmpHeight = cs.height;

        var animation = cc.AnimationCache.getInstance().getAnimation("BrakeFlyer");
        this.runAction(cc.Sequence.create(
            cc.Animate.create(animation),
            cc.CallFunc.create(callback, target)
        ));
    }
});

BrakeFlyer.sharedBrakeFlyer = function () {
    var animFrames = [];
    var str = "";
    for (var i = 0; i <= 73; i++) {
        str = "BrakeFliyer (" + i + ").png";
        var frame = cc.SpriteFrameCache.getInstance().getSpriteFrame(str);
        animFrames.push(frame);
    }
    var animation = cc.Animation.create(animFrames, 0.05);
    cc.AnimationCache.getInstance().addAnimation(animation, "BrakeFlyer");
};