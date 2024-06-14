const currentURL = window.location.pathname;
const dynamicURLPart = currentURL.split('/').pop();

const menuLinks = document.querySelectorAll('.barra-navegadora a');

// Agregar evento de clic a los enlaces
menuLinks.forEach(link => {
  link.addEventListener('click', function(event) {
   

    // Actualizar la clase active_nav en el enlace
    link.classList.add('active_nav');
    menuLinks.forEach(otherLink => otherLink.classList.remove('active_nav')); // Remove from others

    // Almacenar la URL en LocalStorage
    localStorage.setItem('activeLink', link.href);
  });
});

// Ejecutar al cargar la página
window.addEventListener('DOMContentLoaded', function() {
  // Recuperar URL guardada
  const storedURL = localStorage.getItem('activeLink');

  // Recorrer enlaces del menú
  menuLinks.forEach(link => {
    // Verificar si la URL coincide con la URL almacenada
    if (link.href.endsWith(dynamicURLPart)) {
      // Agregar la clase active_nav si no está presente
      if (!link.classList.contains('active_nav')) {
        link.classList.add('active_nav');
      }
    }
  });

  // Verificar si dynamicURLPart está dentro de un div "otrasoOpciones"
  const dynamicURLElement = document.querySelector(`a[href*="${dynamicURLPart}"]`); // Get the link element
  if (dynamicURLElement && dynamicURLElement.closest('.otrasOpciones')) {
    dynamicURLElement.closest('.otrasOpciones').classList.add('active_nav'); // Add class to the closest .otrasoOpciones div
   // Buscar el div "segundaOpcion" dentro del closest ".otrasoOpciones"
    const segundaOpcionElement = dynamicURLElement.closest('.otrasOpciones').querySelector('.segundaOpcion');
    if (segundaOpcionElement) {
      segundaOpcionElement.classList.add('active_segunda'); // Add class to the segundaOpcion div
    }
    }
});