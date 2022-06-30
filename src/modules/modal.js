const modal = () => {
    const buttons = document.querySelectorAll('.popup-btn');
    const modal = document.querySelector('.popup');
    const popupClose = modal.querySelector('.popup-close');
   
   
    

    console.log(popupClose)

    buttons.forEach(btn => { 
        btn.addEventListener('click', () => {
            modal.style.display = 'block';  
            

    
        })
    })
    popupClose.addEventListener('click', () => {
        modal.style.display = 'none';

        
    })

    

}

export default modal