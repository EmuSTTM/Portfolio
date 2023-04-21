
import { HeaderMobile } from "./components/HeaderMobile.js";
import { HeaderComputer } from "./components/HeaderComputer.js";
import ExpandedButton from "./components/ExpandedButton.js";
import LightButton from "./components/LightButton.js";

const mq = window.matchMedia("(min-width: 768px)");
const header = document.getElementById("header");


/*
Si la primera vez está en hancho de computadora,
lo cargamos a computadora
*/
if ( mq.matches === true ) {
    header.innerHTML = HeaderComputer;
    LightButton()
} 
if (mq.matches === false){
    ExpandedButton()
}

function renderHeader ( mqMatches ) {
    if ( mqMatches === true ) {
        header.innerHTML = HeaderComputer;
        LightButton()
    }

    if ( mqMatches === false ) {
        header.innerHTML = HeaderMobile;
        ExpandedButton()
    }
}

mq.addEventListener("change", () =>{
    renderHeader( mq.matches )
    
})

