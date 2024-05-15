let canvas;
let world;
let keyboard = new Keyboard();
let audio = new Sounds();



function init() {
    canvas = document.getElementById('canvas');
}

function startGame() {
    let level = initLevel();
    
    audio.level_audio.level1.play();
    world = new World(canvas, keyboard, level);
    hideMainScreen();
    showRotateMassage();
    mobileButtons();
}


function hideMainScreen() {
    let overlay = document.getElementById('startImg');
    let info = document.getElementById('infoButton');
    let startButton = document.getElementById('startBtn');
    let gameOver = document.getElementById('gameOver');
    let win = document.getElementById('gameWon');

    overlay.classList.add('d-none');
    info.classList.add('d-none');
    startButton.classList.add('d-none');
    win.classList.add('d-none');
    gameOver.classList.add('d-none');
}


function showRotateMassage() {
    let mobileHud = document.getElementById('mobileHud');
    if (window.innerWidth < 720) {
        mobileHud.classList.remove('d-none');
        mobileHud.classList.add('mobile');
    }
}


function gameWonScreen() {
    let win = document.getElementById('gameWon');

    for (let i = 1; i < 9999; i++) window.clearInterval(i);
    win.classList.remove('d-none');
    win.classList.add('game-over');
    audio.level_audio.level1.pause();
    audio.level_audio.gameWon.play();
}


function gameOverScreen() {
    let gameOver = document.getElementById('gameOver');

    for (let i = 1; i < 9999; i++) window.clearInterval(i);
    gameOver.classList.remove('d-none');
    gameOver.classList.add('game-over');
    audio.level_audio.level1.pause();
    audio.level_audio.gameLost.play();
}


function backToMenu() {
    let overlay = document.getElementById('startImg');
    let startButton = document.getElementById('startBtn');
    let info = document.getElementById('infoButton');
    let win = document.getElementById('gameWon');
    let gameOver = document.getElementById('gameOver');
    let mobileHud = document.getElementById('mobileHud');

    overlay.classList.remove('d-none');
    startButton.classList.remove('d-none');
    info.classList.remove('d-none');
    win.classList.add('d-none');
    gameOver.classList.add('d-none');
    mobileHud.classList.remove('mobile');
}


function rotateNotification() {
    let notifakasion = document.getElementById('rotate-device');
    if (window.innerWidth < 650) {
        notifakasion.classList.remove('d-none');
        notifakasion.classList.add('rotate-device')
    } else {
        notifakasion.classList.add('d-none');
        notifakasion.classList.remove('rotate-device');
    }
}

window.addEventListener('resize', rotateNotification);


window.addEventListener('keydown', (event) => {
    if (event.keyCode == 39) {
        keyboard.RIGHT = true;
    }

    if (event.keyCode == 37) {
        keyboard.LEFT = true;
    }

    if (event.keyCode == 38) {
        keyboard.UP = true;
    }

    if (event.keyCode == 40) {
        keyboard.DOWN = true;
    }
    if (event.keyCode == 32) {
        keyboard.SPACE = true;
    }

    if (event.keyCode == 70) {
        keyboard.F = true;
    }
});

window.addEventListener('keyup', (event) => {
    if (event.keyCode == 39) {
        keyboard.RIGHT = false;
    }

    if (event.keyCode == 37) {
        keyboard.LEFT = false;
    }

    if (event.keyCode == 38) {
        keyboard.UP = false;
    }

    if (event.keyCode == 40) {
        keyboard.DOWN = false;
    }
    if (event.keyCode == 32) {
        keyboard.SPACE = false;
    }

    if (event.keyCode == 70) {
        keyboard.F = false;
    }
});

function mobileButtons() {
    document.getElementById('left').addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.LEFT = true;
    });

    document.getElementById('left').addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.LEFT = false;
    });

    document.getElementById('right').addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.RIGHT = true;
    });

    document.getElementById('right').addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.RIGHT = false;
    });

    document.getElementById('throw').addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.F = true;
    });

    document.getElementById('throw').addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.F = false;
    });

    document.getElementById('jump').addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.SPACE = true;
    });

    document.getElementById('jump').addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.SPACE = false;
    });
}