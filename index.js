// first

const numberOfCategoriesEl = document.querySelectorAll(".first__list-item");
const numberOfCategories = numberOfCategoriesEl.length;
console.log(numberOfCategories);
console.log(numberOfCategoriesEl);

const result = numberOfCategoriesEl.forEach((el) => {
  const title = el.querySelector(".first__list-title").textContent;
  const amountOfEl = el.querySelectorAll(".first__second-list-item").length;

  console.log(`категорія: ${title}, кількість елементів: ${amountOfEl}`);
});

// second

const ingredients = [
  "Картопля",
  "Гриби",
  "Часник",
  "Помідори",
  "Зелень",
  "Приправи",
];
const listEl = document.getElementById("ingredients");

ingredients.map((el) => {
  const itemEl = document.createElement("li");
  itemEl.textContent = el;
  listEl.append(itemEl);
});

// third

const galleryListEl = document.getElementById("gallery");
const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

images.map((el) => {
  const itemEl = document.createElement("li");
  itemEl.innerHTML = `<img src="${el.url}" alt="${el.alt}">`;
  galleryListEl.append(itemEl);
});

// fourth

let counterValue = 0;
const counterValueEl = document.querySelector(".value");
const firstCounterButtonEl = document.querySelector(".first-button");
const secondCounterButtonEl = document.querySelector(".second-button");

firstCounterButtonEl.addEventListener("click", (e) => {
  counterValue += 1;
  counterValueEl.textContent = counterValue;
});

secondCounterButtonEl.addEventListener("click", (e) => {
  counterValue -= 1;
  counterValueEl.textContent = counterValue;
});

console.log(counterValue);