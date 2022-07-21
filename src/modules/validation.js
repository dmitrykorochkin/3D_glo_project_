import inputValidate from './inputValidate';
import maskPhone from './maskphone';

const validInput = () => {

  const inputUserName = document.querySelectorAll("input[type=text]");
  const inputMessage = document.querySelector(".mess");
  const inputEmail = document.querySelectorAll("input[type=email");
  const inputTel = document.querySelectorAll("input[type=tel]");

  inputUserName.forEach((item) => {


    if (item.classList.contains("calc-item")) {
      item.addEventListener("input", (e) => {
        e.target.value = e.target.value.replace(/\D+/gi, "");
      });
    } else {
      item.addEventListener("input", (e) => {
        e.target.value = e.target.value.replace(/[^а-яА-ЯёЁ\s]+/i, "");
        if(e.target.classList.contains('error') && inputValidate([e.target])) {
          e.target.classList.remove('error');
        }
      
      });
      item.addEventListener("invalid" , (e) => {
        e.preventDefault();
        e.target.classList.add('error');
      });
    }
  });

  inputMessage.addEventListener("input", (e) => {
    e.target.value = e.target.value.replace(/[^а-яА-ЯёЁ\s.,;:'"!?\d]+/i, "");
   
  });

  inputEmail.forEach((item) => {
    item.addEventListener("input", (e) => {
     e.target.value = e.target.value.replace(/[^\w@\-.!~*']+/gi, "");
     if(e.target.classList.contains('error') && inputValidate([e.target])) {
      e.target.classList.remove('error');
    }
    });
    item.addEventListener("invalid", (e) => {
      e.preventDefault();
      e.target.classList.add('error');
    });
  });

  inputTel.forEach((item) => {

    maskPhone("input[type=tel]");

    item.addEventListener("input", (e) => {
      e.target.value = e.target.value.replace(/[^\d+()-]+/gi, "");
      if(e.target.classList.contains('error') && inputValidate([e.target])) {
        e.target.classList.remove('error');
      }
      
    });
    item.addEventListener("invalid", (e) => {
      e.preventDefault();
      e.target.classList.add('error');
    });
  });

    
   
}
export default validInput;