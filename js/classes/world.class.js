class World {

    character = new Character();
    audio = new Sounds();
    canvas;
    ctx;
    keyboard;
    camara_x = 0;
    healthBar = new healthBar();
    coinBar = new coinStatus();
    bottleBar = new bottleStatus();
    bossBar = new bossHealth();
    boss = new Endboss();
    throwableItem = [new Throwable()];


    constructor(canvas, keyboard, level) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.level = level;
        this.draw();
        this.setWorld();
        this.runGame();
        this.collectItems();
    }

    /**
     * 
     * Passes the world variables to the respective classes
    */
    setWorld() {
        this.character.world = this;
        this.boss.world = this;
    }

    /**
     * 
     * loads the game mechanics
    */
    runGame() {
        setInterval(() => {
            this.chickenColliding();
            this.bossColliding();
            this.checkThrow();
        }, 100);
    }

    /**
     * 
     * loads the options the character has with the opponents
    */
    chickenColliding() {
        this.level.enemies.forEach((chicken) => {
            if (this.character.isAboveGround() && this.character.isColliding(chicken)) {
                this.jumpOnChicken(chicken);
            } else if (this.character.isColliding(chicken)) {
                this.lostEnergy();
            }
            this.checkItemCollison(chicken);
        });
    }

    /**
     * allows the character to jump onto the opponents
     * @param {Array} chicken the individual elements from the array
    */
    jumpOnChicken(chicken) {
        this.character.jump();
        chicken.hit();
        this.deleteEnemy(chicken);
    }

    /**
     * 
     * checks whether the character collides with the final boss
    */
    bossColliding() {
        if (this.character.isColliding(this.boss)) {
            this.lostEnergy();
        }
        this.checkItemCollison(this.boss);
    }

    /**
     * 
     * Drains the character's energy
    */
    lostEnergy() {
        this.character.hit();
        this.healthBar.setPercentage(this.character.energy);
    }

    /**
     * Removes the respective element from the array
     * @param {Array} enemy The respective element from the array
    */
    deleteEnemy(enemy) {
        setTimeout(() => {
            const index = this.level.enemies.indexOf(enemy);
            if (index > -1) {
                this.level.enemies.splice(index, 1);
            }
        }, 500);
    }

    /**
     * Checks whether items collide with enemies
     * @param {*} enemies All opponents in the game
    */
    checkItemCollison(enemies) {
        this.throwableItem.forEach((item) => {
            if (item.isColliding(enemies)) {
                if (enemies instanceof Endboss) {
                    enemies.hit();
                    this.throwableItem.splice(item, 1);
                    this.bossBar.setPercentage(this.boss.energy);
                } else {
                    enemies.hit();
                    this.throwableItem.splice(item, 1);
                    this.deleteEnemy(enemies);
                }
            }
        });
    }

    /**
     * 
     * After pressing the F key, the percentage number is adjusted
    */
    checkThrow() {
        if (this.keyboard.F) {
            if (this.character.bottlePrecent > 0) {
                let bottle = new Throwable(this.character.x, this.character.y, this);
                this.throwableItem.push(bottle);
                audio.character_audio.throw.play();
                this.character.bottlePrecent -= 20;
                this.bottleBar.setPercentage(this.character.bottlePrecent);
            }
        }
    }

    /**
     * 
     * passes the respective collectibles into the function
    */
    collectItems() {
        setInterval(() => {
            this.level.collectableItems.forEach((item) => {
                this.getSoundAndPrecent(item);
            })
        });
    }

    /**
     * Passes the percentage and plays the respective sounds
     * @param {Array} item the respective item
    */
    getSoundAndPrecent(item) {
        if (this.character.isColliding(item)) {
            this.character.getItem(item);
            this.playCollectSound(item);
            this.showStatus(item);
        }
    }

    /**
     * plays the respective sounds
     * @param {Array} item the respective item
    */
    playCollectSound(item) {
        if (item instanceof bottle) {
            audio.level_audio.collectBottle.play();
        } else if (item instanceof coins) {
            audio.level_audio.collectCoin.play();
        }
    }

    /**
     * shows the status of the respective collectables
     * @param {Array} item the respective item
    */
    showStatus(item) {
        this.coinBar.setPercentage(this.character.coinPrecent);
        if (this.character.coinPrecent == 100) {
            this.character.bottlePrecent += 20;
            this.character.coinPrecent = 0;
        }
        this.bottleBar.setPercentage(this.character.bottlePrecent);
        this.level.collectableItems.splice(this.level.collectableItems.indexOf(item), 1);
    }

    /**
     * 
     * Draws all pictures in the game
    */
    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.translate(this.camara_x, 0);
        this.addObjectsToMap(this.level.backgroundObjects);

        this.camaraFixedObjects();
        this.levelMovingObjects();

        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        });
    }

    /**
     * 
     * The camera draws the following images
    */
    camaraFixedObjects() {
        this.ctx.translate(-this.camara_x, 0);
        this.addToMap(this.healthBar);
        this.addToMap(this.coinBar);
        this.addToMap(this.bottleBar);
        this.addToMap(this.bossBar);
        this.ctx.translate(this.camara_x, 0);
    }

    /**
     * 
     * Draws all movable objects
    */
    levelMovingObjects() {
        this.addToMap(this.character);
        this.addToMap(this.boss);
        this.addObjectsToMap(this.level.clouds);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.level.collectableItems);
        this.addObjectsToMap(this.throwableItem);
        this.ctx.translate(-this.camara_x, 0);
    }

    /**
     * Draws all images in the array into the game
     * @param {Array} objects The respective images arrays
    */
    addObjectsToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o);
        })
    };

    /**
     * draws all movable object arrays and mirrors them if needed
     * @param {Array} mo All movable Object array
    */
    addToMap(mo) {
        if (mo.otherDiretion) {
            this.flipImage(mo);
        }
        mo.draw(this.ctx);

        if (mo.otherDiretion) {
            this.flipImageBack(mo);
        }
    }

    /**
     * reflects the moving objects
     * @param {Array} mo All movable Object array
    */
    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1;
    }

    /**
     * reflects the movable objects back again
     * @param {Array} mo All movable Object array
    */
    flipImageBack(mo) {
        mo.x = mo.x * -1;
        this.ctx.restore();
    }
}
