function initLevel() {

    let level1 = new Level(
        [
            new Chicken(),
            new Chicken(),
            new Chicken(),
            new Chicken(),
            new Chicken(),
            new Chicken(),
        ],

        [
            new Cloud('img/5_background/layers/4_clouds/1.png', 0),
            new Cloud('img/5_background/layers/4_clouds/1.png', 719),
            new Cloud('img/5_background/layers/4_clouds/2.png', 719 * 2),
            new Cloud('img/5_background/layers/4_clouds/1.png', 719 * 3),
            new Cloud('img/5_background/layers/4_clouds/2.png', 719 * 4),
        ],

        [
            new BackgroundObject('img/5_background/layers/air.png', -719),
            new BackgroundObject('img/5_background/layers/3_third_layer/2.png', -719),
            new BackgroundObject('img/5_background/layers/2_second_layer/2.png', -719),
            new BackgroundObject('img/5_background/layers/1_first_layer/2.png', -719),

            new BackgroundObject('img/5_background/layers/air.png', 0),
            new BackgroundObject('img/5_background/layers/3_third_layer/1.png', 0),
            new BackgroundObject('img/5_background/layers/2_second_layer/1.png', 0),
            new BackgroundObject('img/5_background/layers/1_first_layer/1.png', 0),

            new BackgroundObject('img/5_background/layers/air.png', 719),
            new BackgroundObject('img/5_background/layers/3_third_layer/2.png', 719),
            new BackgroundObject('img/5_background/layers/2_second_layer/2.png', 719),
            new BackgroundObject('img/5_background/layers/1_first_layer/2.png', 719),

            new BackgroundObject('img/5_background/layers/air.png', 719 * 2),
            new BackgroundObject('img/5_background/layers/3_third_layer/1.png', 719 * 2),
            new BackgroundObject('img/5_background/layers/2_second_layer/1.png', 719 * 2),
            new BackgroundObject('img/5_background/layers/1_first_layer/1.png', 719 * 2),

            new BackgroundObject('img/5_background/layers/air.png', 719 * 3),
            new BackgroundObject('img/5_background/layers/3_third_layer/2.png', 719 * 3),
            new BackgroundObject('img/5_background/layers/2_second_layer/2.png', 719 * 3),
            new BackgroundObject('img/5_background/layers/1_first_layer/2.png', 719 * 3),

            new BackgroundObject('img/5_background/layers/air.png', 719 * 4),
            new BackgroundObject('img/5_background/layers/3_third_layer/1.png', 719 * 4),
            new BackgroundObject('img/5_background/layers/2_second_layer/1.png', 719 * 4),
            new BackgroundObject('img/5_background/layers/1_first_layer/1.png', 719 * 4),

            new BackgroundObject('img/5_background/layers/air.png', 719 * 5),
            new BackgroundObject('img/5_background/layers/3_third_layer/2.png', 719 * 5),
            new BackgroundObject('img/5_background/layers/2_second_layer/2.png', 719 * 5),
            new BackgroundObject('img/5_background/layers/1_first_layer/2.png', 719 * 5),

            new BackgroundObject('img/5_background/layers/air.png', 719 * 6),
            new BackgroundObject('img/5_background/layers/3_third_layer/1.png', 719 * 6),
            new BackgroundObject('img/5_background/layers/2_second_layer/1.png', 719 * 6),
            new BackgroundObject('img/5_background/layers/1_first_layer/1.png', 719 * 6),
        ],

        [
            new coins(50, 700),
            new coins(50, 750),
            new coins(50, 800),
            new coins(270, 1400),
            new coins(210, 1450),
            new coins(180, 1500),
            new coins(140, 1550),
            new coins(210, 2550),
            new coins(160, 2600),
            new coins(210, 2650),
            new coins(200, 3200),
            new coins(220, 3300),
            new coins(190, 3450),
            new coins(220, 3550),
            new coins(210, 3650),
            new bottle("img/6_salsa_bottle/1_salsa_bottle_on_ground.png", 450),
            new bottle("img/6_salsa_bottle/2_salsa_bottle_on_ground.png", 600),
            new bottle("img/6_salsa_bottle/1_salsa_bottle_on_ground.png", 1200),
            new bottle("img/6_salsa_bottle/1_salsa_bottle_on_ground.png", 1400),
            new bottle("img/6_salsa_bottle/1_salsa_bottle_on_ground.png", 1700),
            new bottle("img/6_salsa_bottle/2_salsa_bottle_on_ground.png", 1900),
            new bottle("img/6_salsa_bottle/1_salsa_bottle_on_ground.png", 2600),
            new bottle("img/6_salsa_bottle/2_salsa_bottle_on_ground.png", 3200),
            new bottle("img/6_salsa_bottle/1_salsa_bottle_on_ground.png", 3600),

        ],  
    );
    return level1;
}