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

