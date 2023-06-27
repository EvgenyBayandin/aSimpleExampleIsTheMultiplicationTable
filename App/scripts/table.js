const getRandomInRange = (min = 1, max = 9) => {
  return Math.floor(min + Math.random() * (max - min + 1));
}

const template = document.querySelector('.template');
const input = document.querySelector('.input');
const button = document.querySelector('.button');
const result = document.querySelector('.result');

let firstNumber = getRandomInRange();
let secondNumber = getRandomInRange();

template.textContent = `${firstNumber} * ${secondNumber}`;

button.addEventListener('click', () => {
  if (input.value == ''){
		result.textContent = "Нужно указать ответ";
		result.style.color = "red";
	} 
	else if (Number(input.value) === firstNumber * secondNumber) {
    result.textContent = "Верно";
		result.style.color = "green";
		
    firstNumber = getRandomInRange();
    secondNumber = getRandomInRange();
    template.textContent = `${firstNumber} * ${secondNumber}`;
  } 
	else {
    result.textContent = "Подумайте ещё";
		result.style.color = "red";
  }
	
  input.value = '';
  input.focus();
})