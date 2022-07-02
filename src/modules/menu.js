
const menu = () => {
    const menuBtn = document.querySelector('.menu');
    const menu = document.querySelector('menu');
    const closeBtn = menu.querySelector('.close-btn');
    const menuItems = menu.querySelectorAll('ul>li>a')
   

    const hendleMenu = () => {
        menu.classList.toggle('active-menu');
    }
    

    menuBtn.addEventListener('click', hendleMenu);
    closeBtn.addEventListener('click', hendleMenu);
    menuItems.forEach(menuItem => menuItem.addEventListener('click', hendleMenu));
}

export default menu;