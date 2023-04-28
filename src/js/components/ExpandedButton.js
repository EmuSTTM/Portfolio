// El menu desplegable que está en el modo mobile 

function changeButton ( expanded ){
    const button = document.getElementById('nav-toggle');
    if (expanded === false) {
        button.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" height="20px"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>`
    }
    if (expanded === true) {
        button.innerHTML = ` <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
        height="20px">
        <path fill-rule="evenodd"
            d="M3 7a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 13a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clip-rule="evenodd"></path>
    </svg>`
    }
}


export default function ExpandedButton () {
    const button = document.getElementById('nav-toggle');
    const menu = document.getElementById('menu_options');
    LightsMode()
    
    button.addEventListener('click', function() {
        HandleExpandedButton ()
      });
}


export function HandleExpandedButton () {
    const button = document.getElementById('nav-toggle');
    const menu = document.getElementById('menu_options');
    const expanded = button.getAttribute('aria-expanded') === 'true' || false;
        button.setAttribute('aria-expanded', !expanded);
        changeButton( expanded, button );
        menu.setAttribute('aria-hidden', expanded);
}



function LightsMode (){
    const DarkButton = document.getElementById('headlessui-menu-item-:r7f:')
    DarkButton.addEventListener("click", () => {
    document.documentElement.setAttribute('data-color-mode', 'dark');
    })

    const modeLightButton = document.getElementById('headlessui-menu-item-:r7h:')
    modeLightButton.addEventListener("click", () => {
    document.documentElement.setAttribute('data-color-mode', 'light');

    })

    const systemButton = document.getElementById('headlessui-menu-item-:r7g:')
    systemButton.addEventListener("click", () => {
    systemLightDetecter(true)
    })

    // Añadimos las clases menu_active y quitamos al resto cuando damos click
    const buttons = document.querySelectorAll('.menu_mode');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function() {
          if (this.classList.contains('menu_active')) {
            return;
          } else {
            for (let j = 0; j < buttons.length; j++) {
              buttons[j].classList.remove('menu_active');
            }
            this.classList.add('menu_active');
            HandleExpandedButton ()
          }
        });
      }

}



export function systemLightDetecter(button = false){
    const actualColorMode = document.documentElement.getAttribute('data-color-mode')
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.setAttribute('data-color-mode', 'dark');
      
  
    } else if((actualColorMode && actualColorMode === 'light') || button) {
      document.documentElement.setAttribute('data-color-mode', 'light');  
    }
  }