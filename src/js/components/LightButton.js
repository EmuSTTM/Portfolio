// El menu desplegable para colores que está en el modo Computer

import { MoonSvg } from "./MoonSVG.js";
import { SunSvg } from "./SunSVG.js";

export function LightButton() {
  const button = document.getElementById("menu_dropbtn");
  const menu = document.getElementById("menu_items");
  button.addEventListener("click", function () {
    expandLightButton(button, menu);
  });

  const dropBtn = document.getElementById("menu_dropbtn");

  systemLightDetecter(dropBtn);

  const DarkButton = document.getElementById("headlessui-menu-item-dark");
  DarkButton.addEventListener("click", () => {
    document.documentElement.setAttribute("data-color-mode", "dark");
    dropBtn.innerHTML = MoonSvg;
    expandLightButton(button, menu);
  });

  const modeLightButton = document.getElementById("headlessui-menu-item-light");
  modeLightButton.addEventListener("click", () => {
    document.documentElement.setAttribute("data-color-mode", "light");
    dropBtn.innerHTML = SunSvg;
    expandLightButton(button, menu);
  });

  const systemButton = document.getElementById("headlessui-menu-item-system");
  systemButton.addEventListener("click", () => {
    systemLightDetecter(dropBtn, true);
    expandLightButton(button, menu);
  });

  // Añadimos las clases dropdown-menu_active y quitamos al resto cuando damos click
  const buttons = document.querySelectorAll(".menu_item");
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
      if (this.classList.contains("dropdown-menu_active")) {
        return;
      } else {
        for (let j = 0; j < buttons.length; j++) {
          buttons[j].classList.remove("dropdown-menu_active");
        }
        this.classList.add("dropdown-menu_active");
      }
    });
  }
}

function expandLightButton(button, menu) {
  const expanded = button.getAttribute("aria-expanded") === "true" || false;
  button.setAttribute("aria-expanded", !expanded);
  menu.setAttribute("aria-hidden", expanded);
}

function systemLightDetecter(dropBtn, button = false) {
  const actualColorMode =
    document.documentElement.getAttribute("data-color-mode");
  if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    document.documentElement.setAttribute("data-color-mode", "dark");
    dropBtn.innerHTML = MoonSvg;
  } else if ((actualColorMode && actualColorMode === "light") || button) {
    document.documentElement.setAttribute("data-color-mode", "light");

    dropBtn.innerHTML = SunSvg;
  }
}
