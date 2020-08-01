// ui elements
let msg = document.getElementById('msg')
let color1 = document.getElementById('color1')
let color2 = document.getElementById('color2')
let color3 = document.getElementById('color3')
let color4 = document.getElementById('color4')
let color5 = document.getElementById('color5')

// define
let min = 1
let max = 5
let guessesLeft = 3
let rightColor = getRandomColor(min, max)

// listen for guess
let colors = document.querySelectorAll('i')
let colorsArr = Array.from(colors)
colorsArr.map((color) => {
  color.addEventListener('click', (e) => {
    // check if won
    if (e.target.style.color === rightColor) {
      setMessage('Yaaaaay....You Win!', 'greenYellow')
      setTimeout(() => window.location.reload(), 2000);
    } else {
      guessesLeft -= 1
      if (guessesLeft === 0) {
        lostMessage('Sorry! you Lost. The right color was', `${rightColor}`, 'white')
        setTimeout(() => window.location.reload(), 3000);
      } else {
        setMessage(`Incorrect!, you have ${guessesLeft} guesses left`, 'red')
      }
    }
  })
})

// set message
function setMessage(message, color) {
  msg.textContent = message
  msg.style.color = color
}

// lost message
function lostMessage(message, rightcolor, color) {
  console.log(message)
  console.log(rightcolor)
  console.log(color)
  let iTag = document.createElement('i');
  iTag.className = 'fas fa-circle fa-2x'
  iTag.style.color = rightcolor
  iTag.style.padding = '1rem'
  msg.textContent = message
  msg.style.color = color
  msg.appendChild(iTag)
}

// get random color
function getRandomColor(min, max) {
  let value = Math.floor(Math.random() * (max - min + 1) + min)
  if (value == 1) {
    return color1.style.color
  } else if (value == 2) {
    return color2.style.color
  } else if (value == 3) {
    return color3.style.color
  } else if (value == 4) {
    return color4.style.color
  } else {
    return color5.style.color
  }
}
