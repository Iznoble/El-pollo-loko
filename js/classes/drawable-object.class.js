class drawableObject {
    img;
    ImageCache = {};
    currentImage = 0;
    x = 120;
    y = 280;
    height = 150;
    width = 100;

    /**
     * Loads the image
     * @param {img} path Passes the respective image into the function
     */
    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    /**
     * Loads the image into the canvas to match the canvas
     * @param {canvas} ctx 
     */
    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    /**
     * Loads all images from the passed array
     * @param {Array} arr The respective array
     */
    loadImages(arr) {
        arr.forEach((path) => {

            let img = new Image();
            img.src = path;
            this.ImageCache[path] = img;
        })
    };
}