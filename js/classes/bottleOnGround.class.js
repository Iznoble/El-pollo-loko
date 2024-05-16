class bottle extends MovableObject {

    height = 100;
    width = 100;
    
    constructor(imagePath, x) {
        super().loadImage(imagePath);
        this.y = 340;
        this.x = x;
    }
}