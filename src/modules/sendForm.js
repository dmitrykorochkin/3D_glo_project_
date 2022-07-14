const sendForm = ({idForm, somElem = []}) => {

    const form = document.getElementById(idForm);
    const statusBlock = document.createElement('div');
    const loadText = 'Загрузка...';
    const errorText = 'Ошибка...';
    const successText = 'Спасибо, наш менеджер свяжется с вами!';

    const validate = (list) => {
        let success = true;
        

        list.forEach(input => {
            if (!input.value) {
                success = false;
            }
            if (input.name === "user_phone" && (!(/^[\+]?\(?([0-9]{4})\)?([-]?)([0-9]{3})\2([0-9]{4})+$/g.test(input.value)) || input.value === "")){
                alert("Введите корректный номер телефона, пример: +79374564612 ");
                success = false;
              }
        
              if(input.name === "user_name" && (/[^а-яА-Я ]/g.test(input.value) || input.value === "" ||input.value.length < 2)){
                alert("Введите имя на кириллице(не менее 2 букв)");
                success = false;
              }
        
              if(input.name === "user_message" && /[^а-яА-Я0-9 -.,;:!?"()]/g.test(input.value)){
                success = false;
              }
        })
        return success;
    }


    const sendData = (data) => {
        return fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: { 'Content-Type': 'application/json'}
        }).then(res => res.json());
    }

    const submitForm = () => {
        const formElements = form.querySelectorAll('input');
        const formData = new FormData(form);
        const formBody = {};

        statusBlock.textContent = loadText;
        form.append(statusBlock);


        formData.forEach((val, key) => {
            formBody[key] = val
        });

        somElem.forEach(elem => {
            const element = document.getElementById(elem.id)

           
            if (elem.type === 'block') {
                formBody[elem.id] = element.textContent;
            } else if (elem.type === 'input') {
                formBody[elem.id] = element.value;
            }

        })

        if (validate(formElements)) {
            sendData(formBody)
                .then(data => {
                    statusBlock.textContent = successText;
                    formElements.forEach(input => {   // после отправки очищаем input
                        input.value = '';
                }) 
            })

            .catch(error => {

                statusBlock.textContent = errorText;
            })
        } else {
            alert('Данные не валидны');
        }
    }

    try {
        if (!form){
            throw new Error('Ошибка в форме');
        }
        form.addEventListener('submit', (event) => {
            event.preventDefault();
    
            submitForm();
        });

    } catch(error) {
        console.log(error.message);
    }

}

export default sendForm