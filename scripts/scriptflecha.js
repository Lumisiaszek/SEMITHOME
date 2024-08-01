// Muestra el botón cuando el usuario hace scroll hacia abajo
window.onscroll = function() {
  var scrollToTopButton = document.getElementById("scrollToTopButton");
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    scrollToTopButton.style.display = "block";
  } else {
    scrollToTopButton.style.display = "none";
  }
};

// Desplazamiento suave hacia la parte superior
document.getElementById("scrollToTopButton").addEventListener("click", function(event) {
  event.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
