// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Tu y yo que volvimos a emocionarnos y reir juntos", time: 15 },
  { text: "Tengo miedo de convertirme en una estrella y desaparecer", time: 18 },
  { text: "Lo guardaré en este espacio vacío en mi corazón.", time: 27 },
  { text: "Cuando cierro los ojos, lo tienes claro", time: 32 },
  { text: "Porque te extraño brillando aún más", time: 33 },
  { text: "En tu lugar donde pasaste una larga noche", time: 41 },
  { text: "tomaré un descanso y me quedaré a tu lado", time: 47 },
  { text: "Floreciendo con lágrimas de mi corazón cansado", time: 54 },
  { text: "Cuando mi canción llega al cielo", time: 59 },
  { text: "Lentamente ven a mí como un sueño eterno", time: 67 },
  { text: "Conviértete en una estrella a mi lado", time: 72 },
  { text: "Cuando tu corazón me toca", time: 78 },
  { text: "La luz de las estrellas en el cielo que a veces brilla sobre mí es como", time: 83 },
  { text: "Envolvió calurosamente mi corazón", time: 91 },
  { text: "Gracias por tu respuesta", time: 97 },
  { text: "Cuando cierro los ojos, lo tienes claro", time: 104 },
  { text: "Porque te extraño brillando aún más", time: 108 },
  { text: "En tu lugar donde pasaste una larga noche", time: 144 },
  { text: "tomaré un descanso y me quedaré a tu lado", time: 148 },
  { text: "Lonely before the sun cried", time: 153 },
  { text: "Floreciendo con lágrimas de mi corazón cansado", time: 158 },
  { text: "Cuando mi canción llega al cielo", time: 164 },
  { text: "Lentamente ven a mí como un sueño eterno", time: 169 },
  { text: "Conviértete en una estrella a mi lado hoo hoo", time: 176 },
  { text: "Días inolvidables (inolvidables) (esos días)", time: 183 },
  { text: "Brilla cálidamente en el cielo", time: 188 },
  { text: "Te Amo!!!.", time: 140 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);