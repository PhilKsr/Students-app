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
// Get date label
const myDate = document.querySelector(".header__label");

// Get date components
const d = new Date();
const date = d.getDate();
const month = d.getMonth() + 1; // getMonth() returns month from 0-11 not 1-12
const year = d.getFullYear();

// insert todays date
myDate.innerText = `Date - ${date}.${month}.${year}`;

// SAVE TO LOCAL STORAGE
function saveToLocal(name, data) {
  localStorage.setItem(name, JSON.stringify(data));
}

// GET FROM LOCAL STORAGE
function loadFromLocal(name) {
  const itemsFromLocal = localStorage.getItem(name)
    ? JSON.parse(localStorage.getItem(name))
    : [];
  return itemsFromLocal;
}

// Create function
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
