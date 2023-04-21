
import { HeaderMobile } from "./components/HeaderMobile.js";
import { HeaderComputer } from "./components/HeaderComputer.js";


const mq = window.matchMedia("(min-width: 768px)");
const nav = document.getElementById("nav");


/*
Si la primera vez está en hancho de computadora,
lo cargamos a computadora
*/
if ( mq.matches === true ) {
    nav.innerHTML = HeaderComputer;
}

function renderHeader ( mqMatches ) {
    if ( mqMatches === true ) {
        nav.innerHTML = HeaderComputer;
    }

    if ( mqMatches === false ) {
        nav.innerHTML = HeaderMobile;
    }
}

mq.addEventListener("change", () =>{
    renderHeader( mq.matches )
    
})