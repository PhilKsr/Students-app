// STRUCTURE FOR DASHBOARD
const main = document.querySelector("main");
const buddiesSection = document.createElement("section");
buddiesSection.classList.add("buddiesList");
const teamsSection = document.createElement("section");
const journalSection = document.createElement("section");
main.appendChild(buddiesSection);
main.appendChild(teamsSection);
main.appendChild(journalSection);

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

//YOUR CODEBUDDY FOR TODAY
fetch("https://muc-student-companion-api.vercel.app/api/buddies") // wirft JSON zurück (JavaScript Object Notation)
  .then((response) => response.json()) // alle mit . begonnenen Zeilen heißen "Promise" (resolve / reject)
  .then((data) => {
    const buddiesList = data;
    const index = getIndex(buddiesList);
    createBuddy(buddiesList[index]);
  })
  // FROM LOCAL STORAGE
  .catch(() => {
    const buddiesList = loadFromLocal("Code-Buddies");
    const index = getIndex(buddiesList);
    createBuddy(buddiesList[index]);
  });

// FUCNTION CREATE BUDDIES WITH CLASS
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

// FUNCTION FOR INDEX OF YOUR TEAM
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

// FUNCTION CREATE TEAM WITH CLASS
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

    // FOR NEWEST JOURNAL ENTRIES
    const section = newElements("section", "main__journal", " ");
    const headline = newElements("h2", "headline", getDate(journalList));
    importStars(journalList[0]);
    importRectangles(journalList[0]);
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
    importStars(journalList[0]);
    importRectangles(journalList[0]);
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

// FUNCTION
function getDate(list) {
  if (!list[0].date) {
    return "Newest journal entry";
  } else {
    return list[0].date;
  }
}

// FUNCTION CREATES ELEMENTS WITH CLASS
function newElements(elementName, elementClass, elementText) {
  const newElement = document.createElement(elementName);
  journalSection.appendChild(newElement);
  newElement.classList.add(elementClass);
  newElement.innerHTML = elementText;
}
// FUNCTION IMPORTS SVG -> STARS
function importStars(journalNumber) {
  const rating = newElements("span", "label", "Rating:");
  const starContainer = document.createElement("div");
  journalSection.appendChild(starContainer);
  starContainer.classList.add("flex__stars");
  for (let i = 0; i < journalNumber.rating; i++) {
    const starDiv = document.createElement("div");
    starContainer.appendChild(starDiv);
    starDiv.innerHTML = `
              <svg
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"

              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8.23458 7.2288L0.825543 8.30177L0.71598 8.32379C0.00767595 8.50741 -0.252463 9.41029 0.291856 9.93924L5.65288 15.1498L4.38762 22.5059L4.37507 22.6116C4.32751 23.3425 5.11049 23.8714 5.78483 23.5179L12.4119 20.0448L19.039 23.5179L19.136 23.5625C19.8185 23.8334 20.565 23.2545 20.4362 22.5059L19.17 15.1498L24.532 9.93924L24.6076 9.85723C25.0724 9.29362 24.7505 8.41074 23.9983 8.30177L16.5883 7.2288L13.2754 0.535137C12.9222 -0.178379 11.9016 -0.178379 11.5484 0.535137L8.23458 7.2288Z"
                  class="star__active--fix"
                />
              </svg>`;
  }
  for (let i = journalNumber.rating; i < 5; i++) {
    const starDiv = document.createElement("div");
    starContainer.appendChild(starDiv);
    starDiv.innerHTML = `
              <svg
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"

              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8.23458 7.2288L0.825543 8.30177L0.71598 8.32379C0.00767595 8.50741 -0.252463 9.41029 0.291856 9.93924L5.65288 15.1498L4.38762 22.5059L4.37507 22.6116C4.32751 23.3425 5.11049 23.8714 5.78483 23.5179L12.4119 20.0448L19.039 23.5179L19.136 23.5625C19.8185 23.8334 20.565 23.2545 20.4362 22.5059L19.17 15.1498L24.532 9.93924L24.6076 9.85723C25.0724 9.29362 24.7505 8.41074 23.9983 8.30177L16.5883 7.2288L13.2754 0.535137C12.9222 -0.178379 11.9016 -0.178379 11.5484 0.535137L8.23458 7.2288Z"
                  class="star__inactive--fix"
                />
              </svg>`;
  }
}

// FUNCTION IMPORTS SVG -> RECTANGLES
function importRectangles(journalNumber) {
  const comprehension = newElements("span", "label", "Comprehension:");
  const blockContainer = document.createElement("div");
  journalSection.appendChild(blockContainer);
  blockContainer.classList.add("flex__rectangles");
  for (let i = 0; i < journalNumber.comprehension; i++) {
    const rectangleDiv = document.createElement("div");
    blockContainer.appendChild(rectangleDiv);
    rectangleDiv.innerHTML = `
          <svg
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="22"
            width="22"
            height="22"
            rx="4"
            transform="rotate(-90 0 22)"
            class="block__active--fix"
          />
        </svg>`;
  }
  for (let i = journalNumber.comprehension; i < 10; i++) {
    const rectangleDiv = document.createElement("div");
    blockContainer.appendChild(rectangleDiv);
    rectangleDiv.innerHTML = `
          <svg
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="22"
            width="22"
            height="22"
            rx="4"
            transform="rotate(-90 0 22)"
            class="block__inactive--fix"
          />
        </svg>`;
  }
}
