

export default function LightButton () {
    const button = document.getElementById('menu_dropbtn');
    const menu = document.getElementById('menu_items');
    button.addEventListener('click', function() {
        

        const expanded = button.getAttribute('aria-expanded') === 'true' || false;
        button.setAttribute('aria-expanded', !expanded);
        menu.setAttribute('aria-hidden', expanded);
      });
}
