let canvas;
let world;
let keyboard = new Keyboard();
let audio = new Sounds();



function init() {
    canvas = document.getElementById('canvas');
}

function startGame() {
    let level = initLevel();

    let overlay = document.getElementById('startImg');
    let startButton = document.getElementById('startBtn');
    let gameOver = document.getElementById('gameOver');

    overlay.classList.add('d-none');
    startButton.classList.add('d-none');
    gameOver.classList.add('d-none');
    audio.level_audio.level1.play();
    world = new World(canvas, keyboard, level);
}


function gameOverScreen() {
    let gameOver = document.getElementById('gameOver');

    for (let i = 1; i < 9999; i++) window.clearInterval(i);
    gameOver.classList.remove('d-none');
    gameOver.classList.add('game-over');
    audio.level_audio.level1.pause();
}


function backToMenu() {
    let overlay = document.getElementById('startImg');
    let startButton = document.getElementById('startBtn');
    let gameOver = document.getElementById('gameOver');


    overlay.classList.remove('d-none');
    startButton.classList.remove('d-none');
    gameOver.classList.add('d-none');
}


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