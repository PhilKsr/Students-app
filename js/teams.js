let teams = [
    'Team 1',
    'Team 2'
]
let members = [
    ['bla', 'bla1'],
    ['bla', 'bla1']
]

teams.forEach((team, index) => {

    const main = document.querySelector('main')
    const section = document.createElement('section')
    section.classList.add('teams-list')

    const h2 = document.createElement('h2')
    h2.classList.add('headline', 'headline-cbt')
    h2.innerText = team
    const ul = document.createElement('ul')
    ul.classList.add('teams-list__one')

    const li = document.createElement('li')
    li.classList.add('list-item')
    li.innerText = 'Team X'

    main.appendChild(section)
    section.appendChild(h2)
    section.appendChild(ul)
    ul.appendChild(li)

    console.log(section)
});


const list = ['one', 'two', 'three'];


function printer(number) {
    console.log(number);
}

list.forEach(printer);

list.forEach((number) => {
    console.log(number);
});

