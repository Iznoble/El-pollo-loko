class Chicken extends MovableObject {

    y = 340;
    height = 80;
    width = 80;
    offset = {
        top: 20,
        bottom: 10,
        right: 10,
        left: 10
    };


    IMAGES_WALKING = [
        'img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/3_w.png'
    ];

   

    constructor() {
        super().loadImage('img/3_enemies_chicken/chicken_normal/1_walk/1_w.png')
        this.loadImages(this.IMAGES_WALKING);
        this.loadImage("img/3_enemies_chicken/chicken_normal/2_dead/dead.png");
        this.x = 700 + Math.random() * 1500;
        this.speed = 0 + Math.random() * 0.5;
        this.energy = 5;
        this.animate();
    }




    animate() {
        setInterval(() => {
            this.moveLeft();
            this.otherDiretion = false;
        }, 1000 / 60);
        this.checkLife();
    }


    checkLife() {
        let isDeadAudioPlayed = false;
    
        setInterval(() => {
            if (this.isDead() && !isDeadAudioPlayed) {
                this.audio.level_audio.chicken_dead.play();
                this.loadImage("img/3_enemies_chicken/chicken_normal/2_dead/dead.png");
                this.speed = 0;
                isDeadAudioPlayed = true;
            } else {
                if (!this.isDead()) {
                    this.playAnimation(this.IMAGES_WALKING);
                }
            }
        }, 200);
    }
}