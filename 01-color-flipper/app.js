const colors = ['green', 'red', 'blue'];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function () {
  //   console.log(document.body);

  //   get random number between 0 - 2 => [0, 1, 2]
  const randomNumber = getRandomNumber();
  //   console.log(getRandomNumber());

  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

function getRandomNumber() {
  //   get random number between colors length 0 - 2 => [0, 1, 2]
  //   & floor => roundup the random floats values
  return Math.floor(Math.random() * colors.length);
}
