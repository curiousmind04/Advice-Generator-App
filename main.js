const diceContainer = document.querySelector(".dice-container");
const dice = document.querySelector(".dice");
const number = document.querySelector(".advice-number");
const advice = document.querySelector(".advice-text");

const getAdvice = async () => {
  const response = await fetch("https://api.adviceslip.com/advice");

  const data = await response.json();

  //   console.log(data.slip.id);

  //   number.innerHTML = data.slip.id;
  //   advice.innerHTML = data.slip.advice;
  return data;
};

const generateAdvice = async () => {
  const data = await getAdvice();
  const id = data.slip.id;
  const adviceText = data.slip.advice;
  number.innerHTML = id;
  advice.innerHTML = adviceText;
};

let rotateDeg = 360;

const rotate = () => {
  dice.style.transition = "0.5s ease-in";
  dice.style.transform = `rotate(${rotateDeg}deg)`;
  rotateDeg += 360;
};

diceContainer.addEventListener("click", () => {
  generateAdvice();
  rotate();
});
