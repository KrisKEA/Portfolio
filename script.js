// når siden er loaded, viser jeg funktionen sidenVises
window.addEventListener("load", sidenVises);

let lives;
let points;

function sidenVises() {
  console.log("sidenVises");
  //skjul andre skærme
  //document.querySelector("#game_over").classList.add("hide");
  //document.querySelector("#level_complete").classList.add("hide");
  //vis startskærm
  //document.querySelector("#start").classList.remove("hide");
  //når der klikkes på startknap, går vi til funktionen startSpillet
  //document.querySelector("#startknap").addEventListener("click", startSpillet);
  document.querySelector("#orangekrymmel_container").classList.add("fade_in");
  document.querySelector("#blåkrymmel_container").classList.add("fade_in");
  document.querySelector("#meteorone_container").classList.add("fade_in");
}

function startSpillet() {
  console.log("startSpillet");
  //skjul startskærm
  //document.querySelector("#start").classList.add("hide");
  //nulstil point og liv
  points = 0;
  lives = 3;
  //skriv point og liv ud

  //start timer-animation
  console.log("tiden starter");
  document
    .querySelector("#tid_container")
    .removeEventListener("click", startSpillet);
  document.querySelector("#tid_sprite").classList.add("shrink");
  document
    .querySelector("#tid_container")
    .addEventListener("animationend", stopSpillet);
  //random position på gode elementer

  //random position på dårlige elementer

  //start fade_in animation på elementer
  console.log("elementer fader ind");
  // document
  // .querySelector("#orangekrymmel_container")
  //.addEventListener("click", fade_in);
  //document
  // .querySelector("#blåkrymmel_container")
  //  .addEventListener("click", fade_in);
  //document
  // .querySelector("#meteorone_container")
  // .addEventListener("click", fade_in);

  //når der klikkes på good elements, går vi til good forsvind function
  function klikOrange() {
    console.log("klikOrange");
    document.querySelector("#orangekrymmel_sprite").classList.add("forsvind");
  }
  //når der klikkes på good elements2, går vi til good forsvind function2
  function klikBlå() {
    console.log("klikBlå");
    document.querySelector("#blåkrymmel_sprite").classList.add("forsvind");
  }
  //når der klikkes på bad elements, går vi til bad forsvind function
  function klikMeteor() {
    console.log("klikMeteor");
    document.querySelector("#meteorone_sprite").classList.add("rotation");
    document.querySelector("#meteorone_sprite").classList.add("forsvind");
  }

  function goodClick() {}
  //få et point

  //skriv point ud

  //afspil good lyd

  //stop fade_in animation

  //start good forsvind animation

  function goodClick2() {}
  //få to points

  //skriv point ud

  //afspil good lyd

  //stop fade_in animation

  //start good forsvind animation

  function goodReset() {
    //vis elementer igen
    //ny random position
    //genstart fade_in animation
  }
}
