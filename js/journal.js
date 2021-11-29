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