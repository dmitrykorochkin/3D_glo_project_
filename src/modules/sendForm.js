"use strict";

import inputValidate from './inputValidate';

const sendForm = ({ idForm, somElem = [] }) => {
  const form = document.getElementById(idForm);
  const statusBlock = document.createElement("div");
  const loadText = "Загрузка...";
  const errorText = "Ошибка...";
  const successText = "Спасибо! Наш менеджер с вами свяжется!";
  const textError = "Попробуйте ещё раз...";

  statusBlock.style.color = "#fff";

  const sendData = (data) => {
    return fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
  };

  const submitForm = () => {
    const formElements = form.querySelectorAll("input");
    const formData = new FormData(form);
    const formBody = {};

    statusBlock.textContent = loadText;
    form.append(statusBlock);

    
    formData.forEach((val, key) => {
      val && (formBody[key] = val);
  });

      

    somElem.forEach((elem) => {
      const element = document.getElementById(elem.id);
      if (elem.type === "block" && element.textContent) {
      } else if (elem.type === "input" && element.value) {
        formBody[elem.id] = element.value;
      }
    });

    if (inputValidate(formElements)) {
      sendData(formBody)
      
        .then((data) => {
          statusBlock.textContent = successText;

          formElements.forEach((input) => {
            input.value = "";
            
          });
          setInterval(() => {
            statusBlock.textContent = "";
          }, 3000);
        })
        .catch((error) => {
          statusBlock.textContent = errorText;
        });
    } else {

      form.append(statusBlock);
      statusBlock.textContent = textError;

      setTimeout(() => {
        statusBlock.textContent = "";
      }, 2000);
    }
  };
  try {
    if (!form) {
      throw new Error("Верните форму на место!");
    }

    form.addEventListener("submit", (event) => {
      event.preventDefault();

      submitForm();
    });
  } catch (error) {
    console.log(error.message);
  }
};

export default sendForm;


