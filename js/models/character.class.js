class Character extends MovableObject {

    height = 250;
    speed = 7;
    offset = {
        top: 120,
        bottom: 10,
        right: 20,
        left: 40
    };
    world;
    IDLE_AWAKE = 15000;
    idleTime = 0;
    lastMoveTime = new Date().getTime();



    IMAGES_IDLE = [
        'img/2_character_pepe/1_idle/idle/I-1.png',
        'img/2_character_pepe/1_idle/idle/I-2.png',
        'img/2_character_pepe/1_idle/idle/I-3.png'
    ];

    IMAGES_SLEPPING = [
        "img/2_character_pepe/1_idle/long_idle/I-11.png",
        "img/2_character_pepe/1_idle/long_idle/I-12.png",
        "img/2_character_pepe/1_idle/long_idle/I-13.png",
        "img/2_character_pepe/1_idle/long_idle/I-14.png",
        "img/2_character_pepe/1_idle/long_idle/I-15.png",
        "img/2_character_pepe/1_idle/long_idle/I-16.png",
        "img/2_character_pepe/1_idle/long_idle/I-17.png",
        "img/2_character_pepe/1_idle/long_idle/I-18.png",
        "img/2_character_pepe/1_idle/long_idle/I-19.png",
        "img/2_character_pepe/1_idle/long_idle/I-20.png"
    ];

    IMAGES_WALKING = [
        'img/2_character_pepe/2_walk/W-21.png',
        'img/2_character_pepe/2_walk/W-22.png',
        'img/2_character_pepe/2_walk/W-23.png',
        'img/2_character_pepe/2_walk/W-24.png',
        'img/2_character_pepe/2_walk/W-25.png',
        'img/2_character_pepe/2_walk/W-26.png',
    ];

    IMAGES_JUMP = [
        'img/2_character_pepe/3_jump/J-31.png',
        'img/2_character_pepe/3_jump/J-32.png',
        'img/2_character_pepe/3_jump/J-33.png',
        'img/2_character_pepe/3_jump/J-34.png',
        'img/2_character_pepe/3_jump/J-35.png',
        'img/2_character_pepe/3_jump/J-36.png',
        'img/2_character_pepe/3_jump/J-37.png',
        'img/2_character_pepe/3_jump/J-38.png',
        'img/2_character_pepe/3_jump/J-39.png',
    ];


    IMAGES_DEAD = [
        'img/2_character_pepe/5_dead/D-51.png',
        'img/2_character_pepe/5_dead/D-52.png',
        'img/2_character_pepe/5_dead/D-53.png',
        'img/2_character_pepe/5_dead/D-54.png',
        'img/2_character_pepe/5_dead/D-55.png',
        'img/2_character_pepe/5_dead/D-56.png',
        'img/2_character_pepe/5_dead/D-57.png'
    ];


    IMAGES_HURT = [
        'img/2_character_pepe/4_hurt/H-41.png',
        'img/2_character_pepe/4_hurt/H-42.png',
        'img/2_character_pepe/4_hurt/H-43.png',
    ];


    constructor() {
        super().loadImage('img/2_character_pepe/1_idle/idle/I-1.png');
        this.loadImages(this.IMAGES_IDLE);
        this.loadImages(this.IMAGES_SLEPPING);
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_JUMP);
        this.applyGravity();
        this.animate();
    }



    animate() {
        this.moveCharacter();
        this.animateCharacter();
    }


    moveCharacter() {
        setInterval(() => {
            this.audio.character_audio.walking.pause();
            if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
                this.moveRight();
                //console.log(this.x);
            }
            if (this.world.keyboard.LEFT && this.x > 0) {
                this.moveLeft();
            }
            if (this.world.keyboard.SPACE && !this.isAboveGround()) {
                this.currentImage = 0;
                this.audio.character_audio.jump.play();
                this.jump();
            }
            this.world.camara_x = -this.x + 100;
        }, 1000 / 60);
    }


    animateCharacter() {
        setInterval(() => {
            if (this.isAboveGround()) {
                if (this.speedY < 0 && this.currentImage > 4) {
                    this.currentImage = 4;
                }
                this.playAnimation(this.IMAGES_JUMP);
                this.idleTime = 0;
            } else if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
                this.playAnimation(this.IMAGES_WALKING);
                this.audio.character_audio.walking.play();
                this.idleTime = 0;
            } else if (this.isHurt()) {
                this.playAnimation(this.IMAGES_HURT);
                this.audio.character_audio.hurt.play();
            } else if (this.isDead() && !this.deadSoundPlayed) {
                this.playAnimation(this.IMAGES_DEAD);
                this.audio.character_audio.dead.play();
                this.deadSoundPlayed = true;
            } else {
                this.getSleppy();
            }
        }, 125);
    }


    getSleppy() {
        const currentTime = new Date().getTime();
        const timeSinceLastMove = currentTime - this.lastMoveTime;

        if (timeSinceLastMove >= this.IDLE_AWAKE) {
            this.idleTime += 125;
            if (this.idleTime >= this.IDLE_AWAKE) {
                this.playAnimation(this.IMAGES_SLEPPING);
            } else {
                this.playAnimation(this.IMAGES_IDLE);
            }
        } else {
            this.playAnimation(this.IMAGES_IDLE);
        }
    }
}