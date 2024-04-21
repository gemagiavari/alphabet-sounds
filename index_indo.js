var buttons = [
  { key: "a", class: ".a", sound: "sounds_indo/Voice A_indo.m4a" },
  { key: "b", class: ".b", sound: "sounds_indo/Voice B_indo.m4a" },
  { key: "c", class: ".c", sound: "sounds_indo/Voice C_indo.m4a" },
  { key: "d", class: ".d", sound: "sounds_indo/Voice D_indo.m4a" },
  { key: "e", class: ".e", sound: "sounds_indo/Voice E_indo.m4a" },
  { key: "f", class: ".f", sound: "sounds_indo/Voice F_indo.m4a" },
  { key: "g", class: ".g", sound: "sounds_indo/Voice G_indo.m4a" },
  { key: "h", class: ".h", sound: "sounds_indo/Voice H_indo.m4a" },
  { key: "i", class: ".i", sound: "sounds_indo/Voice I_indo.m4a" },
  { key: "j", class: ".j", sound: "sounds_indo/Voice J_indo.m4a" },
  { key: "k", class: ".k", sound: "sounds_indo/Voice K_indo.m4a" },
  { key: "l", class: ".l", sound: "sounds_indo/Voice L_indo.m4a" },
  { key: "m", class: ".m", sound: "sounds_indo/Voice M_indo.m4a" },
  { key: "n", class: ".n", sound: "sounds_indo/Voice N_indo.m4a" },
  { key: "o", class: ".o", sound: "sounds_indo/Voice O_indo.m4a" },
  { key: "p", class: ".p", sound: "sounds_indo/Voice P_indo.m4a" },
  { key: "q", class: ".q", sound: "sounds_indo/Voice Q_indo.m4a" },
  { key: "r", class: ".r", sound: "sounds_indo/Voice R_indo.m4a" },
  { key: "s", class: ".s", sound: "sounds_indo/Voice S_indo.m4a" },
  { key: "t", class: ".t", sound: "sounds_indo/Voice T_indo.m4a" },
  { key: "u", class: ".u", sound: "sounds_indo/Voice U_indo.m4a" },
  { key: "v", class: ".v", sound: "sounds_indo/Voice V_indo.m4a" },
  { key: "w", class: ".w", sound: "sounds_indo/Voice W_indo.m4a" },
  { key: "x", class: ".x", sound: "sounds_indo/Voice X_indo.m4a" },
  { key: "y", class: ".y", sound: "sounds_indo/Voice Y_indo.m4a" },
  { key: "z", class: ".z", sound: "sounds_indo/Voice Z_indo.m4a" },
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
