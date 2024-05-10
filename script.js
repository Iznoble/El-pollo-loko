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


function toggleVolume(img) {
  if (img.src.includes('volume_on.png')) {
    img.src = 'img/0_symbols/volume_off.png';
    audio.muteAll();
  } else {
    img.src = 'img/0_symbols/volume_on.png';
    audio.unmuteAll();
  }
}



