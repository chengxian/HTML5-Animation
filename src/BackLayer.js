var BackLayer = cc.Layer.extend({
	_time: 0,

    init:function () {
        var bRet = false;
        if (this._super()) {
            winSize = cc.Director.getInstance().getWinSize();
            var carnowheel_sp = cc.Sprite.create(s_CarInteriorNoWheel);
            carnowheel_sp.setAnchorPoint(cc.p(0,0));
            this.addChild(carnowheel_sp, 0, 1);
			
			bRet = true;
        }
        return bRet;
    }
});

BackLayer.create = function () {
    var sg = new BackLayer();
    if (sg && sg.init()) {
        return sg;
    }
    return null;
};

BackLayer.scene = function () {
    var scene = cc.Scene.create();
    var layer = BackLayer.create();
    scene.addChild(layer);
    return scene;
};
