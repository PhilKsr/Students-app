console.clear()

fetch('https://muc-student-companion-api.vercel.app/api/journals')
  .then((response) => response.json())
  .then((data) => {

    console.log(data)



    data.forEach((log, index) => {
      const main = document.querySelector('main')
      const section = document.createElement('section')
      section.classList.add('main__journal')
      main.appendChild(section)
      section.innerHTML = `<h2 class="headline">Yesterday</h2>
      <span class="label">Rating:</span>
      <div class="stars">
        <div></div>
        <div></div>
        <div></div>
        <div class="inactive"></div>
        <div class="inactive"></div>
      </div>

      <span class="label">Comprehension:</span>
      <div class="square">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div class="inactive"></div>
        <div class="inactive"></div>
      </div>
    
      <span class="label">Motto:</span>
      <p class="body__large">"${log.motto}"</p>
    
      <span class="label">Notes:</span>
      <p class="body__small">${log.notes}</p>`
    });
  })



// Get date label
const myDate = document.querySelector('.header__label')

// Get date components
const d = new Date();
const date = d.getDate();
const month = d.getMonth() + 1; // getMonth() returns month from 0-11 not 1-12
const year = d.getFullYear();

// insert todays date
myDate.innerText = `Date - ${date}.${month}.${year}`;

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