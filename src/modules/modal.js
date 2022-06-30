import animate from './animate'

const modal = () => {
    const buttons = document.querySelectorAll('.popup-btn');
    const modal = document.querySelector('.popup');
    const popupClose = modal.querySelector('.popup-close');
   

    const animateModal = () => {
        if (screen.width > 768) {
            animate({
                duration: 700,
                timing(timeFraction) {
                    return 1;
                },
                draw(progress) {
                    modal.style.opacity = progress
                    modal.style.display = 'block' 
                } 
            });
        } else {
            modal.style.display = 'block' 
        }
    }
   
    

    

    buttons.forEach(btn => { 
        btn.addEventListener('click', () => {
            animateModal()
    
        })
    })
    popupClose.addEventListener('click', () => {
        modal.style.display = 'none';

        
    })

    

}

export default modal