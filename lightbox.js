// Seleccionar elementos del DOM
const lightbox = document.querySelector('#lightbox');
const portfolioItems = document.querySelectorAll('.portfolio-item img');

// Crear el elemento de imagen para el lightbox si no existe
if (!document.querySelector('.lightbox-content')) {
    const lightboxImg = document.createElement('img');
    lightboxImg.className = 'lightbox-content';
    lightbox.insertBefore(lightboxImg, lightbox.firstChild);
}

const lightboxImg = document.querySelector('.lightbox-content');
const closeButton = document.querySelector('.lightbox .close');

// Función para abrir el lightbox
function openLightbox(imgSrc) {
    lightboxImg.src = imgSrc;
    lightbox.style.display = 'flex';
    document.body.style.overflow = 'hidden'; // Prevenir scroll
}

// Función para cerrar el lightbox
function closeLightbox() {
    lightbox.style.display = 'none';
    document.body.style.overflow = 'auto'; // Restaurar scroll
}

// Agregar event listeners a todas las imágenes del portfolio
portfolioItems.forEach(img => {
    img.addEventListener('click', (e) => {
        e.preventDefault();
        openLightbox(e.target.src);
    });
});

// Cerrar lightbox al hacer click en el botón de cerrar
closeButton.addEventListener('click', closeLightbox);

// Cerrar lightbox al hacer click fuera de la imagen
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        closeLightbox();
    }
});

// Cerrar lightbox con la tecla ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeLightbox();
    }
});