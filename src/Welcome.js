var Welcome = cc.Sprite.extend({
    tmpWidth:0,
    tmpHeight:0,
	active:true,
    ctor:function (callback, target) {
        this._super();

        var pFrame = cc.SpriteFrameCache.getInstance().getSpriteFrame("Welcome_00000.png");
        this.initWithSpriteFrame(pFrame);
		//this.setBlendFunc(gl.SRC_ALPHA, gl.ONE);

        var cs = this.getContentSize();
        this.tmpWidth = cs.width;
        this.tmpHeight = cs.height;

        var animation = cc.AnimationCache.getInstance().getAnimation("Welcome");
		var action = cc.Animate.create(animation);
		var onComplete = cc.CallFunc.create(callback, target);
        this.runAction(cc.Sequence.create(action, onComplete));
    }
});

Welcome.sharedWelcome = function () {
    var animFrames = [];
    var str = "";
    for (var i = 0; i <= 9; i++) {
        str = "Welcome_0000" + i + ".png";
        var frame = cc.SpriteFrameCache.getInstance().getSpriteFrame(str);
        animFrames.push(frame);
    }
    var animation = cc.Animation.create(animFrames, 0.05);
    cc.AnimationCache.getInstance().addAnimation(animation, "Welcome");
};