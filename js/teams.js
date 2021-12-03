fetch('https://muc-student-companion-api.vercel.app/api/teams')
    .then((response) => response.json())
    .then((data) => {

        console.log(data)

        data.forEach((team, index) => {

            const main = document.querySelector('main')
            const section = document.createElement('section')
            section.classList.add('teams-list')

            const h2 = document.createElement('h2')
            h2.classList.add('headline', 'headline-cbt')
            h2.innerText = `Team ${index + 1}`
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
