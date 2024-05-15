class bossHealth extends drawableObject {


    IMAGES = [
        'img/7_statusbars/2_statusbar_endboss/blue/blue0.png',
        'img/7_statusbars/2_statusbar_endboss/blue/blue20.png',
        'img/7_statusbars/2_statusbar_endboss/blue/blue40.png',
        'img/7_statusbars/2_statusbar_endboss/blue/blue60.png',
        'img/7_statusbars/2_statusbar_endboss/blue/blue80.png',
        'img/7_statusbars/2_statusbar_endboss/blue/blue100.png'
    ];


    constructor() {
        super().loadImage('img/7_statusbars/2_statusbar_endboss/blue/blue100.png');
        this.loadImages(this.IMAGES);
        this.x = 500;
        this.y = 30;
        this.width = 200;
        this.height = 60;
        this.otherDiretion = true;
        this.setPercentage(100);
    }


    setPercentage(percentage) {
        this.percentage = percentage;
        let path = this.IMAGES[this.resolveImageIndex()];
        this.img = this.ImageCache[path];
    }


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