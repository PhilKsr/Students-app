// Get date label
const myDate = document.querySelector('.header__label')

// Get date components
const d = new Date();
const date = d.getDate();
const month = d.getMonth() + 1; // getMonth() returns month from 0-11 not 1-12
const year = d.getFullYear();

// insert todays date
myDate.innerText = `Date - ${date}.${month}.${year}`; //zum weiterverwenden

//Get Journals from API
fetch('https://muc-student-companion-api.vercel.app/api/journals')
  .then ((data) => data.json())
  .then ((datajson) => {
    const journalEntry = datajson
  // localStorage.setItem ( '_ENTRIES', JSON.stringify(journalEntry))
    //console.log(journalEntry[0].notes) 


//Programmatische Erstellung der JournalsSection
journalEntry.forEach((entry, index) => {
const main = document.querySelector('main')
  const journalEntryElement = document.createElement('section')
  journalEntryElement.classList.add('main__journal')
  main.appendChild(journalEntryElement)

  const h2Day = document.createElement('h2')
  h2Day.classList.add('headline')
  journalEntryElement.appendChild(h2Day)
  h2Day.innerText = myDate.innerText

  const ratingTitel = document.createElement('span')
  journalEntryElement.appendChild(ratingTitel)
  ratingTitel.classList.add('label')
  ratingTitel.innerText = 'Rating:'

  const starsContainer = document.createElement('div')
  journalEntryElement.appendChild(starsContainer)
  starsContainer.classList.add('stars')
  starsContainer.innerHTML = `${entry.rating} Sterne`

  const compriTitel = document.createElement('span')
  journalEntryElement.appendChild(compriTitel)
  compriTitel.classList.add('label')
  compriTitel.innerText = 'Comprehension:'

  const blockContainer = document.createElement('div')
  journalEntryElement.appendChild(blockContainer)
  blockContainer.classList.add('block')
  blockContainer.innerHTML = `${entry.comprehension} BLOCKS`

  const mottoContainer = document.createElement('div')
  journalEntryElement.appendChild(mottoContainer)
  const mottoTitel = document.createElement('span')
  mottoContainer.appendChild(mottoTitel)
  mottoTitel.classList.add('label')
  mottoTitel.innerText = 'Motto:'

  const mottoPar = document.createElement('p')
  mottoContainer.appendChild(mottoPar)
  mottoPar.classList.add('body__large')  
  mottoPar.innerText = entry.motto

  const notesContainer = document.createElement('div')
  journalEntryElement.appendChild(notesContainer)
  const notesTitel = document.createElement('span')
  notesContainer.appendChild(notesTitel)
  notesTitel.classList.add('label')
  notesTitel.innerText = 'Notes:'

  const notesPar = document.createElement('p')
  notesContainer.appendChild(notesPar)
  notesPar.classList.add('body__small')  
  notesPar.innerText = entry.notes

})
  })

//console.log(myDate.innerText)
  // Stars und Quadrate
const stars = document.querySelectorAll(".star__inactive");
const blocks = document.querySelectorAll(".block__inactive");

stars.forEach((star, index) => {
  star.addEventListener("click", () => {
    const starsInactive = Array.from(stars).splice(index + 1, stars.length);
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
    const blockInactive = Array.from(blocks).splice(index + 1, blocks.length);
    blocks.forEach((blockActive) => {
      blockActive.classList.add("block__active");
      blockInactive.forEach((blockInactive) => {
        blockInactive.classList.remove("block__active");
      });
    });
  });
});