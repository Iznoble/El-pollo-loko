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
  bossBar = new bossHealth();
  throwableItem = [new Throwable()];


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
          this.deleteEnemy(enemy);
        } else {
          let itemCollision = false;
          this.throwableItem.forEach((item) => {
            if (item.isColliding(enemy)) {
              itemCollision = true;
              enemy.hit();
              this.bossBar.setPercentage(enemy.energy);
              this.throwableItem.splice(item, 1);
              console.log(enemy.energy);
            }
          });

          if (enemy.energy < 5 && itemCollision) {
            this.deleteEnemy(enemy);
          }
        }
      });

      this.checkThrow();
    }, 100);
  }

  deleteEnemy(enemy) {
    setTimeout(() => {
      const index = this.level.enemies.indexOf(enemy);
      if (index > -1) {
        this.level.enemies.splice(index, 1);
      }
    }, 500);
  }


  checkThrow() {
    if (this.keyboard.F) {
      if (this.character.bottlePrecent > 0) {
        let bottle = new Throwable(this.character.x);
        this.throwableItem.push(bottle);
        this.character.bottlePrecent -= 20;
        this.bottleBar.setPercentage(this.character.bottlePrecent);
      }
    }
  }


  collectItems() {
    setInterval(() => {
      this.level.collectableItems.forEach((item) => {
        if (this.character.isColliding(item)) {
          this.character.getItem(item)
          this.coinBar.setPercentage(this.character.coinPrecent);
          if (this.character.coinPrecent >= 100) {
            this.character.bottlePrecent += 20;
            this.character.coinPrecent = 0;
          }
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
    this.addToMap(this.bossBar);
    this.ctx.translate(this.camara_x, 0);


    this.addToMap(this.character);
    this.addObjectsToMap(this.level.clouds);
    this.addObjectsToMap(this.level.enemies);
    this.addObjectsToMap(this.level.collectableItems);
    this.addObjectsToMap(this.throwableItem);
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