var Wrench = cc.Sprite.extend({
    tmpWidth:0,
    tmpHeight:0,
	active:true,
    ctor:function () {
        this._super();

        var pFrame = cc.SpriteFrameCache.getInstance().getSpriteFrame("Wrench (0).png");
        this.initWithSpriteFrame(pFrame);
		//this.setBlendFunc(gl.SRC_ALPHA, gl.ONE);

        var cs = this.getContentSize();
        this.tmpWidth = cs.width;
        this.tmpHeight = cs.height;

        var animation = cc.AnimationCache.getInstance().getAnimation("Wrench");
		var action = cc.Animate.create(animation);
        this.runAction(action);
    }
}); 

Wrench.sharedWrench = function () {
    var animFrames = [];
    var str = "";
    for (var i = 0; i <= 6; i++) {
        str = "Wrench (" + i + ").png";
        var frame = cc.SpriteFrameCache.getInstance().getSpriteFrame(str);
        animFrames.push(frame);
    }
    var animation = cc.Animation.create(animFrames, 0.05);
    cc.AnimationCache.getInstance().addAnimation(animation, "Wrench");
};