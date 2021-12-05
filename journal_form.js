const form = document.querySelector('form')
const inputMotto = document.querySelector('input[name="motto"]')
const inputNotes = document.querySelector('input[name="notes"]')
const newMottos =[]
const newNotes =[]
form.addEventListener('submit', () => {
    event.preventDefault()
    const newMotto= inputMotto.value
    newMottos.push(newMotto)
    const newNote= inputNotes.value
    newNotes.push(newNote)
    const entry = {
        "rating": 2,
        "comprehension": 3,
        "motto": newMotto,
        "notes": newNote
    }
    form.reset()
//localStorage.setItem('_NEWMOTTO', JSON.stringify(newMottos))
//localStorage.setItem('_NEWNOTES', JSON.stringify(newNotes))
localStorage.setItem('_NEWJOURNAL', JSON.stringify(entry))

//Fetsch innerhalb des EventListeners
/*fetch("https://muc-student-companion-api.vercel.app/api/journals",
                  {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(entry)
                   })
                    .then((res) => res.json())
                    .then((entries) => console.log(entries));*/
                  
})
