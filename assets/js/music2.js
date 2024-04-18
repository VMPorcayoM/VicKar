const canciones = [
    "quierover",
    "soloporti",
    "mca",
  ];
  var pos = 0;
  var audio = document.createElement("audio");
  document.body.appendChild(audio);
  audio.src = "audio/quierover.mp3";
  audio.volume = 0.5;
  document.body.addEventListener("mousemove", function () {
    setTimeout(() => {
      audio.play();
    }, 500);
  });
  
  audio.addEventListener("ended", () => {
    playmorethawords();
  });
  function playmorethawords() {
    pos++;
    if (pos > canciones.length-1) {
      pos = 0;
    }
    audio.src = "audio/" + canciones[pos] + ".mp3";
    audio.play();
  }
  