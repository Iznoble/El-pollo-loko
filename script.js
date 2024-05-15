let isPlayingAudio = true;


function showLegalOptions() {
  let sign = document.getElementById('legalPage');
  sign.classList.remove('d-none');
}


function closeSigns() {
  let sign = document.getElementById('legalPage');
  let howToPage = document.getElementById('howToPage');
  howToPage.classList.remove('how-to-page');
  howToPage.classList.add('d-none');
  sign.classList.add('d-none');
}


function dontInteract(event) {
  event.stopPropagation();
}


function toggleVolume(img) {

  if (img.src.includes('volume_on.png')) {
    img.src = 'img/0_symbols/volume_off.png';
    muteAudio();
  } else {
    img.src = 'img/0_symbols/volume_on.png';
    muteAudio();
  }
}


function muteAudio() {
  if (isPlayingAudio) {
    audio.muteAll();
    isPlayingAudio = false;
  } else {
    audio.unmuteAll();
    isPlayingAudio = true;
  }
}


function getFullscreen() {
  let doc = document.documentElement;

  if (doc.requestFullscreen) {
    doc.requestFullscreen();
  } else if (doc.webkitRequestFullscreen) { /* Safari */
    doc.webkitRequestFullscreen();
  } else if (doc.msRequestFullscreen) { /* IE11 */
    doc.msRequestFullscreen();
  }
}


function showHowToPlay() {
  let howToPage = document.getElementById('howToPage');
  howToPage.classList.remove('d-none');
  howToPage.classList.add('how-to-page');
}