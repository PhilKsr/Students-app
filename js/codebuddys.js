fetch("https://muc-student-companion-api.vercel.app/api/buddies")
  .then((response) => response.json())
  .then((data) => {
    const buddiesList = data;
    buddiesList.forEach((group) => {
      create(group);
    });
    saveToLocal("Code-Buddies", buddiesList);
  })
  .catch(() => {
    const buddiesList = loadFromLocal("Code-Buddies");
    buddiesList.forEach((group) => {
      create(group);
    });
  });

// TODAYS DATE
const myDate = document.querySelector(".header__label");

const d = new Date();
const date = d.getDate();
const month = d.getMonth() + 1; // getMonth() returns month from 0-11 not 1-12
const year = d.getFullYear();
myDate.innerText = `Date - ${date}.${month}.${year}`;

// FUNCTION SAVE TO LOCAL STORAGE
function saveToLocal(name, data) {
  localStorage.setItem(name, JSON.stringify(data));
}

// FUNCTION GET FROM LOCAL STORAGE
function loadFromLocal(name) {
  const itemsFromLocal = localStorage.getItem(name)
    ? JSON.parse(localStorage.getItem(name))
    : [];
  return itemsFromLocal;
}

// FUNCTION CREATE ELEMENTS WITH CLASS
function create(group) {
  const main = document.querySelector("main");
  const buddiesList = document.createElement("section");
  buddiesList.classList.add("buddiesList");
  main.appendChild(buddiesList);
  const ul = document.createElement("ul");
  group.forEach((name) => {
    const li = document.createElement("li");
    li.innerText = name;
    ul.appendChild(li);
  });
  buddiesList.appendChild(ul);
}
