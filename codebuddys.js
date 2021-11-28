const codebuddys = [
    ['codebuddys',['Hallo Hallochen', 'Tschuss Zusammen']],
    ['codebuddys2',['Hallo Hallochen2', 'Tschss Zusammen2']],
    ['codebuddys3',['Hallo Hallchen3', 'Tschss Zusammen3']],
    ['codebuddys4',['Hallo Hallchen4', 'Tschss Zusammen4']]
];
//const main = document.querySelector('main')
//console.log(codebuddys[0][1][1]) //Tschuss Zusammen

/*const codebuddys = [
    [['Hallo Hallochen'], ['Tschuss Zusammen']],
    [['Hallo Hallochen2'], ['Tschss Zusammen2']],
    [['Hallo Hallchen3'], ['Tschss Zusammen3']],
    [['Hallo Hallchen4'], ['Tschss Zusammen4']]
];*/



const main = document.querySelector('main')

codebuddys.forEach((group) => {
let codeBuddysSection = document.createElement('section')
let codeBuddysName1 = document.createElement('div')
let spanName1 = document.createElement('span')
let codeBuddysName2 = document.createElement('div')
let spanName2 = document.createElement('span')
main.appendChild(codeBuddysSection)
codeBuddysSection.classList.add('code-buddys')
codeBuddysSection.appendChild(codeBuddysName1)
codeBuddysName1.classList.add('code-buddys__container--name1')
codeBuddysName1.appendChild(spanName1)
codeBuddysSection.appendChild(codeBuddysName2)
codeBuddysName2.classList.add('code-buddys__container--name2')
codeBuddysName2.appendChild(spanName2)


    group.forEach((name) => {
    spanName1.innerText = name[0]
    spanName2.innerText = name[1]
    })
})