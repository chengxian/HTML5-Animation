var cocos2dApp = cc.Application.extend({
    config:document['ccConfig'],
    ctor:function (scene) {
        this._super();
        this.startScene = scene;
        cc.COCOS2D_DEBUG = this.config.COCOS2D_DEBUG;
        cc.setup(this.config.tag);
        cc.AppController.shareAppController().didFinishLaunchingWithOptions();
    },
    applicationDidFinishLaunching:function () {
        // initialize director
        var director = cc.Director.getInstance();

        //cc.EGLView.getInstance().setDesignResolutionSize(320,480,cc.RESOLUTION_POLICY.SHOW_ALL);

        // turn on display FPS
        director.setDisplayStats(this.config.showFPS);

        // set FPS. the default value is 1.0/60 if you don't call this
        director.setAnimationInterval(1.0 / this.config.frameRate);

        //load resources
        cc.LoaderScene.preload(g_loading, function () {
            director.replaceScene(new this.startScene());
        }, this);

        return true;
    }
});

var myApp = new cocos2dApp(StartLayer.scene);

var AnchorPointCenter = new cc.Point(0.5, 0.5);
var AnchorPointTop = new cc.Point(0.5, 1);
var AnchorPointTopRight = new cc.Point(1, 1);
var AnchorPointRight = new cc.Point(1, 0.5);
var AnchorPointBottomRight = new cc.Point(1, 0);
var AnchorPointBottom = new cc.Point(0.5, 0);
var AnchorPointBottomLeft = new cc.Point(0, 0);
var AnchorPointLeft = new cc.Point(0, 0.5);
var AnchorPointTopLeft = new cc.Point(0, 1);

var s_rcVisible = cc.RectZero();
var s_ptCenter = cc.PointZero();
var s_ptTop = cc.PointZero();
var s_ptTopRight = cc.PointZero();
var s_ptRight = cc.PointZero();
var s_ptBottomRight = cc.PointZero();
var s_ptBottom = cc.PointZero();
var s_ptLeft = cc.PointZero();
var s_ptTopLeft = cc.PointZero();

var VisibleRect = {
    rect:function () {
        if (s_rcVisible.width == 0) {
            var s = cc.Director.getInstance().getWinSize();
            s_rcVisible = cc.RectMake(0, 0, s.width, s.height);
        }
        return s_rcVisible;
    },
    center:function () {
        if (s_ptCenter.x == 0) {
            var rc = this.rect();
            s_ptCenter.x = rc.x + rc.width / 2;
            s_ptCenter.y = rc.y + rc.height / 2;
        }
        return s_ptCenter;
    },
    top:function () {
        if (s_ptTop.x == 0) {
            var rc = this.rect();
            s_ptTop.x = rc.x + rc.width / 2;
            s_ptTop.y = rc.y + rc.height;
        }
        return s_ptTop;
    },
    topRight:function () {
        if (s_ptTopRight.x == 0) {
            var rc = this.rect();
            s_ptTopRight.x = rc.x + rc.width;
            s_ptTopRight.y = rc.y + rc.height;
        }
        return s_ptTopRight;
    },
    right:function () {
        if (s_ptRight.x == 0) {
            var rc = this.rect();
            s_ptRight.x = rc.x + rc.width;
            s_ptRight.y = rc.y + rc.height / 2;
        }
        return s_ptRight;
    },
    bottomRight:function () {
        if (s_ptBottomRight.x == 0) {
            var rc = this.rect();
            s_ptBottomRight.x = rc.x + rc.width;
            s_ptBottomRight.y = rc.y;
        }
        return s_ptBottomRight;
    },
    bottom:function () {
        if (s_ptBottom.x == 0) {
            var rc = this.rect();
            s_ptBottom.x = rc.x + rc.width / 2;
            s_ptBottom.y = rc.y;
        }
        return s_ptBottom;
    },
    bottomLeft:function () {
        return this.rect().origin;
    },
    left:function () {
        if (s_ptLeft.x == 0) {
            var rc = this.rect();
            s_ptLeft.x = rc.x;
            s_ptLeft.y = rc.y + rc.height / 2;
        }
        return s_ptLeft;
    },
    topLeft:function () {
        if (s_ptTopLeft.x == 0) {
            var rc = this.rect();
            s_ptTopLeft.x = rc.x;
            s_ptTopLeft.y = rc.y + rc.height;
        }
        return s_ptTopLeft;
    }
};

var screenWidth = VisibleRect.rect().width;
var screenHeight = VisibleRect.rect().height;
