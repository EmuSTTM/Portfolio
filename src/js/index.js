import { systemLightDetecter } from "./components/ExpandedButton.js";
import navListeners from "./helpers/headerEvListeners.js";
const mq = window.matchMedia("(min-width: 768px)");
const header = document.getElementById("header");

//Detectamo el color del sistema por defecto
systemLightDetecter();
// Preparamos el sitio para distintos dispositivos mobiles
async function renderHeader(mqMatches) {
  if (mqMatches === true) {
    const { HeaderComputer } = await import("./components/HeaderComputer.js");
    const { LightButton } = await import("./components/LightButton.js");

    const { detectCurrentSection } = await import(
      "./helpers/detectCurrentSection.js"
    );

    header.innerHTML = HeaderComputer;
    LightButton();
    navListeners(mqMatches);
    detectCurrentSection();
  }

  if (mqMatches === false) {
    const { HeaderMobile } = await import("./components/HeaderMobile.js");
    const { ExpandedButton } = await import("./components/ExpandedButton.js");

    header.innerHTML = HeaderMobile;
    ExpandedButton();
    navListeners();
  }
}

renderHeader(mq.matches);

mq.addEventListener("change", () => {
  renderHeader(mq.matches);
});
