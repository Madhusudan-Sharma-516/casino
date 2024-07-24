const moneyValue = localStorage.getItem("money");


userMoney = Number(moneyValue);
const moneyTxt = document.querySelector("#moneyTxt");
moneyTxt.innerText = userMoney;




function RandomNumber() {
  const min = 1;
  const max = 5;
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomNumber;
}


const startBtn = document.getElementById('startButton');
const userChoice = document.querySelector("#userNum");



document.getElementById('startButton').addEventListener('click', () => {
  const boxes = document.querySelectorAll('.numberBox');
  let currentIndex = 0;
  let blinkCount = 0;
  const maxBlinks = 5 + Math.floor(Math.random() * 2); // 6 to 7 times
  startBtn.disabled = true;

  const blinkInterval = setInterval(() => {
    boxes.forEach(box => box.classList.remove('blink'));
    boxes[currentIndex].classList.add('blink');
    currentIndex = (currentIndex + 1) % boxes.length;
    blinkCount++;

    if (blinkCount > maxBlinks * boxes.length) {
      clearInterval(blinkInterval);
      const randomIndex = Math.floor(Math.random() * boxes.length);
      boxes.forEach(box => box.classList.remove('blink'));
      boxes[randomIndex].classList.add('blink');
      document.getElementById('result').innerText = `Your random number is ${randomIndex + 1}`;

      if (userChoice.value === randomIndex + 1) {
        console.log('win');

      } else {
        console.log('lose');

      }

    }
  }, 300);
});

