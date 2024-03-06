class MovableObject {
    x = 120;
    y = 280;
    img;
    height = 150;
    width = 100;
    ImageCache = {};
    currentImage = 0;
    speed = 0.15;
    otherDiretion = false;
    speedY = 0;
    acceleration = 1;
    energy = 100;
    lastHit = 0;

    applyGravity() {

        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 25);
    }

    isAboveGround() {
        return this.y < 160;
    }


    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }


    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    drawFrame(ctx) {

        if (this instanceof Character || this instanceof Chicken) {
            ctx.beginPath();
            ctx.lineWidth = '5';
            ctx.strokeStyle = 'blue';
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
        }
    }

    isColliding(mo) {
        return this.x + this.width > mo.x &&
            this.y + this.height > mo.y &&
            this.x < mo.x &&
            this.y < mo.y + mo.height;
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
        let timepadded = new Date().getTime() - this.lastHit;
        timepadded = timepadded / 5;
        return timepadded < 1;
    }

    isDead() {
        return this.energy == 0;
    }

    loadImages(arr) {
        arr.forEach((path) => {

            let img = new Image();
            img.src = path;
            this.ImageCache[path] = img;
        })
    };

    playAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.ImageCache[path];
        this.currentImage++;
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