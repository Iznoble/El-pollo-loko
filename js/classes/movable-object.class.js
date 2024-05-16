class MovableObject extends drawableObject {
    speed = 0.60;
    otherDiretion = false;
    speedY = 0;
    acceleration = 1.5;
    energy = 100;
    lastHit = 0;
    coinPrecent = 0;
    bottlePrecent = 0;
    animationCompleted = false;
    offset = {
        top: 0,
        bottom: 0,
        right: 0,
        left: 0
    };

    /**
     * 
     * Allows gravity in the game
     */
    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            } else {
                this.y = 175;
            }
        }, 1000 / 30);
    }

    /**
     * checks whether an element is above the ground
     * @returns whether the element is above the ground
     */
    isAboveGround() {
        if (this instanceof Throwable) {
            return true;
        } else {
            return this.y < 175;
        }
    }

    /**
     * Checks whether the character collects an item and passes on the percentage
     * @param {Array} item the respective item
     */
    getItem(item) {
        if (item instanceof coins) {
            this.coinPrecent += 20;
        } else if (item instanceof bottle) {
            this.bottlePrecent += 20;
        }
    }

    /**
     * Checks whether one element collides with another
     * @param {Array} mo All movable Object array
     * @returns whether an element collides
     */
    isColliding(mo) {
        return this.x + this.width - this.offset.right > mo.x + mo.offset.left &&
            this.y + this.height - this.offset.bottom > mo.y + mo.offset.top &&
            this.x + this.offset.left < mo.x + mo.width - mo.offset.right &&
            this.y + this.offset.top < mo.y + mo.height - mo.offset.bottom;
    }

    /**
     * 
     * Checks whether an element was hit
     */
    hit() {
        this.energy -= 10;
        if (this.energy < 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }

    /**
     * checks whether an element was hit
     * @returns the time when the element was hit
     */
    isHurt() {
        let timepassed = new Date().getTime() - this.lastHit;
        timepassed = timepassed / 1000;
        return timepassed < 1;
    }

    /**
     * checks whether an element is dead
     * @returns whether an element is dead
     */
    isDead() {
        return this.energy == 0;
    }

    /**
     * Plays every image in the array
     * @param {Array} images The respective image array
     */
    playAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.ImageCache[path];
        this.currentImage++;
    }

    /**
     * plays each image in the array only once
     * @param {Array} images The respective image array
     * @returns whether each image was run through and played once
     */
    playOnce(images) {
        if (this.animationCompleted) {
            return;
        }

        this.animationCompleted = true;

        for (let i = 0; i < images.length; i++) {
            const path = images[i];
            setTimeout(() => {
                this.img = this.ImageCache[path];
            }, 50 * i);
        }
    }

    /**
     * 
     * the element moves to the right
     */
    moveRight() {
        this.x += this.speed;
        this.otherDiretion = false;
    }

    /**
     * 
     * the element moves to the left
     */
    moveLeft() {
        this.x -= this.speed;
        this.otherDiretion = true;
    }

    /**
     * 
     * the element jumps
     */
    jump() {
        this.speedY = 20;
    }
}