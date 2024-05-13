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




    constructor(x, y, world) {
        super().loadImage("img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png");
        this.loadImages(this.BOTTLE_THROW);
        this.loadImages(this.BOTTLE_SPLASH);
        this.x = x;
        this.y = y + this.height;
        this.height = 60;
        this.width = 60;
        this.world = world;
        this.throw();
    }

    throw() {
        this.speedY = 10;
        this.applyGravity();
        setInterval(() => {
            if (this.y > 360) {
                this.brokenBottle();
            } else {
                this.x += 15;
                this.playAnimation(this.BOTTLE_THROW);
            }
        }, 25);
    }


    brokenBottle() {
        this.x += 0;
        this.speedY = 0;
        this.playOnce(this.BOTTLE_SPLASH);
        let index = this.world.throwableItem.indexOf(this);
        if (index > -1) {
            setTimeout(() => {
                this.world.throwableItem.splice(index, 1);
            }, 500);
            audio.level_audio.brokenBottle.play();
        }
    }


}