let teams = [
    'Team 1',
    'Team 2'
]
let members = [
    ['Peter Lustig', 'Kevin home alone', 'Benjamin Blümchen', 'Max Muster', 'Dschingis Khan'],
    ['Axel Schweiß', 'Jeremy Pascal', 'Pipi Langstrumpf', 'Bibi Blocksberg', 'Jim Knopf']
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

    const teamMembers = members[index]

    teamMembers.forEach((item, index) => {

        const li = document.createElement('li')
        li.classList.add('list-item')
        li.innerText = item
        ul.appendChild(li)
    })
    
    main.appendChild(section)
    section.appendChild(h2)
    section.appendChild(ul)

});


