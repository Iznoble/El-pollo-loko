const level1 = new Level(
    [
        new Chicken(),
        //new Chicken(),
        //new Chicken(),
        //new Chicken(),
        //new Chicken(),
        new Endboss(),
    ],

    [
        new Cloud('img/5_background/layers/4_clouds/1.png', 0),
        new Cloud('img/5_background/layers/4_clouds/1.png', 719),
        new Cloud('img/5_background/layers/4_clouds/2.png', 719*2),
        new Cloud('img/5_background/layers/4_clouds/1.png', 719*3),
        new Cloud('img/5_background/layers/4_clouds/2.png', 719*4),
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

        new BackgroundObject('img/5_background/layers/air.png', 719*2),
        new BackgroundObject('img/5_background/layers/3_third_layer/1.png', 719*2),
        new BackgroundObject('img/5_background/layers/2_second_layer/1.png', 719*2),
        new BackgroundObject('img/5_background/layers/1_first_layer/1.png', 719*2),

        new BackgroundObject('img/5_background/layers/air.png', 719*3),
        new BackgroundObject('img/5_background/layers/3_third_layer/2.png', 719*3),
        new BackgroundObject('img/5_background/layers/2_second_layer/2.png', 719*3),
        new BackgroundObject('img/5_background/layers/1_first_layer/2.png', 719*3),

        new BackgroundObject('img/5_background/layers/air.png', 719*4),
        new BackgroundObject('img/5_background/layers/3_third_layer/1.png', 719*4),
        new BackgroundObject('img/5_background/layers/2_second_layer/1.png', 719*4),
        new BackgroundObject('img/5_background/layers/1_first_layer/1.png', 719*4),
    ],

    [
        new coins(150, 400),
        new coins(150, 500),
        new coins(150, 600),
        new coins(150, 700),
        new coins(150, 800),
        new coins(150, 900),
        new coins(150, 1000),
        new coins(150, 1100),
        new coins(150, 1150),
        new coins(150, 1200),
        new coins(150, 1250),
        new coins(150, 1300),
        new coins(150, 1350),
        new coins(150, 1400),
        new coins(150, 1450),
        new bottle("img/6_salsa_bottle/1_salsa_bottle_on_ground.png", 450),
        new bottle("img/6_salsa_bottle/2_salsa_bottle_on_ground.png", 600),
        new bottle("img/6_salsa_bottle/2_salsa_bottle_on_ground.png", 650),
        new bottle("img/6_salsa_bottle/2_salsa_bottle_on_ground.png", 700),
        new bottle("img/6_salsa_bottle/2_salsa_bottle_on_ground.png", 750),
        new bottle("img/6_salsa_bottle/2_salsa_bottle_on_ground.png", 800),
        new bottle("img/6_salsa_bottle/2_salsa_bottle_on_ground.png", 850),

    ],
);