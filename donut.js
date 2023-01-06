//------sidenVises------//

window.addEventListener("load", visStartScreen);
let points;
let lives;
let rndNum;

function visStartScreen() {
  console.log("visStartScreen");
  hideAllScreens();

 
  document.querySelector("#start").classList.remove("hide");
   //Når der klikkes på Start knap - går vi til funktion startSpillet

   document.querySelector("#playnow_btn").classList.add("pulse");
   document.querySelector("#playnow_btn").addEventListener("click",sidenVises);
 
}

// --------print points og tilføj point------//


function addPoint(){
  points = points +1;
}

function addPoint2(){
  points = points +2;
}

function printPoints() {
  document.querySelector("#points").textContent = points;
}

// -------print liv og fjern liv-------//

function removeLives() {
  lives = lives - 1;
}
function printLives() {
  document.querySelector("#lives").textContent = lives;
}

//-----------------------------

function sidenVises() {
  console.log("sidenVises");
  points = 0;
  printPoints();
//afspil baggrundsmusik 
  document.querySelector("#baggrundsmusik").play();
  
  lives = 3;
  hideAllScreens();

  //skriv point og liv ud
  
  document.querySelector("#lives").textContent = lives;
 
  rndNum = generateRandomNumber(6);

  document.querySelector("#meteorone_container").classList.add("pos2");
  document.querySelector("#meteorone_container").classList.add("fade_in");
  document.querySelector("#meteorone_container").addEventListener("mousedown", klikMeteor);
  document.querySelector("#meteorone_container").addEventListener("animationiteration", restartMeteor);

  document.querySelector("#meteortwo_container").classList.add("pos6");
  document.querySelector("#meteortwo_container").classList.add("fade_in");
  document.querySelector("#meteortwo_container").addEventListener("mousedown", klikMeteorTwo);
  document.querySelector("#meteortwo_container").addEventListener("animationiteration", restartMeteorTwo);

  document.querySelector("#blaakrymmel_container").classList.add("pos4");
  document.querySelector("#blaakrymmel_container").classList.add("fade_in");
  document.querySelector("#blaakrymmel_container").addEventListener("mousedown", klikBlaa);
  document.querySelector("#blaakrymmel_container").addEventListener("animationiteration", restartBlaa);

  document.querySelector("#orangekrymmel_container").classList.add("pos3");
  document.querySelector("#orangekrymmel_container").classList.add("fade_in");
  document.querySelector("#orangekrymmel_container").addEventListener("mousedown", klikOrange);
  document.querySelector("#orangekrymmel_container").addEventListener("animationiteration", restartOrange);

  //start timer-animation

  console.log("tidStarter");
  document.querySelector("#tid").classList.add("shrink");
  document.querySelector("#tid").addEventListener("animationend", stopSpillet);
}

//-------klik---------//

function klikMeteor() {
  console.log("klikMeteor");
  document.querySelector("#meteorone_container").removeEventListener("mousedown", klikMeteor);

  document.querySelector("#meteorone_sprite").classList.add("forsvind");

  document.querySelector("#meteorone_container").addEventListener("animationend", restartMeteor);
 
  removeLives();
  printLives();
  
  document.querySelector("#lives").textContent=lives;
  if (lives<=0){
    stopSpillet();
  }
  //afspil eksplosion lyd
 document.querySelector("#explosion").play();
 
}

