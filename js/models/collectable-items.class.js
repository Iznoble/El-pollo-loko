class Collectable extends MovableObject {

    
    height = 100;
    width = 100;

    COIN = [
        "img/8_coin/coin_1.png",
        "img/8_coin/coin_2.png"
    ];


    constructor() {
        super().loadImage("img/8_coin/coin_1.png");
        this.loadImages(this.COIN);
        this.y = Math.floor(Math.random() * 200) + 150;
        this.x = Math.floor(Math.random() * 1500) + 400;
        this.animate();
    }

    animate() {
        setInterval(() => {
            this.playAnimation(this.COIN);
        }, 400);
    }
    
}