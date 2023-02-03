const dice = document.querySelector(".dice-container");
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

var mobileHover = function () {
  dice.addEventListener("touchstart", () => {
    dice.trigger("hover");
  });
  dice.addEventListener("touchend", () => {
    dice.trigger("hover");
  });
};

mobileHover();

let rotate = 360;

dice.addEventListener("click", () => {
  generateAdvice();
  dice.style.transform = `rotate(${rotate}deg)`;
  dice.style.transition = "0.5s ease-in-out";
  rotate += 360;
});
