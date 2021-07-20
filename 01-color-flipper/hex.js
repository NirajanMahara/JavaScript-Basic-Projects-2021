const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
// #f1f5f8
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function () {
  let hexColor = '#';
  // followed by '#'
  //   => for the colors code with 6 strings
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
  }

  //   console.log(hexColor);

  color.textContent = hexColor;
  document.body.style.backgroundColor = hexColor;
});

function getRandomNumber() {
  //   get random number between hex length 16 => [0, 1, ...,15]
  //   & floor => roundup the random floats values
  return Math.floor(Math.random() * hex.length);
}
