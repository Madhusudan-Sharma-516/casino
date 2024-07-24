const moneyValue = localStorage.getItem("money");
let userMoney = Number(moneyValue);
const moneyTxt = document.querySelector("#moneyTxt");
moneyTxt.innerText = userMoney;

const userInputMoney = localStorage.getItem("numMoney");

function RandomNumber() {
  const min = 1;
  const max = 5;
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomNumber;
}

const startBtn = document.getElementById('startButton');
const userChoice = document.querySelector("#userNum");

// Warn the user before they refresh or leave the page
window.addEventListener('beforeunload', (event) => {
  event.preventDefault();
  event.returnValue = '';
});

// Redirect to home page if user confirms refresh or navigation
window.addEventListener('unload', () => {
  window.location.href = '../index.html';
});

document.getElementById('startButton').addEventListener('click', () => {
  const boxes = document.querySelectorAll('.numberBox');
  let currentIndex = 0;
  let blinkCount = 0;
  const maxBlinks = 4 + Math.floor(Math.random() * 2); // 6 to 7 times
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

      if (parseInt(userChoice.value) === randomIndex + 1) {
        console.log('win');
        const winningAmount = parseInt(userInputMoney) * 2;
        userMoney += winningAmount;
        localStorage.setItem("money", userMoney);
        document.getElementById('result').innerText += ` - You win! Your winning money is ₹${winningAmount}`;
      } else {
        console.log('lose');
        const losingAmount = parseInt(userInputMoney);
        document.getElementById('result').innerText += ` - You lose! You lost ₹${losingAmount}`;
      }

      moneyTxt.innerText = userMoney;
      localStorage.removeItem("numMoney");

      const goToHomeBtn = document.createElement('button');
      goToHomeBtn.classList = 'gohome';
      goToHomeBtn.innerText = 'Go to Home';
      goToHomeBtn.onclick = () => window.location.href = '../index.html';
      document.getElementById('container').appendChild(goToHomeBtn);
    }
  }, 300);
});
