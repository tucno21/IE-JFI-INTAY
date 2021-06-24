

const toggleMenu = document.getElementById('menu-toggle');
const topMenu = document.getElementById('top-menu');


toggleMenu.addEventListener('click', () => {
    topMenu.classList.toggle('activador');
});