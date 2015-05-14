var Roadline = cc.Sprite.extend({
    tmpWidth:0,
    tmpHeight:0,
	active:true,
    ctor:function () {
        this._super();

        var pFrame = cc.SpriteFrameCache.getInstance().getSpriteFrame("RoadLine_00000.png");
        this.initWithSpriteFrame(pFrame);
		//this.setBlendFunc(gl.SRC_ALPHA, gl.ONE);

        var cs = this.getContentSize();
        this.tmpWidth = cs.width;
        this.tmpHeight = cs.height;

        var animation = cc.AnimationCache.getInstance().getAnimation("Roadline");
		this._action = cc.RepeatForever.create(cc.Animate.create(animation));
        this.runAction(this._action);
    }
});

Roadline.sharedRoad = function () {
    var animFrames = [];
    var str = "";
    for (var i = 0; i <= 4; i++) {
        str = "RoadLine_0000" +  i + ".png";
        var frame = cc.SpriteFrameCache.getInstance().getSpriteFrame(str);
        animFrames.push(frame);
    }
    var animation = cc.Animation.create(animFrames, 0.07);
    cc.AnimationCache.getInstance().addAnimation(animation, "Roadline");
};