
  // Función para reproducir o pausar la música
function reproducirMusica() {
    const musica = document.getElementById("miMusica");
    if (musica.paused) {
      musica.play();
    } else {
      musica.pause();
    }
  }
  