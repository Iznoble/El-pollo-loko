class Level {
    enemies;
    clouds;
    backgroundObjects;
    collectableItems;
    level_end_x = 4000;

    constructor(enemies, clouds, backgroundObjects, collectableItems) {
        this.enemies = enemies;
        this.clouds = clouds;
        this.backgroundObjects = backgroundObjects;
        this.collectableItems = collectableItems;
    }
}