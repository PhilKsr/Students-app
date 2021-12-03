const starAll = document.querySelectorAll('.star-svg')
//const starFullFill = 'fill'
//const starFullColor = '#193251'
const starFullColor2 = '#e0e4e8'
//const starFull = star.setAttribute(starFullFill,starFullColor)
//const starPath = document.querySelector()
//const starSvg = document.querySelector('.star-svg')
//const star = document.querySelector('svg')
//const headline = document.querySelector('.headline')

starAll.forEach((star) => {
//const starFull = star.setAttribute(starFullFill,starFullColor)
//const starVoid = star.setAttribute(starFullFill,starFullColor2)
star.addEventListener('click', () => {
    star.removeAttribute('fill')
    
     if (!star.hasAttribute('fill')) {
        
        star.addEventListener('click', () => {
            star.setAttribute('fill', 'red')
            
        })
    }else{
        star.addEventListener('click', () => {
        star.removeAttribute('fill')
        console.log('hex')
        })
    }
    
    //console.log("Hex")

    
    
    /*if (star.setAttribute === starFullFill,starFullColor) {
    (star.setAttribute = starFullFill,starFullColor2)
    }else{
    (star.setAttribute = starFullFill,starFullColor)
    }*/
    
    //star.setAttribute.innerText = star.setAttribute() === '"fill", "#193251"'?'"fill", "#e0e4e8"':'"fill", "#193251"'
    })

//})

/*starAll.forEach((starfull) => {
    starfull.addEventListener('click', () => {
        console.log("Hex")
        //starfull.classList.add('star-path-full')
        
        })
    })*/
})
