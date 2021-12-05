/*const buddiesGroupsErsatz = [
    ['Sudanka Bakalowits', 'Yasaman Foroutan'],
    ['Angela Longoria', 'Maria Trofimova'],
    ['Benedita Tavares', 'Elise Beverley'],
    ['Evelyn Allen', 'Rafeeda El Nouri'],
    ['Sudanka Bakalowits', 'Yasaman Foroutan'],
]*/
//function saveErsatz(name, data) {
  //  localStorage.setItem('_buddiesFake', JSON.stringify(buddiesGroupsErsatz))
//}
const buddiesErsatz = JSON.parse(localStorage.getItem('_buddiesFake'))

function renderBuddies (team){
    team.forEach((group, index) => {
       const main = document.querySelector('main')
       const ul = document.createElement('ul')
       main.appendChild(ul)
       
       group.forEach((name, index) => {
           const li = document.createElement('li')
           li.innerText = name
           ul.appendChild(li)
       })
       
   }) 
 }

fetch ('https://muc-student-companion-api.vercel.app/api/buddies')
    .then((data) => data.json())
    .then((response) => {
        const buddiesGroups = response

        renderBuddies(buddiesGroups)

})
.catch((error) => renderBuddies(buddiesErsatz))






    // Get date label
const myDate = document.querySelector('.header__label')

// Get date components
const d = new Date();
const date = d.getDate();
const month = d.getMonth() + 1; // getMonth() returns month from 0-11 not 1-12
const year = d.getFullYear();

// insert todays date
myDate.innerText = `Date - ${date}.${month}.${year}`;
