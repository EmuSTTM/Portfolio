
import { HeaderMobile } from "./components/HeaderMobile.js";
import { HeaderComputer } from "./components/HeaderComputer.js";

import ExpandedButton from "./components/ExpandedButton.js";
import LightButton from "./components/LightButton.js";
import navListeners from "./navListeners.js"

const mq = window.matchMedia("(min-width: 768px)");
const header = document.getElementById("header");


/*
Si la primera vez está en hancho de computadora,
lo cargamos a computadora
*/
if ( mq.matches === true ) {
    header.innerHTML = HeaderComputer;
    LightButton()
    navListeners(mq.matches)
} 
if (mq.matches === false){
    ExpandedButton()
    navListeners()
}

function renderHeader ( mqMatches ) {
    if ( mqMatches === true ) {
        header.innerHTML = HeaderComputer;
        LightButton()
        navListeners(mqMatches)
        
    }

    if ( mqMatches === false ) {
        header.innerHTML = HeaderMobile;
        ExpandedButton()
        navListeners()
    }
}

mq.addEventListener("change", () =>{
    renderHeader( mq.matches )
    
})




const DarkButton = document.getElementById('headlessui-menu-item-:r7f:')
DarkButton.addEventListener("click", () => {
  document.documentElement.setAttribute('data-color-mode', 'dark');
  console.log('el modo es dark')
})