// 1. Посчитает и выведет в консоль количество категорий в ul#categories,
//  то есть элементов li.item.
// 2. Для каждого элемента li.item в списке ul#categories,
// найдет и выведет в консоль текст заголовка элемента(тега < h2 >)
// и количество элементов в категории(всех вложенных в него < li >).

const listEl = document.querySelectorAll(".item");
console.log(`Number of categories: ${listEl.length}`);

const listItem = listEl.forEach((item) => {
  console.log("Category:", item.firstElementChild.textContent);
  console.log("Elements:", item.querySelectorAll("li").length);
});
