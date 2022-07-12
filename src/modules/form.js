const form = () => {

  const inputName = document.querySelectorAll('input[name = user_name]');
  const inputMessange = document.querySelector('input[name = user_message]');
  const inputEmail = document.querySelectorAll('input[name = user_email]');
  const inputTel = document.querySelectorAll('input[name = user_phone]');
  
      inputName.forEach(element => {
          element.addEventListener('input', () => {
          element.value = element.value.replace(/[^а-я-\s]/gi,'');
          
      })
  })
  
  
      inputMessange.addEventListener('input', () => {
          inputMessange.value = inputMessange.value.replace(/[^а-я-\s\.,!?:;\"\-]/gi,'');
          
      })
  
      inputEmail.forEach(element => {
          element.addEventListener('input', () => {
          element.value = element.value.replace(/[^\d\w\-\@\_\.\!\~\*\']+/gi, '');
          
      })
  
      inputTel.forEach(element => {
          element.addEventListener('input',() =>{
            element.value = element.value.replace(/[^\d\-()+']+/gi, "")
          })
        });
  })
  
  
  }
  
  export default form;