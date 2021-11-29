const buddiesGroups = [
    ['Sudanka Bakalowits', 'Yasaman Foroutan'],
    ['Angela Longoria', 'Maria Trofimova'],
    ['Benedita Tavares', 'Elise Beverley'],
    ['Evelyn Allen', 'Rafeeda El Nouri'],
    ['Sudanka Bakalowits', 'Yasaman Foroutan'],
]

buddiesGroups.forEach((group, index) => {
    const main = document.querySelector('main')
    const ul = document.createElement('ul')
    group.forEach((name, index) => {
        const li = document.createElement('li')
        li.innerText = name
        ul.appendChild(li)
    })
    main.appendChild(ul)
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
