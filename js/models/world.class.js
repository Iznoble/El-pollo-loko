class World {
    character = new Character();
    level = level1;
    canvas;
    ctx;
    keyboard;
    camara_x = 0;
    healthBar = new healthBar();
    coinBar = new coinStatus();
    bottleBar = new bottleStatus();


    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.checkCollisions();
        this.collectItems();
    }

    setWorld() {
        this.character.world = this;
    }

    checkCollisions() {
        setInterval(() => {
            this.level.enemies.forEach((enemy) => {
                if (this.character.isColliding(enemy)) {
                    this.character.hit();
                    this.healthBar.setPercentage(this.character.energy);
                } else if (this.character.jumpOnEnemies(enemy)) {
                    this.character.jump();
                    enemy.hit();
                    setTimeout(() => this.test(this.level.enemies), 1500);
                }
            })
        }, 100); 
    }


    test(objectArray) {
        objectArray.splice(objectArray.indexOf(objectArray, 1));
    }


    collectItems() {
        setInterval(() => {
            this.level.collectableItems.forEach((item) => {
                if (this.character.isColliding(item)) {
                    this.character.getItem(item)
                    this.coinBar.setPercentage(this.character.coinPrecent);
                    this.bottleBar.setPercentage(this.character.bottlePrecent);
                    this.level.collectableItems.splice(this.level.collectableItems.indexOf(item), 1);
                }
            })
        });
    }



    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.translate(this.camara_x, 0);
        this.addObjectsToMap(this.level.backgroundObjects);

        this.ctx.translate(-this.camara_x, 0);
        this.addToMap(this.healthBar);
        this.addToMap(this.coinBar);
        this.addToMap(this.bottleBar);
        this.ctx.translate(this.camara_x, 0);


        this.addToMap(this.character);
        this.addObjectsToMap(this.level.clouds);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.level.collectableItems);

        this.ctx.translate(-this.camara_x, 0);


        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        });
    }

    addObjectsToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o);
        })
    };

    addToMap(mo) {
        if (mo.otherDiretion) {
            this.flipImage(mo);
        }
        mo.draw(this.ctx);
        mo.drawFrame(this.ctx);

        if (mo.otherDiretion) {
            this.flipImageBack(mo);
        }
    }

    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1;
    }

    flipImageBack(mo) {
        mo.x = mo.x * -1;
        this.ctx.restore();
    }
}