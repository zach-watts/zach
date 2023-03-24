const container = document.getElementById('container')
const colors = ['#e74cbc','#8e44ad','#3498db','#f01d39','#22f5f5','#2df522','#f5d222','#fc8617']
const SQUARES = 40000

for (let i = 0; i < SQUARES; i++) {
    const square = document.createElement('div')
    square.classList.add('square')
    container.appendChild(square)
    square.addEventListener('mouseover', () => setColor(square))
    square.addEventListener('mouseout', () => removeColor(square))
}

function setColor(element) {
    const color = colors[Math.floor(Math.random() * 8)]
    element.style.background = color
}

function removeColor(element) {
    element.style.background = '#424242'
}