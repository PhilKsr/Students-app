// Fetch from API
let dynamicContent;
fetch("https://muc-student-companion-api.vercel.app/api/journals")
  .then((response) => response.json())
  .then((data) => {
    const journalList = data;

    console.log(journalList);
    const journalDynamic = document.querySelector(".journal__dynamic");
    dynamicContent = journalDynamic;
    journalList.forEach((journal, journalIndex) => {
      const section = newElements("section", "main__journal", " ");
      const headline = newElements("h2", "headline", "Journal entry");
      importStars(journal);
      importRectangles(journal);
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
  // SAME FOR LOCAL STORAGE
  .catch(() => {
    const journalList = loadFromLocal("Journal");
    const journalDynamic = document.querySelector(".journal__dynamic");
    dynamicContent = journalDynamic;
    journalList.forEach((journal, journalIndex) => {
      const section = newElements("section", "main__journal", " ");
      const headline = newElements("h2", "headline", "Journal entry");
      importStars(journal);
      importRectangles(journal);
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

// TODAYS DATE
const myDate = document.querySelector(".header__label");

const d = new Date();
const date = d.getDate();
const month = d.getMonth() + 1; // getMonth() returns month from 0-11 not 1-12
const year = d.getFullYear();

myDate.innerText = `Date - ${date}.${month}.${year}`;
const dateHeader = document.querySelector(".today");
dateHeader.innerText = `TODAY, ${date}.${month}.${year}`;

// LOG STARS OR RECTANGLES
const stars = document.querySelectorAll(".star__inactive");
const blocks = document.querySelectorAll(".block__inactive");
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

// FUNCTION FOR ALL ELEMENTS WITH CLASS
function newElements(elementName, elementClass, elementText) {
  const newElement = document.createElement(elementName);
  dynamicContent.appendChild(newElement);
  newElement.classList.add(elementClass);
  newElement.innerHTML = elementText;
}

// FUNCTION TO IMPORT SVG -> RECTANGLES
function importRectangles(journalNumber) {
  const comprehension = newElements("span", "label", "Comprehension:");
  const blockContainer = document.createElement("div");
  dynamicContent.appendChild(blockContainer);
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

// FUNCTION TO IMPORT SVG -> STARS
function importStars(journalNumber) {
  const rating = newElements("span", "label", "Rating:");
  const starContainer = document.createElement("div");
  dynamicContent.appendChild(starContainer);
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
    motto: form.motto.value,
    notes: form.notes.value,
    date: `${date}.${month}.${year}`,
  };
  ratings.forEach((ratingSign) => {
    ratingSign.classList.remove("star__active");
  });
  comprehensions.forEach((comprehensionSign) => {
    comprehensionSign.classList.remove("block__active");
  });
  form.reset();
  postJournalEntry(entry);
});

// FUNCTION POST JOURNAL ENTRY
function postJournalEntry(entry) {
  fetch("https://muc-student-companion-api.vercel.app/api/journals", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(entry),
  })
    .then((res) => res.json())
    .then((entries) => console.log(entries));
}
