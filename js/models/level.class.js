class Level {
    enemies;
    clouds;
    backgroundObjects;
    collectableItems;
    level_end_x = 2800;

    constructor(enemies, clouds, backgroundObjects, collectableItems) {
        this.enemies = enemies;
        this.clouds = clouds;
        this.backgroundObjects = backgroundObjects;
        this.collectableItems = collectableItems;
    }
}