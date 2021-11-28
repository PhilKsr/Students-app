/*const teams = [
    {teamName: 'Team 1',
    teamMembers: ['Peter Lustig', 'Kevin Home Alone', 'Benajmin Blümschen', 'Max Muster', 'Dschingis Khan']},
    {teamName:'Team 2',
    teamMembers: ['Axel Schweiß', 'Jeremy Pascal', 'Pipi Langstrumpf', 'Bibi Blocksberg', 'Jim Knopf']},
    {teamName: 'Team 3',
    teamMembers:['MAxel Schweiß', 'AJeremy Pascal', 'LiPipi Langstrumpf', 'Bibi Blocksberg', 'Jim Knopf']}
];*/
const teams = [
    ['Team 1',['Peter Lustig', 'Kevin Home Alone', 'Benajmin Blümschen', 'Max Muster', 'Dschingis Khan']],
    ['Team 2',['Axel Schweiß', 'Jeremy Pascal', 'Pipi Langstrumpf', 'Bibi Blocksberg', 'Jim Knopf']],
    ['Team 3',['MAxel Schweiß', 'AJeremy Pascal', 'LiPipi Langstrumpf', 'Bibi Blocksberg', 'Jim Knopf']]
];
const main = document.querySelector('main')

//console.log(teams[0][0][0]) //Peter Lustig
//console.log(teams[0][1]) // Team 1

/*teams[0][1].forEach((name) => {
    let listElement = document.createElement('li')
    let oberList = document.querySelector('ul')
    oberList.appendChild(listElement)
    listElement.classList.add('list-item')
    listElement.innerHTML = name
})*/

//teams.forEach((teamNr) => {
//let teamHeadLine = document.createElement('h2')
//main.appendChild(teamHeadLine)
//teamHeadLine.classList.add('title')
//teamHeadLine.innerText = teamNr[0]
    /*teams.forEach((name)=>{
        let listElement = document.createElement('li')
        let oberList = document.querySelector('ul')
        oberList.appendChild(listElement)
        listElement.classList.add('list-item')
        listElement.innerHTML = name[1]    
    })*/
//})

teams.forEach((teamNr) => {
    let teamSection = document.createElement('section')
    let oberList = document.createElement('ul')
    //let listElement = document.createElement('li')
    let teamHeadLine = document.createElement('h2')
    main.appendChild(teamHeadLine)
    teamHeadLine.classList.add('title')
    teamHeadLine.innerText = teamNr[0]
    
    main.appendChild(teamSection)
    teamSection.classList.add('teams-list')
    teamSection.appendChild(oberList)
    oberList.classList.add('teams-list')
    
        teamNr[1].forEach((teamMember) => {
            let listElement = document.createElement('li')
            oberList.appendChild(listElement)
            listElement.classList.add('list-item') 
            listElement.innerHTML = teamMember
        })
//    
//    

    
})