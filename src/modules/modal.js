import animate from './helpers';
import sendForm from './sendForm';

const modal = () => {
    const buttons = document.querySelectorAll('.popup-btn');
    const modal = document.querySelector('.popup');
    const popupClose = modal.querySelector('.popup-close');
   

    const animateModal = () => {
        if (screen.width > 768) {
            animate({
                duration: 800,
                timing(timeFraction) {
                    return(timeFraction);
                },
                draw(progress) {
                    modal.style.opacity = progress;
                    modal.style.display = 'block' ;
                } 
            });
        } else {
            modal.style.display = 'block' ;
        }
    }

    buttons.forEach(btn => { 
        btn.addEventListener('click', () => {
            animateModal()
    
        })
    })


    modal.addEventListener('click', (e)=> {
        if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {
            modal.style.display = 'none';
        }
    })

    

}

export default modal;