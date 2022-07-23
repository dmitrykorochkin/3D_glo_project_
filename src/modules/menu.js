
// const menu = () => {

//     const menu = document.querySelector('menu');
	

// 	const handleMenu = (e) => {
// 		e.preventDefault();
// 		menu.classList.toggle('active-menu');
// 	};
// 	document.body.addEventListener('click', e => {
		
// 		if (e.target.closest('.menu') || e.target.matches('menu a')) {
// 			handleMenu(e);
// 		} else if (!e.target.closest('menu')) {
// 			if (menu.classList.contains('active-menu')) {
// 				handleMenu(e);
// 			}
// 		}
// 	});

// }

// export default menu;



const menu = () => {
    const menu = document.querySelector('menu');
    const closeBtn = menu.querySelector('.close-btn');

    document.addEventListener('click', e => {
		
        if (e.target.closest('.menu')) {
            menu.classList.add('active-menu');
        } else if (e.target.closest('a') || !e.target.closest('menu')) {
            menu.classList.remove('active-menu');
        }

        if (e.target === closeBtn) e.preventDefault();
    });
};

export default menu


