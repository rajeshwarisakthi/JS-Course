
function toggleButton(selector) {
  const button = document.querySelector(selector);
  if (!button.classList.contains('is-toggled')) {
    
    turnOffPreviousButton();

    button.classList.add('is-toggled');
  } else {
    button.classList.remove('is-toggled');
  }
}

function turnOffPreviousButton() {
  const previousButton = document.querySelector('.is-toggled');
  if (previousButton) {
    previousButton.classList.remove('is-toggled');
  }
}

let calculation=localStorage.getItem('calculation') || '';

displayCalculation();

function updateCalculation(value){
  calculation+=value;

  displayCalculation();

  localStorage.setItem('calculation',calculation);
}

function displayCalculation(){
  document.querySelector('.js-calculation').innerHTML=calculation;
}