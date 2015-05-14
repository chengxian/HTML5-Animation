var HowtoplayBoard = cc.Sprite.extend({
    tmpWidth:0,
    tmpHeight:0,
	active:true,
    ctor:function () {
        this._super();

        var pFrame = cc.SpriteFrameCache.getInstance().getSpriteFrame("Info_00016.png");
        this.initWithSpriteFrame(pFrame);
		//this.setBlendFunc(gl.SRC_ALPHA, gl.ONE);

        var cs = this.getContentSize();
        this.tmpWidth = cs.width;
        this.tmpHeight = cs.height;

        var animation = cc.AnimationCache.getInstance().getAnimation("HowtoplayBoard");
		this.runAction(cc.Animate.create(animation));		
    },
    destroy:function () {

		this.setPosition(g_hideSpritePos);
		this.active = false;
    }
});

HowtoplayBoard.sharedHowtoplayBoard = function () {
    var animFrames = [];
    var str = "";
    for (var i = 16; i <= 32; i++) {
        str = "Info_000" + i + ".png";
		var frame = cc.SpriteFrameCache.getInstance().getSpriteFrame(str);
        animFrames.push(frame);
    }
    var animation = cc.Animation.create(animFrames, 0.07);
    cc.AnimationCache.getInstance().addAnimation(animation, "HowtoplayBoard");
};