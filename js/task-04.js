// Создай переменную counterValue в которой будет храниться
// текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай
// или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.

let counterValue = 0;

const reffs = {
  valueEl: document.querySelector("#value"),
  ascedingEl: document.querySelector('[data-action="increment"]'),
  descedingEl: document.querySelector('[data-action="decrement"]'),
};

const onIncrementClick = () => {
  counterValue += 1;
  reffs.valueEl.textContent = counterValue;
};

const onDecrementClick = () => {
  counterValue -= 1;
  reffs.valueEl.textContent = counterValue;
};

reffs.ascedingEl.addEventListener("click", onIncrementClick);
reffs.descedingEl.addEventListener("click", onDecrementClick);
