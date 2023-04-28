
import { HeaderMobile } from "./components/HeaderMobile.js";
import { HeaderComputer } from "./components/HeaderComputer.js";

import {detectCurrentSection} from "./helpers/detectCurrentSection.js";

import ExpandedButton, { systemLightDetecter } from "./components/ExpandedButton.js";
import LightButton from "./components/LightButton.js";
import navListeners from "./helpers/headerEvListeners.js"

const mq = window.matchMedia("(min-width: 768px)");
const header = document.getElementById("header");

// Detectamos el mode color del navegador, dark o light
systemLightDetecter()

/*
Manejamos el renderizado del header / funcionalidades del header
cuando se cambia el tamaño de pantalla.
*/
if ( mq.matches === true ) {
    header.innerHTML = HeaderComputer;
    LightButton()
    navListeners(mq.matches)
    detectCurrentSection()
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
        detectCurrentSection()
        
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




