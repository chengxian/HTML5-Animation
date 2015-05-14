var flyFlyers = function (parent, target, callback, type) {
	var flyer = null;
	switch(type)
	{
		case "wiper":
			flyer = cc.Sprite.create(s_wiper);
			break;
		case "brake":
			flyer = cc.Sprite.create(s_brake);
			break;
		case "fuse":
			flyer = cc.Sprite.create(s_fuse);
			break;
		case "taillight":
			flyer = cc.Sprite.create(s_taillight);
			break;
	}

    //flyer.setBlendFunc(gl.SRC_ALPHA, gl.ONE);
    parent.addChild(flyer, 10);
	flyer.setPosition(cc.p(winSize.width, winSize.height));
	flyer.setRotation(-70);

	var moveAnim1 = cc.MoveTo.create(3.5, cc.p(winSize.width/2-100, winSize.height/2+100));
	var moveAnim2 = cc.MoveBy.create(0.5, cc.p(20, -20));
	var moveAnim3 = cc.MoveBy.create(0.5, cc.p(-20, 20));
	var moveAnim4 = cc.MoveTo.create(2.5, cc.p(0, winSize.height));
	var easeMove1 = cc.EaseSineOut.create(moveAnim1);
	var easeMove2 = cc.EaseSineOut.create(moveAnim2);
	var easeMove3 = cc.EaseSineOut.create(moveAnim3);
	var easeMove4 = cc.EaseSineOut.create(moveAnim4);
	
	var rotateAnim = cc.RotateBy.create(3.5, 360);
    var rotateEase = cc.EaseExponentialOut.create(rotateAnim);
	
	var biggerAnim = cc.ScaleTo.create(3.5, 1.2, 1.2);
    var biggerEase = cc.EaseSineOut.create(biggerAnim);
    var smallerAnim = cc.ScaleTo.create(2.5, 0.2, 0.2);
    var smallerEase = cc.EaseSineOut.create(smallerAnim);

	var delay = cc.DelayTime.create(1);

	var onComplete = cc.CallFunc.create(callback, target);
	var killflyer = cc.CallFunc.create(function () {
        this.getParent().removeChild(this,true);
    }, flyer);
	flyer.runAction(cc.Sequence.create(easeMove1, easeMove2, easeMove3, onComplete, easeMove4, killflyer));
	flyer.runAction(cc.Sequence.create(biggerEase, delay, smallerEase));
	flyer.runAction(rotateEase);	
};

var removeFromParent = function( sprite )
{
    sprite.removeFromParent();
}