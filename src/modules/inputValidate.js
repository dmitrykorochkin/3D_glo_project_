const inputValidate = fields => {
    let isValid = true; 

    fields.forEach(field => {

        if(field.matches('input[type=text]') && field.value.length < 2) {
            isValid = false;
            field.classList.add('error');
        }
        if(field.matches('input[type=email]') && !(/^[\w\d"-_.!~*']*@[\w\d"-_.!~*']*\.\w{2,}$/.test(field.value))) {
            isValid = false;
            field.classList.add('error');
            
        }
        if(field.matches( 'input[type=tel]') && field.value.length < 16) {
            isValid = false;
            field.classList.add('error');
        }

    });

    return isValid;
}

export default inputValidate;