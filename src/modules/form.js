const form = () => {

const inputAll = document.querySelectorAll('input[type="text"]');
const inputMessange = document.querySelector('input[placeholder="Ваше сообщение"]');
const inputEmail = document.querySelectorAll('input[type="email"]');
const inputTel = document.querySelectorAll('input[type="tel"]');

    inputAll.forEach(element => {
        element.addEventListener('input', () => {
        element.value = element.value.replace(/[^а-я-\s]/gi, '');
        
    })
})


    inputMessange.addEventListener('input', () => {
        inputMessange.value = inputMessange.value.replace(/[^а-я-\s]/gi, '');
        
    })

    inputEmail.forEach(element => {
        element.addEventListener('input', () => {
        element.value = element.value.replace(/[^\d\w\-\@\_\.\!\~\*\']+/gi, '');
        
    })

    inputTel.forEach(element => {
        element.addEventListener('input',() =>{
          element.value = element.value.replace(/[^\d\-()']+/gi, "")
        })
      });
})


}

export default form;