class coinStatus extends MovableObject {

    IMAGESCOINS = [
        "img/7_statusbars/1_statusbar/1_statusbar_coin/orange/0.png",
        "img/7_statusbars/1_statusbar/1_statusbar_coin/orange/20.png",
        "img/7_statusbars/1_statusbar/1_statusbar_coin/orange/40.png",
        "img/7_statusbars/1_statusbar/1_statusbar_coin/orange/60.png",
        "img/7_statusbars/1_statusbar/1_statusbar_coin/orange/80.png",
        "img/7_statusbars/1_statusbar/1_statusbar_coin/orange/100.png"
    ];

    constructor() {
        super();
        this.loadImages(this.IMAGESCOINS);
        this.x = 40;
        this.y = 42;
        this.width = 200;
        this.height = 60;
        this.setPercentage();
    }

    /**
     * 
     * @param {number} percentage The percentage of coins collected 
     */
    setPercentage(percentage) {
        this.percentage = percentage;
        let path = this.IMAGESCOINS[this.resolveImageIndex()];
        this.img = this.ImageCache[path];
    }

    /**
     * 
     * @returns The image based on the percentage number
     */
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