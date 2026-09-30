// FUNCIONES DE LOS BOTONES
function compartirTarjeta() {
  if (navigator.share) {
    navigator.share({
      title: "Cafetin Olga",
      text: "Conoce la tarjeta digital de Cafetín Olga.",
      url: window.location.href
    });
  } else {
    alert("Copia el enlace de esta pagina para compartir la tarjeta.");
  }
}

function copiarEnlace() {
  navigator.clipboard.writeText(window.location.href).then(function() {
    alert("¡Enlace copiado correctamente!");
  });
}