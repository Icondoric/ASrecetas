document.addEventListener("DOMContentLoaded", function () {
    // Ocultar el overlay cuando se carga la página
    hideLoadingOverlay();
    // Agregar imagen centrada al cuerpo del documento
    showCenteredImage();

    // Agregar evento de clic al enlace de "Recetas"
    var recetasLink = document.getElementById("recetas-link");
    if (recetasLink) {
        recetasLink.addEventListener("click", function (event) {
            // Prevenir el comportamiento predeterminado del enlace
            event.preventDefault();

            // Mostrar el overlay de carga antes de redirigir
            showLoadingOverlay();

            // Simular un tiempo de espera antes de redirigir
            setTimeout(function () {
                // Redirigir a la página ventana2.html
                window.location.href = "ventana2.html";
            }, 1000); // Puedes ajustar el tiempo según tus necesidades
        });
    }
});

// Función para mostrar la imagen centrada
function showCenteredImage() {
    var centeredImage = document.createElement("img");
    centeredImage.src = "data/pngNacional.png"; // Ajusta la ruta de la imagen
    centeredImage.alt = "Cargando...";
    centeredImage.style.display = "none"; // Inicialmente oculto
    centeredImage.style.position = "fixed";
    centeredImage.style.top = "50%";
    centeredImage.style.left = "50%";
    centeredImage.style.transform = "translate(-50%, -50%)";

    // Agrega la imagen al cuerpo del documento
    document.body.appendChild(centeredImage);

    // Muestra la imagen centrada
    centeredImage.style.display = "block";
}

// Función para mostrar el overlay de carga
function showLoadingOverlay() {
    var loadingOverlay = document.getElementById("loading-overlay");
    if (loadingOverlay) {
        loadingOverlay.style.display = "flex";
    }
}

// Función para ocultar el overlay de carga
function hideLoadingOverlay() {
    var loadingOverlay = document.getElementById("loading-overlay");
    if (loadingOverlay) {
        loadingOverlay.style.display = "none";
    }
}

// Mostrar el overlay de carga al cambiar de página
window.addEventListener("beforeunload", function () {
    showLoadingOverlay();
});
