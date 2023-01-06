window.addEventListener("load", start);

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

/*------------------------------------ */

function start() {
  const video = document.querySelector("#video_file");
  const playBtn = document.querySelector("#play");
  const stopBtn = document.querySelector("#stop");

  playBtn.addEventListener("click", playVideo);
  stopBtn.addEventListener("click", stopVideo);

  function playVideo() {
    if (video.paused === true) {
      video.play();
      playBtn.style.backgroundImage = "url(../komponenter/pause.svg)";
    } else {
      video.pause();
      playBtn.style.backgroundImage = "url(../komponenter/play.svg)";
    }
  }
  function stopVideo() {
    video.pause();
    video.currentTime = 0;
    playBtn.style.backgroundImage = "url(../komponenter/stop.svg)";
  }
}