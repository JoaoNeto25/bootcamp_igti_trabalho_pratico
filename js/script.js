window.addEventListener('load', start);

// pegar o valor do input e atribuir a uma variável
function start() {
  var red = document.querySelector('#rangeRed').value;
  var green = document.querySelector('#rangeGreen').value;
  var blue = document.querySelector('#rangeBlue').value;

  // carregar input com valor = 0
  document.querySelector('#text-r').value = red;
  document.querySelector('#text-g').value = green;
  document.querySelector('#text-b').value = blue;

  changeColor(red, green, blue);

  document.getElementById('rangeRed').addEventListener('input', start);
  document.getElementById('rangeGreen').addEventListener('input', start);
  document.getElementById('rangeBlue').addEventListener('input', start);
}

function changeColor(red, green, blue) {
  var color = 'rgb(' + red + ',' + green + ',' + blue + ')';
  colorBox.style.backgroundColor = color;
}
