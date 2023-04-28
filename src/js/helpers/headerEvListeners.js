/*
Añade event Listeners para actualizar el header al hacer scroll hacia abajo
o al darle click a cualquier anchor en el modo mobile, de modo que cierre el header
*/

import {HandleExpandedButton} from "../components/ExpandedButton.js";
export default function navListeners ( computerView = false) {
  const menu_options = document.getElementById("menu_options")


  // Para que el header tenga fondo cuando se scrolle para abajo
  const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting  ) {

          const mq = window.matchMedia("(min-width: 768px)");
          let expandedButton = true;
          const expanded = menu_options?.getAttribute('aria-hidden') === 'false';
          
          if( mq.matches === false) {
            expandedButton = document.getElementById('nav-toggle').getAttribute('aria-expanded') === 'true';
          } 
          
          
          if ((!expanded && !expandedButton) || mq.matches === true){
            document.getElementById('header').classList.remove('header-blured');
          }
        } else {
          document.getElementById('header').classList.add('header-blured');
        }
      });
    }, {threshold: 1});
    observer.observe(document.getElementById('home'));
  
  // Configuración sólo para mobile
  if (computerView === false ){
    // Para que el background del header tenga fondo al ser expandido.
  const observerMenu = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      if (mutation.attributeName === 'aria-hidden') {
        const expanded = menu_options.getAttribute('aria-hidden') === 'true';
        if(expanded === false ){
          document.getElementById('header').classList.add('header-blured');
        }
        if(expanded === true) {
          if (window.pageYOffset < header.offsetHeight) {
            document.getElementById('header').classList.remove('header-blured');
          }
        }
      }
    });
  });
  observerMenu.observe(menu_options, { attributes: true });

// Hacemos que los menu-items-1 quiten el expanded del header al ser clickeado
document.getElementById('menu-item-1').addEventListener("click", () => {
  HandleExpandedButton();
});
document.getElementById('menu-item-2').addEventListener("click", () => {
  HandleExpandedButton();
});
}

  
}

