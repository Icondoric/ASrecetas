document.addEventListener("DOMContentLoaded", function () {
    // Ocultar el overlay cuando se carga la página
    hideLoadingOverlay();
    // Agregar imagen centrada al cuerpo del documento
    showCenteredImage();
});

// Función para ocultar el overlay de carga
function hideLoadingOverlay() {
    var loadingOverlay = document.getElementById("loading-overlay");
    if (loadingOverlay) {
        loadingOverlay.style.display = "none";
    }
}

// Función para mostrar una imagen centrada en el cuerpo del documento
function showCenteredImage() {
    var centeredImage = document.createElement("img");
    centeredImage.src = "data/pngNacional.png"; // Ajusta la ruta de la imagen
    centeredImage.alt = "Imagen centrada";
    centeredImage.style.display = "block";
    centeredImage.style.margin = "0 auto";

    // Agrega la imagen al cuerpo del documento
    document.body.appendChild(centeredImage);
}

// Mostrar el overlay de carga al cambiar de página
window.addEventListener("beforeunload", function () {
    var loadingOverlay = document.getElementById("loading-overlay");
    if (loadingOverlay) {
        loadingOverlay.style.display = "flex";
    }
});
