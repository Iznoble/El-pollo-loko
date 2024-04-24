class bottleStatus extends MovableObject {

    IMAGESBOTTLE = [
        "img/7_statusbars/1_statusbar/3_statusbar_bottle/green/0.png",
        "img/7_statusbars/1_statusbar/3_statusbar_bottle/green/20.png",
        "img/7_statusbars/1_statusbar/3_statusbar_bottle/green/40.png",
        "img/7_statusbars/1_statusbar/3_statusbar_bottle/green/60.png",
        "img/7_statusbars/1_statusbar/3_statusbar_bottle/green/80.png",
        "img/7_statusbars/1_statusbar/3_statusbar_bottle/green/100.png"
    ];


    constructor() {
        super();
        this.loadImages(this.IMAGESBOTTLE);
        this.x = 40;
        this.y = 90;
        this.width = 200;
        this.height = 60;
        this.setPercentage();
    }

    setPercentage(percentage) {
        this.percentage = percentage;
        let path = this.IMAGESBOTTLE[this.resolveImageIndex()];
        this.img = this.ImageCache[path];
    }


    resolveImageIndex() {
        if (this.percentage == 0) {
            return 0;
        } else if (this.percentage == 20) {
            return 1;
        }else if (this.percentage == 40) {
            return 2;
        }else if (this.percentage == 60) {
            return 3;
        }else if (this.percentage == 80) {
            return 4;
        }else if (this.percentage == 100) {
            return 5;
        }else {
            return 0;
        }
    }
}