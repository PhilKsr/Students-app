fetch("https://muc-student-companion-api.vercel.app/api/teams")
  .then((response) => response.json())
  .then((data) => {
    const teamList = data;
    teamList.forEach((team, index) => {
      create(team, index);
    });
    saveToLocal("Team-List", teamList);
  })
  .catch(() => {
    const teamList = loadFromLocal("Team-List");
    teamList.forEach((team, index) => {
      create(team, index);
    });
  });

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

// Function create elements
function create(team, index) {
  const main = document.querySelector("main");
  const section = document.createElement("section");
  section.classList.add("teams-list");

  const h2 = document.createElement("h2");
  h2.classList.add("headline", "headline-cbt");
  h2.innerText = "Team " + (index + 1);
  const ul = document.createElement("ul");
  ul.classList.add("teams-list__one");

  team.forEach((item) => {
    const li = document.createElement("li");
    li.classList.add("list-item");
    li.innerText = item;
    ul.appendChild(li);
  });

  main.appendChild(section);
  section.appendChild(h2);
  section.appendChild(ul);
}
