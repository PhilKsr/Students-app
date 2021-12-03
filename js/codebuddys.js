fetch('https://muc-student-companion-api.vercel.app/api/buddies')
    .then((response) => response.json())
    .then((data) => {

        console.log(data)

        data.forEach((buddies, index) => {
            
            const main = document.querySelector('main')
            const ul = document.createElement('ul')
            buddies.forEach((name, index) => {
                const li = document.createElement('li')
                li.innerText = name
                ul.appendChild(li)
            })
            main.appendChild(ul)
        })

    })
    
    // Datum

    // const day = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    // const today = new Date()
    // const date = day[today.getDay()] + '' + today.getDate() + '.' + (today)