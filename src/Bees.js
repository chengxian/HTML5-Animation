var Bees = cc.Sprite.extend({
    tmpWidth:0,
    tmpHeight:0,
	active:true,
    ctor:function (callback, target) {
        this._super();

        var pFrame = cc.SpriteFrameCache.getInstance().getSpriteFrame("Bees_00032.png");
        this.initWithSpriteFrame(pFrame);
		//this.setBlendFunc(gl.SRC_ALPHA, gl.ONE);

        var cs = this.getContentSize();
        this.tmpWidth = cs.width;
        this.tmpHeight = cs.height;

        var animation = cc.AnimationCache.getInstance().getAnimation("Bees");
		this.runAction(cc.Animate.create(animation));
    }
});

Bees.sharedBees = function () {
    var animFrames = [];
    var str = "";
    for (var i = 32; i <= 52; i++) {
        str = "Bees_000" + i + ".png";
        var frame = cc.SpriteFrameCache.getInstance().getSpriteFrame(str);
        animFrames.push(frame);
    }
    var animation = cc.Animation.create(animFrames, 0.01);
    cc.AnimationCache.getInstance().addAnimation(animation, "Bees");
};