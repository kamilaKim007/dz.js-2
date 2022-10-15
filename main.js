let red = document.querySelector('.red-btn')
let yellow = document.querySelector('.yellow-btn')
let green = document.querySelector('.green-btn')
let btnReset = document.querySelector('.btn-reset')

red.addEventListener('click', () => {
    setTimeout (() =>{
        red.style.background = 'blue'
        console.log('paint it blue');
    }, 1000 )
    
})
yellow.addEventListener('click', () => {
    setTimeout(() =>{
        yellow.style.background = 'purple'
        console.log('paint it purple');
    }, 1000)
    
})
green.addEventListener('click', () => {
    setTimeout(() => {
            green.style.background = 'brown'
            console.log('paint it brown');
    },1000)
})
btnReset.addEventListener('click', () =>{
    setTimeout( () => {
        red.style.background = 'none'
    yellow.style.background = 'none'
    green.style.background = 'none'
    console.log('reset');
    },1000)
    
})


// setTimeout('click', function () {
//    console.log('red');
// }, 1000 )