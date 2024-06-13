 const links = document.querySelectorAll('.barra-navegadora a');

links.forEach(link => {
    link.addEventListener('click', function () {
        links.forEach(l => l.classList.remove('active'));
        this.classList.add('active');

        // Almacenar el enlace activo en Local Storage
        localStorage.setItem('activeLink', this.href);
    });
});

// Recuperar el enlace activo y agregar la clase "active" al cargar la página
const activeLink = localStorage.getItem('activeLink');
if (activeLink) {
    links.forEach(link => {
        if (link.href === activeLink) {
            link.classList.add('active');
        }
    });
}