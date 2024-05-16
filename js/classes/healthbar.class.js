class healthBar extends drawableObject{

    IMAGES_HEART = [
        'img/7_statusbars/1_statusbar/2_statusbar_health/blue/0.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/blue/20.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/blue/40.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/blue/60.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/blue/80.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/blue/100.png'
    ];


    constructor() {
        super();
        this.loadImages(this.IMAGES_HEART);
        this.x = 40;
        this.y = 0;
        this.width = 200;
        this.height = 60;
        this.setPercentage(100);
    }

    /**
     * 
     * @param {number} percentage the percentage of the character alive 
     */
    setPercentage(percentage) {
        this.percentage = percentage;
        let path = this.IMAGES_HEART[this.resolveImageIndex()];
        this.img = this.ImageCache[path];
    }

    /**
     * 
     * @returns The image based on the percentage number
     */
    resolveImageIndex() {
        if (this.percentage == 100) {
            return 5;
        } else if (this.percentage >= 80) {
            return 4;
        }else if (this.percentage >= 60) {
            return 3;
        }else if (this.percentage >= 40) {
            return 2;
        }else if (this.percentage >= 10) {
            return 1;
        }else  {
            return 0;
        }
    }
}
