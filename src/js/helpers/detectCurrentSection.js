/* 
Función para detectar la posición actual del scroll e iluminar 
el anchor del header.
*/

export function detectCurrentSection() {
  const links = document.querySelectorAll(".nav__link");
  // Crea un IntersectionObserver que observe cada sección de la página
  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        // Verifica si la sección está en el viewport
        if (entry.isIntersecting) {
          const sectionId = entry.target.getAttribute("id");
          // Encuentra el enlace correspondiente en el encabezado
          let link;
          if (sectionId !== "home") {
            link = document.querySelector(`.nav__link[href="#${sectionId}"]`);
          }
          // Quita la clase "active" de cualquier otro enlace que la tenga
          for (let i = 0; i < links.length; i++) {
            links[i].classList.remove("nav__link-active");
          }
          if (sectionId !== "home") {
            // Agrega la clase "active" al enlace correspondiente
            link?.classList.add("nav__link-active");
          }
        }
      });
    },
    { threshold: 0.5 }
  );
  // Observa cada sección de la página
  const sections = document.querySelectorAll(".section");
  sections.forEach(function (section) {
    observer.observe(section);
  });
  const sectionHome = document.getElementById("home");
  observer.observe(sectionHome);
}
