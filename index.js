var buttons = [
  { key: "a", class: ".a", sound: "sounds/Voice A.m4a" },
  { key: "b", class: ".b", sound: "sounds/Voice B.m4a" },
  { key: "c", class: ".c", sound: "sounds/Voice C.m4a" },
  { key: "d", class: ".d", sound: "sounds/Voice D.m4a" },
  { key: "e", class: ".e", sound: "sounds/Voice E.m4a" },
  { key: "f", class: ".f", sound: "sounds/Voice F.m4a" },
  { key: "g", class: ".g", sound: "sounds/Voice G.m4a" },
  { key: "h", class: ".h", sound: "sounds/Voice H.m4a" },
  { key: "i", class: ".i", sound: "sounds/Voice I.m4a" },
  { key: "j", class: ".j", sound: "sounds/Voice J.m4a" },
  { key: "k", class: ".k", sound: "sounds/Voice K.m4a" },
  { key: "l", class: ".l", sound: "sounds/Voice L.m4a" },
  { key: "m", class: ".m", sound: "sounds/Voice M.m4a" },
  { key: "n", class: ".n", sound: "sounds/Voice N.m4a" },
  { key: "o", class: ".o", sound: "sounds/Voice O.m4a" },
  { key: "p", class: ".p", sound: "sounds/Voice P.m4a" },
  { key: "q", class: ".q", sound: "sounds/Voice Q.m4a" },
  { key: "r", class: ".r", sound: "sounds/Voice R.m4a" },
  { key: "s", class: ".s", sound: "sounds/Voice S.m4a" },
  { key: "t", class: ".t", sound: "sounds/Voice T.m4a" },
  { key: "u", class: ".u", sound: "sounds/Voice U.m4a" },
  { key: "v", class: ".v", sound: "sounds/Voice V.m4a" },
  { key: "w", class: ".w", sound: "sounds/Voice W.m4a" },
  { key: "x", class: ".x", sound: "sounds/Voice X.m4a" },
  { key: "y", class: ".y", sound: "sounds/Voice Y.m4a" },
  { key: "z", class: ".z", sound: "sounds/Voice Z.m4a" },
];

for (var i = 0; i < buttons.length; i++) {
  var button = document.querySelector(buttons[i].class);

  button.addEventListener("click", handleClick(buttons[i].sound, i));
}

window.addEventListener("keydown", function (event) {
  var key = event.key;
  for (var i = 0; i < buttons.length; i++) {
    if (buttons[i].key === key) {
      var audio = new Audio(buttons[i].sound);
      audio.play();

      buttonAnimation(key);

      break;
    }
  }
});

function handleClick(sound, i) {
  return function () {
    var audio = new Audio(sound);

    audio.play();
    buttonAnimation(buttons[i].key);
  };
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}
