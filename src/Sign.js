var Sign = cc.Sprite.extend({
    ctor:function () {
        this._super();

        this.initWithFile(s_sign);

		var shop1Normal = cc.Sprite.create(s_shopchoice, cc.rect(0, 0, 240, 38));
		var shop1Selected = cc.Sprite.create(s_shopchoice, cc.rect(0, 38, 240, 38));
		var shop1Disabled = null;

		var shop2Normal = cc.Sprite.create(s_shopchoice, cc.rect(0, 76, 240, 38));
		var shop2Selected = cc.Sprite.create(s_shopchoice, cc.rect(0, 114, 240, 38));
		var shop2Disabled = null

		var shop1Choice = cc.MenuItemSprite.create(shop1Normal, shop1Selected, shop1Disabled, this.onShop, this);

		var shop2Choice = cc.MenuItemSprite.create(shop2Normal, shop2Selected, shop2Disabled, this.onShop, this);

		var menu = cc.Menu.create(shop1Choice, shop2Choice);
		menu.alignItemsVerticallyWithPadding(1);
		this.addChild(menu, 20, 2);
		menu.setPosition(260, 135);
    },
	
	onShop: function(){
		this.getParent().onShop();
	}
});
