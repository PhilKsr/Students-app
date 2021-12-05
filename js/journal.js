let dynamicContent;
// Fetch from API
fetch("https://muc-student-companion-api.vercel.app/api/journals")
  .then((response) => response.json())
  .then((data) => {
    const journalList = data;

    console.log(journalList);
    const journalDynamic = document.querySelector(".journal__dynamic");
    dynamicContent = journalDynamic;

    // Create content with forEach
    journalList.forEach((journal, journalIndex) => {
      const section = newElements("section", "main__journal", " ");
      const headline = newElements("h2", "headline", "idk the date");
      importRectangles(journal);
      importStars(journal);
      const motto = newElements("span", "label", "Motto:");
      const mottoContent = newElements(
        "p",
        "body__large",
        `"${journal.motto}"`
      );
      const notes = newElements("span", "label", "Notes:");
      const notesContent = newElements("p", "body__small", `${journal.notes}`);
    });
    saveToLocal("Journal", journalList);
  })
  .catch(() => {
    const journalList = loadFromLocal("Journal");
    const journalDynamic = document.querySelector(".journal__dynamic");
    dynamicContent = journalDynamic;

    // Create content with forEach
    journalList.forEach((journal, journalIndex) => {
      const section = newElements("section", "main__journal", " ");
      const headline = newElements("h2", "headline", "idk the date");
      importRectangles(journal);
      importStars(journal);
      const motto = newElements("span", "label", "Motto:");
      const mottoContent = newElements(
        "p",
        "body__large",
        `"${journal.motto}"`
      );
      const notes = newElements("span", "label", "Notes:");
      const notesContent = newElements("p", "body__small", `${journal.notes}`);
    });
  });

// Get date label
const myDate = document.querySelector(".header__label");

// Get date components
const d = new Date();
const date = d.getDate();
const month = d.getMonth() + 1; // getMonth() returns month from 0-11 not 1-12
const year = d.getFullYear();

// Insert todays date
myDate.innerText = `Date - ${date}.${month}.${year}`;
const dateHeader = document.querySelector(".today");
dateHeader.innerText = `TODAY, ${date}.${month}.${year}`;

//
const stars = document.querySelectorAll(".star__inactive");
const blocks = document.querySelectorAll(".block__inactive");

//
stars.forEach((star, index) => {
  star.addEventListener("click", () => {
    const starsInactive = Array.from(stars).slice(index + 1, stars.length);
    stars.forEach((starActive) => {
      starActive.classList.add("star__active");
      starsInactive.forEach((starInactive) => {
        starInactive.classList.remove("star__active");
      });
    });
  });
});

//
blocks.forEach((block, index) => {
  block.addEventListener("click", () => {
    const blockInactive = Array.from(blocks).slice(index + 1, blocks.length);
    blocks.forEach((blockActive) => {
      blockActive.classList.add("block__active");
      blockInactive.forEach((blockInactive) => {
        blockInactive.classList.remove("block__active");
      });
    });
  });
});

// Element-creator
function newElements(elementName, elementClass, elementText) {
  const newElement = document.createElement(elementName);
  dynamicContent.appendChild(newElement);
  newElement.classList.add(elementClass);
  newElement.innerHTML = elementText;
}

// -> Boxes-LOOP!!!
function importRectangles(journalNumber) {
  const comprehension = newElements("span", "label", "Comprehension:");
  const blockContainer = document.createElement("div");
  dynamicContent.appendChild(blockContainer);
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
  dynamicContent.appendChild(starContainer);
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

// POST
const form = document.querySelector("form");
const buttonSave = document.querySelector(".btn__save");
const buttenCancel = document.querySelector(".btn__cancel");

buttonSave.addEventListener("click", (event) => {
  event.preventDefault();
  const ratings = document.querySelectorAll(".star__active");
  const rating = Array.from(ratings).length;
  const comprehensions = document.querySelectorAll(".block__active");
  const comprehension = Array.from(comprehensions).length;
  const entry = {
    rating: rating,
    comprehension: comprehension,
    motto: form.motto,
    notes: form.notes,
    date: `${date}.${month}.${year}`,
  };
  ratings.forEach((ratingSign) => {
    ratingSign.classList.remove("star__active");
  });
  comprehensions.forEach((comprehensionSign) => {
    comprehensionSign.classList.remove("block__active");
  });
  form.motto.value = " ";
  form.notes.value = " ";
  postJournalEntry(entry);
});

// Function post

function postJournalEntry(entry) {
  fetch("https://muc-student-companion-api.vercel.app/api/journals", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(entry),
  })
    .then((res) => res.json())
    .then((entries) => console.log(entries));
}
