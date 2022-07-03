
const inputCalc = () => {
    const calcBlock = document.querySelector('.calc-block')

  calcBlock.addEventListener('input', (e) =>{
    if (e.target.localName == 'input') {
      e.target.value = e.target.value.replace(/\D+/gi,"")
    }
  })

}

export default inputCalc