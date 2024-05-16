let isPlayingAudio = true;

/**
 * 
 * Shows the link to data protection and legal notice
 */
function showLegalOptions() {
  let sign = document.getElementById('legalPage');
  sign.classList.remove('d-none');
}

/**
 * 
 * Allows you to close the window, even outside the window
 */
function closeSigns() {
  let sign = document.getElementById('legalPage');
  let howToPage = document.getElementById('howToPage');
  howToPage.classList.remove('how-to-page');
  howToPage.classList.add('d-none');
  sign.classList.add('d-none');
}

/**
 * 
 * Prevents the window from closing when you click on it
 */
function dontInteract(event) {
  event.stopPropagation();
}

/**
 * 
 * Changes the image of the speaker symbol when there is sound or not
 */
function toggleVolume(img) {

  if (img.src.includes('volume_on.png')) {
    img.src = 'img/0_symbols/volume_off.png';
    muteAudio();
  } else {
    img.src = 'img/0_symbols/volume_on.png';
    muteAudio();
  }
}

/**
 * 
 * Allows you to mute and unmute the game
 */
function muteAudio() {
  if (isPlayingAudio) {
    audio.muteAll();
    isPlayingAudio = false;
  } else {
    audio.unmuteAll();
    isPlayingAudio = true;
  }
}

/**
 * 
 * Allows full screen
 */
function getFullscreen() {
  let doc = document.documentElement;

  if (doc.requestFullscreen) {
    doc.requestFullscreen();
  } else if (doc.webkitRequestFullscreen) { 
    doc.webkitRequestFullscreen();
  } else if (doc.msRequestFullscreen) { 
    doc.msRequestFullscreen();
  }
}

/**
 * 
 * Shows the game instructions
 */
function showHowToPlay() {
  let howToPage = document.getElementById('howToPage');
  howToPage.classList.remove('d-none');
  howToPage.classList.add('how-to-page');
}
