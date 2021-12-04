fetch('https://muc-student-companion-api.vercel.app/api/journals')
  .then((response) => response.json())
  .then((data) => {

    console.log(data)

    data.forEach((team, index) => {

      const main = document.querySelector('main')
      const section = document.createElement('section')
      section.classList.add('main__journal')

      const divButton = document.createElement('div')
      divButton.classList.add('btn__center')
      const rateButton = document.createElement('button')
      rateButton.classList.add('btn__rate-today body__large')
      rateButton.innerText(`Rate Today <i class="fa-regular fa-star"></i>`)

      






      const ul = document.createElement('ul')
      ul.classList.add('teams-list__one')



      team.forEach((item, index) => {

        const li = document.createElement('li')
        li.classList.add('list-item')
        li.innerText = item
        ul.appendChild(li)
      })

      main.appendChild(section)
      section.appendChild(h2)
      section.appendChild(ul)

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