class Sounds {
    constructor() {
      this.level_audio = {
        level1: new Audio('audio/level.mp3'),
        gameWon: new Audio('audio/level-win.mp3'),
        gameLost: new Audio('audio/game_over.mp3'),
        collectBottle: new Audio('audio/bottle_collect.mp3'),
        collectCoin: new Audio('audio/collectcoin.mp3'),
        brokenBottle: new Audio('audio/broken_bottle.mp3'),
        chicken_dead: new Audio('audio/chicken_dead.mp3'),
      };
  
      this.character_audio = {
        walking: new Audio('audio/walking_sound.mp3'),
        hurt: new Audio('audio/hurt.mp3'),
        dead: new Audio('audio/dead_sound.mp3'),
        throw: new Audio('audio/throw.mp3'),
        jump: new Audio('audio/jump.mp3'),
      };
  
      this.endboss_audio = {
        bossHurt: new Audio('audio/endboss_hit.mp3'),
      };
    }
  
    muteAll() {
      Object.values(this.level_audio).forEach(audio => audio.muted = true);
      Object.values(this.character_audio).forEach(audio => audio.muted = true);
      Object.values(this.endboss_audio).forEach(audio => audio.muted = true);
    }
  
    unmuteAll() {
      Object.values(this.level_audio).forEach(audio => audio.muted = false);
      Object.values(this.character_audio).forEach(audio => audio.muted = false);
      Object.values(this.endboss_audio).forEach(audio => audio.muted = false);
    }
  }