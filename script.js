const minInput = document.querySelector(".min-number");
const maxInput = document.querySelector(".max-number");
const drawButton = document.querySelector(".draw-button");
const diceImage = document.querySelector(".dice-image");

const sorteadorBox = document.querySelector(".sorteador-box");
const resultBox = document.querySelector(".result-box");
const resultNumber = document.querySelector(".result-number");
const againButton = document.querySelector(".again-button");

function generateNumber() {
  const min = Number(minInput.value);
  const max = Number(maxInput.value);

  if (min >= max) {
    alert("O número mínimo precisa ser menor que o máximo.");
    return;
  }
  diceImage.classList.add("rolling");

  setTimeout(() => {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

    diceImage.classList.remove("rolling");

    resultNumber.textContent = randomNumber;

    sorteadorBox.classList.add("hidden");
    resultBox.classList.remove("hidden");
  }, 800);
}

function drawAgain() {
  resultBox.classList.add("hidden");
  sorteadorBox.classList.remove("hidden");
}

drawButton.addEventListener("click", generateNumber);
againButton.addEventListener("click", drawAgain);
