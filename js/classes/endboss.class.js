class Endboss extends MovableObject {

    height = 450;
    width = 400;
    y = 20;
    offset = {
        top: 40,
        bottom: 40,
        right: 20,
        left: 20
    };
    world;

    IMAGES_INTRO = [
        "img/4_enemie_boss_chicken/2_alert/G5.png",
        "img/4_enemie_boss_chicken/2_alert/G6.png",
        "img/4_enemie_boss_chicken/2_alert/G7.png",
        "img/4_enemie_boss_chicken/2_alert/G8.png",
        "img/4_enemie_boss_chicken/2_alert/G9.png",
        "img/4_enemie_boss_chicken/2_alert/G10.png",
        "img/4_enemie_boss_chicken/2_alert/G11.png",
        "img/4_enemie_boss_chicken/2_alert/G12.png"
    ];

    IMAGES_WALKING = [
        'img/4_enemie_boss_chicken/1_walk/G1.png',
        'img/4_enemie_boss_chicken/1_walk/G2.png',
        'img/4_enemie_boss_chicken/1_walk/G3.png',
        'img/4_enemie_boss_chicken/1_walk/G4.png',
    ];

    IMAGES_ATTACKING = [
        'img/4_enemie_boss_chicken/3_attack/G13.png',
        'img/4_enemie_boss_chicken/3_attack/G14.png',
        'img/4_enemie_boss_chicken/3_attack/G15.png',
        'img/4_enemie_boss_chicken/3_attack/G16.png',
        'img/4_enemie_boss_chicken/3_attack/G17.png',
        'img/4_enemie_boss_chicken/3_attack/G18.png',
        'img/4_enemie_boss_chicken/3_attack/G19.png',
        'img/4_enemie_boss_chicken/3_attack/G20.png'
    ];

    IMAGES_HURT = [
        "img/4_enemie_boss_chicken/4_hurt/G21.png",
        "img/4_enemie_boss_chicken/4_hurt/G22.png",
        "img/4_enemie_boss_chicken/4_hurt/G23.png",
    ];

    IMAGES_DEAD = [
        'img/4_enemie_boss_chicken/5_dead/G24.png',
        'img/4_enemie_boss_chicken/5_dead/G25.png',
        'img/4_enemie_boss_chicken/5_dead/G26.png',
    ];


    constructor() {
        super().loadImage(this.IMAGES_WALKING[0]);
        this.loadImages(this.IMAGES_INTRO);
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_ATTACKING);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_DEAD);
        this.energy = 100;
        this.x = 4100;
        this.startIntro();
        this.animateEndboss();
    }

    /**
     * 
     * Plays the intro animation when the character encounters the final boss
     */
    startIntro() {
        let introFinished = false;

        const checkIntroInterval = setInterval(() => {
            if (this.world.character.x > 3800 && !introFinished) {
                clearInterval(checkIntroInterval);
                this.playIntro(introFinished);
            }
        }, 300);
    }

    /**
     * plays the intro animation
     * @param {boolean} introEnds checks whether the intro was played or not
     */
    playIntro(introEnds) {
        let i = 0;
        const introInterval = setInterval(() => {
            this.playAnimation(this.IMAGES_INTRO);
            audio.endboss_audio.bossIntro.play();
            if (i >= this.IMAGES_INTRO.length - 1) {
                introEnds = true;
                clearInterval(introInterval);
                this.startWalking();
            }
            i++;
        }, 100);
    }

    /**
     * 
     * animates the running animation
     */
    startWalking() {

        setInterval(() => {
            this.moveLeft();
            this.otherDiretion = false;
            this.playAnimation(this.IMAGES_WALKING);
        }, 250);

    }

    /**
     * 
     * Plays the animations when the character interacts with the final boss
     */
    animateEndboss() {
        setInterval(() => {
            if (this.isDead()) {
                this.playDeadAnimation();
            } else if (this.isHurt()) {
                this.playAnimation(this.IMAGES_HURT);
                audio.endboss_audio.bossHurt.play();
                this.startAttacking();
            }
        }, 180);
    }

    /**
     * 
     * plays the attack animation and decreases the x coordinate
     */
    startAttacking() {
        setTimeout(() => {
            this.playAnimation(this.IMAGES_ATTACKING);
            this.x -= 70;
        }, 1800);
    }

    /**
     * 
     * Plays the death animation and then shows the winning screen
     */
    playDeadAnimation() {
        this.playAnimation(this.IMAGES_DEAD);
        this.currentImage = 2;
        this.x = this.x;
        audio.endboss_audio.bossDeath.play();
        setTimeout(() => {
            gameWonScreen();
        }, 1000);
    }
}