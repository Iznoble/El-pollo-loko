class Cloud extends MovableObject {

    y = 50;
    height = 250;
    width = 500;

    constructor(imagePath, x) {
        super().loadImage(imagePath);
        this.x = x;
        this.animate();
    }

    /**
     * 
     * Move the clouds to the left and animate them
     */
    animate() {
        setInterval(() => {
            this.moveLeft();
        }, 1000 / 20);
    }

}