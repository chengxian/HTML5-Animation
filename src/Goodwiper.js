var Goodwiper = cc.Sprite.extend({
    tmpWidth:0,
    tmpHeight:0,
	active:true,
    ctor:function (callback, target) {
        this._super();

        var pFrame = cc.SpriteFrameCache.getInstance().getSpriteFrame("Bees-GoodWipers_00053.png");
        this.initWithSpriteFrame(pFrame);
		//this.setBlendFunc(gl.SRC_ALPHA, gl.ONE);

        var cs = this.getContentSize();
        this.tmpWidth = cs.width;
        this.tmpHeight = cs.height;

        var animation = cc.AnimationCache.getInstance().getAnimation("Goodwiper");
		this.runAction(cc.Sequence.create(
            cc.Animate.create(animation),
            cc.CallFunc.create(callback, target)
        ));
    }
});

Goodwiper.sharedGoodwiper = function () {
    var animFrames = [];
    var str = "";
    for (var i = 53; i <= 115; i++) {
        str = "Bees-GoodWipers_00" + (i < 100 ? ("0" + i) : i) + ".png";
        var frame = cc.SpriteFrameCache.getInstance().getSpriteFrame(str);
        animFrames.push(frame);
    }
    var animation = cc.Animation.create(animFrames, 0.05);
    cc.AnimationCache.getInstance().addAnimation(animation, "Goodwiper");
};