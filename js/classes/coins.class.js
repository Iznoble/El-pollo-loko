class coins extends MovableObject {

    COINS = [
        "img/8_coin/coin_1.png",
        "img/8_coin/coin_2.png"
    ];


    offset = {
        top: 40,
        bottom: 40,
        right: 40,
        left: 40
    };
    height = 120;
    width = 120;


    constructor(y, x) {
        super().loadImage("img/8_coin/coin_1.png");
        this.loadImages(this.COINS);
        this.y = y;
        this.x = x;
        this.animate();
    }

    /**
     * 
     * animates the coins
     */
    animate() {
        setInterval(() => {
            this.playAnimation(this.COINS);
        }, 500);
    }
}