function restartMeteor() {
  console.log("restartMeteor");
  document.querySelector("#meteorone_container").removeEventListener("mousedown", restartMeteor);
  document.querySelector("#meteorone_container").removeEventListener("animationiteration", restartMeteor);
  // fjern alle klasser
  document.querySelector("#meteorone_container").classList = "";
  document.querySelector("#meteorone_sprite").classList = "";
  // offsetHeight
  document.querySelector("#meteorone_container").offsetHeight;
  // adder klasserne: position & animation

  //finder random tal:
  let rndNum = generateRandomNumber(6);

  document.querySelector("#meteorone_container").classList.add("pos" + rndNum);
  document.querySelector("#meteorone_sprite").classList.add("fade_in");
  document.querySelector("#meteorone_container").addEventListener("mousedown", klikMeteor);
  document.querySelector("#meteorone_container").addEventListener("animationiteration", restartMeteor);
}
function klikMeteorTwo() {
  console.log("klikMeteorTwo");
  document.querySelector("#meteortwo_container").removeEventListener("mousedown", klikMeteorTwo);
  document.querySelector("#meteortwo_sprite").classList.add("forsvind");

  document.querySelector("#meteortwo_container").addEventListener("animationend", restartMeteorTwo);
  removeLives();
  printLives();
  
  document.querySelector("#lives").textContent=lives;
  if (lives<=0){
    stopSpillet();
  }
   //afspil eksplosion lyd
  document.querySelector("#explosion").play();
 
}
function restartMeteorTwo() {
  console.log("restartMeteorTwo");
  document.querySelector("#meteortwo_container").removeEventListener("mousedown", restartMeteorTwo);
  document.querySelector("#meteortwo_container").removeEventListener("animationiteration", restartMeteorTwo);
  // fjern alle klasser
  document.querySelector("#meteortwo_container").classList = "";
  document.querySelector("#meteortwo_sprite").classList = "";
  // offsetHeight
  document.querySelector("#meteortwo_container").offsetHeight;

  // adder klasserne: position & animation
  let rndNum = generateRandomNumber(6);
  document.querySelector("#meteortwo_container").classList.add("pos" + rndNum);
  document.querySelector("#meteortwo_sprite").classList.add("fade_in");
  
  document.querySelector("#meteortwo_container").addEventListener("mousedown", klikMeteorTwo);
  document.querySelector("#meteortwo_container").addEventListener("animationiteration", restartMeteorTwo);
}
function klikBlaa() {
  console.log("klikBlaa");
  document.querySelector("#blaakrymmel_container").removeEventListener("mousedown", klikBlaa);

  document.querySelector("#blaakrymmel_sprite").classList.add("forsvind");

  document.querySelector("#blaakrymmel_container").addEventListener("animationend", restartBlaa);
  
  //afspil yay lyd
 document.querySelector("#yay").play();

  // Adder point
  addPoint2();
 printPoints();
}
function restartBlaa() {
  console.log("restartBlaa");
  document.querySelector("#blaakrymmel_container").removeEventListener("mousedown", restartBlaa);
  document.querySelector("#blaakrymmel_container").removeEventListener("animationiteration", restartBlaa);
  // fjern alle klasser
  document.querySelector("#blaakrymmel_container").classList = "";
  document.querySelector("#blaakrymmel_sprite").classList = "";
  // offsetHeight
  document.querySelector("#blaakrymmel_container").offsetHeight;
  // adder klasserne: position & animation
  //finder random tal:
  let rndNum = generateRandomNumber(6);

  document.querySelector("#blaakrymmel_container").classList.add("pos" + rndNum);
  document.querySelector("#blaakrymmel_sprite").classList.add("fade_in");
  document.querySelector("#blaakrymmel_container").addEventListener("mousedown", klikBlaa);
  document.querySelector("#blaakrymmel_container").addEventListener("animationiteration", restartBlaa);
}
function klikOrange() {
  console.log("klikOrange");
  document.querySelector("#orangekrymmel_container").removeEventListener("mousedown", klikOrange);

  document.querySelector("#orangekrymmel_sprite").classList.add("forsvind");

  document.querySelector("#orangekrymmel_container").addEventListener("animationend", restartOrange);

  //afspil yay lyd
  document.querySelector("#yay").play();

  // Adder point
  addPoint();
  printPoints();
}
function restartOrange() {
  console.log("restartOrange");
  document.querySelector("#orangekrymmel_container").removeEventListener("animationend", restartOrange);
  document.querySelector("#orangekrymmel_container").removeEventListener("animationiteration", restartOrange);
  // fjern alle klasser
  document.querySelector("#orangekrymmel_container").classList = "";
  document.querySelector("#orangekrymmel_sprite").classList = "";
  // offsetHeight
  document.querySelector("#orangekrymmel_container").offsetHeight;
  // adder klasserne: position & animation
  //finder random tal:
  let rndNum = generateRandomNumber(6);

  document.querySelector("#orangekrymmel_container").classList.add("pos" + rndNum);
  document.querySelector("#orangekrymmel_sprite").classList.add("fade_in");
  document.querySelector("#orangekrymmel_container").addEventListener("mousedown", klikOrange);
  document.querySelector("#orangekrymmel_container").addEventListener("animationiteration", restartOrange);
}

function removeLives() {
  lives = lives - 1;
}
function game_over() {
  console.log("game_over");
  //afspil gameover lyd
  document.querySelector("#gameover").play();

  document.querySelector("#meteorone_container").classList.remove("fade_in");
  document.querySelector("#meteortwo_container").classList.remove("fade_in");
  document.querySelector("#blaakrymmel_container").classList.remove("fade_in");
  document.querySelector("#orangekrymmel_container").classList.remove("fade_in");

  document.querySelector("#meteorone_container").removeEventListener("animationend", restartMeteor);
  document.querySelector("#meteortwo_container").removeEventListener("animationend", restartMeteorTwo);
  document.querySelector("#blaakrymmel_container").removeEventListener("animationend", restartBlaa);
  document.querySelector("#orangekrymmel_container").removeEventListener("animationend", restartOrange);

  hideAllScreens();
  document.querySelector("#game_over").classList.remove("hide");
  document.querySelector("#tryagain_btn").addEventListener("mousedown", sidenVises);

}
function level_complete() {
  console.log("level_complete");
  //afspil levelcomplete lyd
  document.querySelector("#levelcomplete").play();
  document.querySelector("#level_complete").classList.remove("hide");
  document.querySelector("#tryagain2_btn").addEventListener("mousedown", sidenVises);
}

function stopSpillet(){
  console.log("stopSpillet");
  document.querySelector("#tid").classList.remove("shrink");
  document.querySelector("#tid").removeEventListener("animationend", stopSpillet);
  //vundet eller tabt
  if (lives === 0) {
    game_over();
  } else {
    level_complete();
  }
    if (points >= 10) {
      level_complete();
    } else {
      game_over();
    }
    document.querySelector("#tid").classList.remove("shrink");
    document.querySelector("#tid").removeEventListener("animationend", stopSpillet);

    //stopper lyde
    document.querySelector("#baggrundsmusik").pause();
    document.querySelector("#baggrundsmusik").currentTime=0;
    document.querySelector("#eksplosion").pause();
    document.querySelector("#yay").pause();
}

function generateRandomNumber(max) {
  return Math.floor(Math.random() * max) + 1;
}
function hideAllScreens() {
  console.log("hideAllScreens");
  document.querySelector("#game_over").classList.add("hide");
  document.querySelector("#level_complete").classList.add("hide");
  document.querySelector("#start").classList.add("hide");
}
