
export const HeaderMobile = `
<nav class="nav" id="nav">


        <a href="#home" class="nav__logo"><img src="./images/favicon.svg"></a>

        <section class="menu_container">
            <nav class="menu_links">
                <a class="nav_link-achor" target="_blank" rel="noopener noreferrer"
                    href="https://www.linkedin.com/in/nicol%C3%A1s-perdomo-5b270b23a/"><svg width="24" height="24"
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

                <button class="nav__toggle" id="nav-toggle" type="button" aria-haspopup="true" aria-expanded="false">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
                        height="20px">
                        <path fill-rule="evenodd"
                            d="M3 7a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 13a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                            clip-rule="evenodd"></path>
                    </svg>
                </button>
            </nav>

        </section>

    </nav>
    <main class="menu_options" id="menu_options" aria-hidden="true" aria-labelledby="nav-toggle">
        <nav class="menu_list">


            <a class="menu_link-anchor" id="menu-item-1" role="menuitem" tabindex="-1" href="#projects"><svg
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
                    height="24px">
                    <path fill-rule="evenodd"
                        d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                        clip-rule="evenodd"></path>
                    <path
                        d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z">
                    </path>
                </svg> Proyectos</a>

            <a class="menu_link-anchor" id="menu-item-2" role="menuitem" tabindex="-1" href="/#skills"><svg
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
                    height="24px">
                    <path fill-rule="evenodd"
                        d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z"
                        clip-rule="evenodd"></path>
                </svg> Habilidades</a>


        </nav>

        <section class="menu_list" role="none">
            <span class="menu_heading" role="none">Modo de color</span>


            <section class="menu_modes" role="none">
                <button class="menu_mode" id="headlessui-menu-item-:r7f:" role="menuitem" tabindex="-1"><svg
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
                        width="24">
                        <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                    </svg> Oscuro
                </button>

                <button class="menu_mode menu_active" id="headlessui-menu-item-:r7g:" role="menuitem" tabindex="-1"><svg
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
                        width="24">
                        <path fill-rule="evenodd"
                            d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z"
                            clip-rule="evenodd"></path>
                    </svg> Sistema
                </button>
                <button class="menu_mode" id="headlessui-menu-item-:r7h:" role="menuitem" tabindex="-1"><svg
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
                        width="24">
                        <path fill-rule="evenodd"
                            d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                            clip-rule="evenodd"></path>
                    </svg> Claro
                </button>
            </section>
        </section>
    </main>
`;
