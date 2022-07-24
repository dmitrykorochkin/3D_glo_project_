const calc = (price = 100)=> {

    const calcBlock = document.querySelector('.calc-block');
    const calcType = document.querySelector('.calc-type');
    const calcSquare = document.querySelector('.calc-square');
    const calcCount = document.querySelector('.calc-count');
    const calcDay = document.querySelector('.calc-day');
    const total = document.getElementById('total');

    const countCalc = () => {
       const calcTypeValue = +calcType.options[calcType.selectedIndex].value;
       const calcSquareValue = calcSquare.value;

       let totalValue = 0;
       let calcCountValue = 1;
       let calDayValue = 1

       if(calcCount.value > 1) {
        calcCountValue = calcCountValue + (+calcCount.value / 10);
       }

       if (calcDay.value && calcDay.value < 5) {
            calDayValue = 2;     
       } else if(calcDay.value && calcDay.value < 10) {
            calDayValue = 1.5;
       }

       if(calcTypeValue && calcSquareValue) {
            totalValue = price * calcTypeValue * calcSquareValue * calcCountValue * calDayValue;
       } else {
            totalValue = 0;
       }

       total.textContent = totalValue;
    }

    calcBlock.addEventListener('input', (e) => {

        if(e.target === calcType || e.target === calcSquare || e.target === calcCount || e.target === calcDay) {
            countCalc();
        }
    })

}

export default calc