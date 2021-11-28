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
