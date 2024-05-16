class Endboss extends MovableObject {

    height = 350;
    width = 300;
    y = 100;
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
        this.x = 4200;
        this.startIntro();
    }



    startIntro() {
        let i = 0;
        let introFinished = false;

        const checkIntroInterval = setInterval(() => {
            if (this.world.character.x > 3800 && !introFinished) {
                clearInterval(checkIntroInterval); // Stoppe das Überprüfungs-Interval

                const introInterval = setInterval(() => {
                    this.playAnimation(this.IMAGES_INTRO);
                    audio.endboss_audio.bossIntro.play();
                    if (i >= this.IMAGES_INTRO.length - 1) {
                        introFinished = true;
                        clearInterval(introInterval); // Stoppe das Intro-Interval nach Abschluss der Animation
                        this.startWalking();
                    }
                    i++;
                }, 150);
            }
        }, 300);
    }


    startWalking() {
        const attack = setInterval(() => {
            this.startAttacking();
            this.x -= 10;
        }, 300);

        setInterval(() => {
            if (this.isDead()) {
                this.playAnimation(this.IMAGES_DEAD);
                this.currentImage = 2;
                clearInterval(attack);
                this.x = this.x;
                audio.endboss_audio.bossDeath.play();
                setTimeout(() => {
                    gameWonScreen();
                }, 1000);
            } else if (this.isHurt()) {
                this.playAnimation(this.IMAGES_HURT);
                audio.endboss_audio.bossHurt.play();
            } else {
                this.moveLeft();
                this.otherDiretion = false;
                this.playAnimation(this.IMAGES_WALKING);
            }
        }, 250);

    }

    startAttacking() {
        setTimeout(() => {
            this.playAnimation(this.IMAGES_ATTACKING);
        }, 3000);
    }
}