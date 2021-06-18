const startBtn = document.querySelector('#start')
const screens = document.querySelectorAll('.screen')
const timeList = document.querySelector('#time-list')
const timeEl = document.querySelector('#time')
const board = document.querySelector('#board')
let time = 0
let score = 0


startBtn.addEventListener('click', (event) => {
  event.preventDefault()
  screens[0].classList.add('up')
})

timeList.addEventListener('click', event => {
  // delegirovanie
  if (event.target.classList.contains('time-btn')) {
    //! sdes mi polucaem vrema v data atribute
    // console.log(parseInt(event.target.getAttribute('data-time')));
    time = parseInt(event.target.getAttribute('data-time'))
    screens[1].classList.add('up')
    startGame()

  }
})

board.addEventListener('click', event => {
  if (event.target.classList.contains('circle')) {
    score++
    event.target.remove()
    createRandomCurcle()
  }
})

function startGame() {
  // tak kak mi tocno znaem cto najimaem po 1 indeksu
  // screens[1].classList.add('up')
  // ? vstavili funktiyu i vizivae kajduyu sekundu
  setInterval(decreaseTime, 1000)
  // !dobavlaem krujocek
  createRandomCurcle()
  // ! mi menaem eto na funkciyu tak kak sdes mnoqo cto povtoraetsa menaetsa tolko znaceniya
  // timeEl.innerHTML = `00:${time}`
  setTime(time)
}

function decreaseTime() {
  if (time === 0) {
    finishGame()
  } else {
    let current = --time
    if (current < 10) {
      current = `0${current}`
    }
    // ! mi menaem eto na funkciyu tak kak sdes mnoqo cto povtoraetsa menaetsa tolko znaceniya
    // timeEl.innerHTML = `00:${current}`
    setTime(current)
  }

}

function setTime(value) {
  timeEl.innerHTML = `00:${value}`
}

function finishGame() {
  // !udalaem roditela
  timeEl.parentNode.classList.add('hide')
  board.innerHTML = `<h1>Your Score : <span class="primary">${score}</span></h1>`
}

// Change color circle
function changeRandomColor() {
  let colorNumber = '0123456789ABCDEF'.split('')
  let bgColor = '#'

  for (let i = 0; i < 6; i++) {
    bgColor += colorNumber[Math.floor(Math.random() * 16)]
    if (bgColor == '#29323C' && bgColor == '#2A333D') {
      bgColor = '#fff'
    }
  }

  return bgColor
}

function createRandomCurcle() {
  const circle = document.createElement('div')
  const size = getRandomNumber(10, 60)
  // distrukturizaciya
  const {
    width,
    height
  } = board.getBoundingClientRect()


  const x = getRandomNumber(0, width - size)
  const y = getRandomNumber(0, height - size)
  const color = changeRandomColor()

  circle.classList.add('circle')
  circle.style.width = `${size}px`
  circle.style.height = size + 'px'
  circle.style.top = x + 'px'
  circle.style.left = y + 'px'
  circle.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
  circle.style.background = color
  board.append(circle)
}

function getRandomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min)

}

// !hack the game
function winTheGame() {
  function kill() {
    const circle = document.querySelector('.circle')
    if(circle) {
      circle.click()
    }
    
  }
  setInterval(kill, 42)
}