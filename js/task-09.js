function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const reffs = {
  reffEl: document.querySelector(".color"),
  colorButton: document.querySelector(".change-color"),
};

const clickButton = () => {
  const changeColor = getRandomHexColor();
  reffs.reffEl.textContent = changeColor;
  document.body.style.backgroundColor = changeColor;
};

reffs.colorButton.addEventListener("click", clickButton);
