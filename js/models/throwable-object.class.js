class Throwable extends MovableObject {

    BOTTLE_THROW = [
        "img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png",
        "img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png",
        "img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png",
        "img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png"
    ];


    BOTTLE_SPLASH = [
        "img/6_salsa_bottle/bottle_rotation/bottle_splash/1_bottle_splash.png",
        "img/6_salsa_bottle/bottle_rotation/bottle_splash/2_bottle_splash.png",
        "img/6_salsa_bottle/bottle_rotation/bottle_splash/3_bottle_splash.png",
        "img/6_salsa_bottle/bottle_rotation/bottle_splash/4_bottle_splash.png",
        "img/6_salsa_bottle/bottle_rotation/bottle_splash/5_bottle_splash.png",
        "img/6_salsa_bottle/bottle_rotation/bottle_splash/6_bottle_splash.png",
        ""
    ];



    constructor(x) {
        super().loadImage("img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png");
        this.loadImages(this.BOTTLE_THROW);
        this.loadImages(this.BOTTLE_SPLASH);
        this.x = x;
        this.y = 270;
        this.height = 60;
        this.width = 60;
        this.throw();
    }

    throw() {
        this.speedY = 10;
        this.applyGravity();
        setInterval(() => {
            if (this.y > 320) {
                this.x += 0;
                this.y = 360;
                this.speedY = 0;
                this.playOnce(this.BOTTLE_SPLASH);
            } else {
                this.x += 15;
                this.playAnimation(this.BOTTLE_THROW);
            }
        }, 30);
    }


}