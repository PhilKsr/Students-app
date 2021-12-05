// Structure
const main = document.querySelector("main");
const buddiesSection = document.createElement("section");
buddiesSection.classList.add("buddiesList");
const teamsSection = document.createElement("section");
const journalSection = document.createElement("section");
main.appendChild(buddiesSection);
main.appendChild(teamsSection);
main.appendChild(journalSection);

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

//YOUR CODEBUDDY FOR TODAY
fetch("https://muc-student-companion-api.vercel.app/api/buddies") // wirft JSON zurück (JavaScript Object Notation)
  .then((response) => response.json()) // alle mit . begonnenen Zeilen heißen "Promise" (resolve / reject)
  .then((data) => {
    const buddiesList = data;
    const index = getIndex(buddiesList);
    createBuddy(buddiesList[index]);
  })
  .catch(() => {
    const buddiesList = loadFromLocal("Code-Buddies");
    const index = getIndex(buddiesList);
    createBuddy(buddiesList[index]);
  });

// Create function
function createBuddy(group) {
  const section = document.createElement("section");
  buddiesSection.appendChild(section);
  const ul = document.createElement("ul");
  const h2 = document.createElement("h2");
  section.appendChild(h2);
  h2.classList.add("headline", "headline-cbt");
  h2.innerText = "Your codebuddy for today:";
  group.forEach((name) => {
    const li = document.createElement("li");
    li.innerText = name;
    ul.appendChild(li);
  });
  buddiesSection.appendChild(ul);
}

//TEAMS FOR TODAY
fetch("https://muc-student-companion-api.vercel.app/api/teams")
  .then((response) => response.json())
  .then((data) => {
    const teamList = data;
    const index = getIndex(teamList);
    createTeam(teamList[index], index);
  })
  .catch(() => {
    const teamList = loadFromLocal("Team-List");
    const index = getIndex(teamList);
    createTeam(teamList[index], index);
  });

// Function for index
function getIndex(teamList) {
  let resultIndex;
  teamList.forEach((team, index) => {
    let yourIndex = team.findIndex((mate) => mate === "Philipp"); // WE NEED YOUR NAME
    if (yourIndex !== -1) {
      resultIndex = index;
    }
  });
  return resultIndex;
}

// Function create elements
function createTeam(team, index) {
  const section = document.createElement("section");
  section.classList.add("teams-list");
  const h2 = document.createElement("h2");
  h2.classList.add("headline", "headline-cbt");
  h2.innerText = "Your current team:";
  const ul = document.createElement("ul");
  ul.classList.add("teams-list__one");
  team.forEach((item) => {
    const li = document.createElement("li");
    li.classList.add("list-item");
    li.innerText = item;
    ul.appendChild(li);
  });
  teamsSection.appendChild(section);
  section.appendChild(h2);
  section.appendChild(ul);
}

// NEWEST JOURNAL LOG

fetch("https://muc-student-companion-api.vercel.app/api/journals")
  .then((response) => response.json())
  .then((data) => {
    const journalList = data;

    // Create content for youngest
    const section = newElements("section", "main__journal", " ");
    const headline = newElements("h2", "headline", getDate(journalList));
    importRectangles(journalList[0]);
    importStars(journalList[0]);
    const motto = newElements("span", "label", "Motto:");
    const mottoContent = newElements(
      "p",
      "body__large",
      `"${journalList[0].motto}"`
    );
    const notes = newElements("span", "label", "Notes:");
    const notesContent = newElements(
      "p",
      "body__small",
      `${journalList[0].notes}`
    );
  })
  .catch(() => {
    const journalList = loadFromLocal("Journal");
    const section = newElements("section", "main__journal", " ");
    const headline = newElements("h2", "headline", getDate(journalList));
    importRectangles(journalList[0]);
    importStars(journalList[0]);
    const motto = newElements("span", "label", "Motto:");
    const mottoContent = newElements(
      "p",
      "body__large",
      `"${journalList[0].motto}"`
    );
    const notes = newElements("span", "label", "Notes:");
    const notesContent = newElements(
      "p",
      "body__small",
      `${journalList[0].notes}`
    );
  });

// Check date
function getDate(list) {
  if (!list[0].date) {
    return "Newest journal entry";
  } else {
    return list[0].date;
  }
}

// Element-creator
function newElements(elementName, elementClass, elementText) {
  const newElement = document.createElement(elementName);
  journalSection.appendChild(newElement);
  newElement.classList.add(elementClass);
  newElement.innerHTML = elementText;
}

// -> Boxes-LOOP!!!
function importRectangles(journalNumber) {
  const comprehension = newElements("span", "label", "Comprehension:");
  const blockContainer = document.createElement("div");
  journalSection.appendChild(blockContainer);
  blockContainer.classList.add("block");
  for (let i = 0; i < journalNumber.comprehension; i++) {
    const img = document.createElement("img");
    blockContainer.appendChild(img);
    img.style.width = "22px";
    img.style.margin = "2px";
    img.setAttribute("src", "./rectangle_active.png");
  }
  for (let i = journalNumber.comprehension; i < 10; i++) {
    const img = document.createElement("img");
    blockContainer.appendChild(img);
    img.style.width = "22px";
    img.style.margin = "2px";
    img.setAttribute("src", "./rectangle_inactive.png");
  }
}

// -> STARS-LOOP!!!
function importStars(journalNumber) {
  const rating = newElements("span", "label", "Rating:");
  const starContainer = document.createElement("div");
  journalSection.appendChild(starContainer);
  starContainer.classList.add("stars");
  for (let i = 0; i < journalNumber.rating; i++) {
    const img = document.createElement("img");
    starContainer.appendChild(img);
    img.style.width = "25px";
    img.style.margin = "2px";
    img.setAttribute("src", "./star_active.png");
  }
  for (let i = journalNumber.rating; i < 5; i++) {
    const img = document.createElement("img");
    starContainer.appendChild(img);
    img.style.width = "25px";
    img.style.margin = "2px";
    img.setAttribute("src", "./star_inactive.png");
  }
}
// POST for API on Journal Site
