
const menu = () => {

    const menu = document.querySelector('menu');

	const handleMenu = () => {
		menu.classList.toggle('active-menu');
	};
	document.body.addEventListener('click', e => {
		if (e.target.closest('.menu') || e.target.matches('menu a')) {
			handleMenu();
		} else if (!e.target.closest('menu')) {
			if (menu.classList.contains('active-menu')) {
				handleMenu();
			}
		}
	});
    // const menuBtn = document.querySelector('.menu');
    // const menu = document.querySelector('menu');
    // const closeBtn = menu.querySelector('.close-btn');
    // const menuItems = menu.querySelectorAll('ul>li>a')
   

    // const hendleMenu = () => {
    //     menu.classList.toggle('active-menu');
    // }
    

    // menuBtn.addEventListener('click', hendleMenu);
    // closeBtn.addEventListener('click', hendleMenu);
    // menuItems.forEach(menuItem => menuItem.addEventListener('click', hendleMenu));
}

export default menu;