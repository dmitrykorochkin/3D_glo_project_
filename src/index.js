
import timer from './modules/timer';
import menu from './modules/menu';
import modal from './modules/modal';
import inputCalc from './modules/inputcalc';
import form from './modules/form';
import tabs from './modules/tabs';
import slider from './modules/slider';
import calc from './modules/calc';
import sendForm from './modules/sendForm';
import maskPhone from './modules/maskphone';
import validInput from './modules/validation';









timer('31 july 2022');
menu();
modal();
inputCalc();
form();
tabs();
slider();
calc(100);
maskPhone();
validInput();

sendForm({idForm:'form1', 
          somElem: [
        {
            type: 'block',
            id: 'total'
            
        }
    ]
});

sendForm({idForm:'form2',
        somElem: [
        {
            type: 'block',
            id: 'total'
        }
    ]
})
sendForm({idForm:'form3',
        somElem: [
        {
            type: 'block',
            
        }
    ]
})




