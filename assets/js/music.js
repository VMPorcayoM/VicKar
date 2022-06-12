
const canciones = [
  "deantes",
  "esoymas",
  "tudequevas",
  "morethanwords",
  "lacomplicidad",
  "cuandoestoycontigo",
];
var pos = 0;
var audio = document.createElement("audio");
document.body.appendChild(audio);
audio.src = "audio/deantes.mp3";
audio.volume = 0.5;
document.body.addEventListener("mousemove", function () {
  setTimeout(() => {
    audio.play();
  }, 2000);
});

audio.addEventListener("ended", () => {
  playmorethawords();
});
function playmorethawords() {
  pos++;
  if (pos > 3) {
    pos = 0;
  }
  audio.src = "audio/" + canciones[pos] + ".mp3";
  audio.play();
}

var sobremi = document.getElementById("zoom");
var afectado = document.getElementById("pregunta");
sobremi.addEventListener(
  "mouseover",
  () => {
    afectado.className = "zoomin";
  },
  false
);

sobremi.addEventListener(
  "mouseout",
  () => {
    afectado.className = "";
  },
  false
);

function siobligatorio(){
  document.getElementById('no').innerHTML="Simooon";
}

function siobligatoriodos(){
  document.getElementById('no').innerHTML="Nel prro";
}