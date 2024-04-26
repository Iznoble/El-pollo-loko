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



    isAboveGround() {
        if (this instanceof Throwable) {
            return true;
        } else {
            return this.y < 175;
        }
    }


    getItem(item) {
        if (item instanceof coins) {
            this.coinPrecent += 20;
        } else if (item instanceof bottle) {
            this.bottlePrecent += 20;
        }
    }




    isColliding(mo) {
        return this.x + this.width - this.offset.right > mo.x + mo.offset.left &&
            this.y + this.height - this.offset.bottom > mo.y + mo.offset.top &&
            this.x + this.offset.left < mo.x + mo.width - mo.offset.right &&
            this.y + this.offset.top < mo.y + mo.height - mo.offset.bottom;
    }


    jumpOnEnemies(enemy) { 
        return this.x + this.width - this.offset.right > enemy.x + enemy.offset.left &&
            this.y + this.height > enemy.y &&
            this.x + this.offset.left < enemy.x + enemy.width - enemy.offset.right &&
            this.y < enemy.y + enemy.height;

    }



    hit() {
        this.energy -= 5;
        if (this.energy < 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }




    isHurt() {
        let timepassed = new Date().getTime() - this.lastHit;
        timepassed = timepassed / 1000;
        return timepassed < 1;
    }

    isDead() {
        return this.energy == 0;
    }

    playAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.ImageCache[path];
        this.currentImage++;
    }


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



    moveRight() {
        this.x += this.speed;
        this.otherDiretion = false;
    }

    moveLeft() {
        this.x -= this.speed;
        this.otherDiretion = true;
    }

    jump() {
        this.speedY = 20;
    }


}