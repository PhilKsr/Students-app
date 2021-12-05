fetch ('https://muc-student-companion-api.vercel.app/api/teams')
.then ((data) => data.json())
.then ((response) => {
    const teamFromApi = response 

teamFromApi.forEach((team, index) => {

    const main = document.querySelector('main')
    const section = document.createElement('section')
    section.classList.add('teams-list')
    main.appendChild(section)

    const h2 = document.createElement('h2')
    section.appendChild(h2)
    h2.classList.add('headline', 'headline-cbt')
    h2.innerText = `Team ` + (index +1) // Verstehe ich nicht wieso index +1 works
    
    const ul = document.createElement('ul')
    ul.classList.add('teams-list__one')
    section.appendChild(ul)

    const teamMembers = teamFromApi[index]

    teamMembers.forEach((item, index) => {

        const li = document.createElement('li')
        li.classList.add('list-item')
        li.innerText = item
        ul.appendChild(li)
    })
    
   
    

})
})


