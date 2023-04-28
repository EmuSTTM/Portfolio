export const HeaderComputer = `
<nav class="nav" id="nav">
<a href="#home" class="nav__logo"><img src="./images/favicon.svg"></a>

<section class="menu_container">
    <nav class="menu_links">
    
        <a href="#projects" class="nav__link">Proyectos</a>
        <a href="#skills" class="nav__link">Habilidades</a>
    </nav>

    <div class="menu_divider"></div>
    
    <nav class="menu_links"><a class="nav_link-achor" target="_blank"
            rel="noopener noreferrer" href="https://www.linkedin.com/in/nicol%C3%A1s-perdomo-5b270b23a/"><svg width="24" height="24"
                viewBox="0 0 512 512" fill="currentColor">
                <path
                    d="M444.2 32h-374C49.9 32 32 46.7 32 66.9v374.7A39.4 39.4 0 0070.3 480H444c20.5 0 35.9-18.2 35.9-38.4V67c.1-20.2-15.4-34.9-35.8-34.9zM170.9 405.4h-64.2V206h64.2zM141 175.5h-.5c-20.5 0-33.8-15.3-33.8-34.4 0-19.5 13.6-34.4 34.6-34.4s33.9 14.8 34.4 34.4a33.2 33.2 0 01-34.7 34.4zm264.4 230h-64.1V296.2c0-26.1-9.4-44-32.6-44-17.7 0-28.2 12-33 23.7-1.7 4.2-2.1 10-2.1 15.8v113.6h-64.2V206h64.2v27.7c9.3-13.2 23.9-32.4 57.8-32.4 42.2 0 74 27.8 74 87.7z">
                </path>
            </svg></a><a class="nav_link-achor" target="_blank" rel="noopener noreferrer"
            href="https://github.com/EmuSTTM"><svg width="24" height="24" viewBox="0 0 512 512"
                fill="currentColor">
                <path
                    d="M256 32C132.3 32 32 134.9 32 261.7a229.3 229.3 0 00153.2 217.9 17.6 17.6 0 003.8.4c8.3 0 11.5-6.1 11.5-11.4l-.3-39.1a102.4 102.4 0 01-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0025.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6a84.6 84.6 0 012.2-60.8 18.6 18.6 0 015-.5c8.1 0 26.4 3.1 56.6 24.1a208.2 208.2 0 01112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.6 18.6 0 015 .5 84.6 84.6 0 012.2 60.8 90.3 90.3 0 0123 61.6c0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.4 19.4 0 004-.4A229.2 229.2 0 00480 261.7C480 134.9 379.7 32 256 32z">
                </path>
            </svg></a>




            <div class="menu_menuContainer" id="menu_menuContainer">
            <button class="menu_trigger" id="menu_dropbtn" type="button"  aria-haspopup="true" 
                aria-expanded="false"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                    fill="currentColor" aria-hidden="true" width="24" height="24" class="menu_glow">
                    <path fill-rule="evenodd"
                        d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                        clip-rule="evenodd"></path>
                </svg>
            </button>


            <section class="menu_items" aria-hidden="true" aria-labelledby="menu_dropbtn"
                id="menu_items" role="menu" tabindex="0">
                <button class="menu_item"
                    id="headlessui-menu-item-dark" role="menuitem" tabindex="-1"><svg
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                        aria-hidden="true" width="20" height="20">
                        <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                    </svg><span>Oscuro</span>
                </button>
                <button class="menu_item dropdown-menu_active"
                    id="headlessui-menu-item-system" role="menuitem" tabindex="-1"><svg
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                        aria-hidden="true" width="20" height="20">
                        <path fill-rule="evenodd"
                            d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z"
                            clip-rule="evenodd"></path>
                    </svg><span>Sistema</span>
                </button>
                <button class="menu_item "
                    id="headlessui-menu-item-light" role="menuitem" tabindex="-1"><svg
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                        aria-hidden="true" width="20" height="20">
                        <path fill-rule="evenodd"
                            d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                            clip-rule="evenodd"></path>
                    </svg><span>Claro</span>
                </button>
            </section>


        </div>


    </nav>

    
</section>
</nav>

    

`;