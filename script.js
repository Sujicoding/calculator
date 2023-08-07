let display = document.getElementById('input');
let result = '';

function appendToDisplay(value) {
  result += value;
  display.value = result;
}

function clearDisplay() {
  result = '';
  display.value = '';
}

function calculate() {
  try {
    result = eval(result);
    display.value = result;
  } catch (error) {
    display.value = 'Error';
  }
}