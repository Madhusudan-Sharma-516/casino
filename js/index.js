let userMoney = 1500;

const moneyValue = localStorage.getItem("money");

if (moneyValue !== null) {
  userMoney = Number(moneyValue);
  const moneyTxt = document.querySelector("#moneyTxt");
  moneyTxt.innerText = userMoney;
} else {
  localStorage.setItem("money", userMoney);
  const moneyTxt = document.querySelector("#moneyTxt");
  moneyTxt.innerText = userMoney;
}

let redirectUrl = "";

function openPopup(url) {
  redirectUrl = url;
  document.querySelector(".overlay").style.display = "block";
  document.getElementById("popup").style.display = "flex";
}

function closePopup() {
  document.querySelector(".overlay").style.display = "none";
  document.getElementById("popup").style.display = "none";
}

function validateInput() {
  const userInput = Number(document.getElementById("userInput").value);
  if (userInput >= 10) {
    if (userMoney < userInput) {
      alert("You don't have that much money!");
    } else {
      userMoney -= userInput;
      localStorage.setItem("money", userMoney);
      document.querySelector("#moneyTxt").innerText = userMoney;
      closePopup();
      window.location.href = `./html/${redirectUrl}`;
    }
  } else {
    alert("Please enter an amount of 10 rs or greater.");
  }
}
