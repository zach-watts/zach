const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

console.log(progress)

let currentActive = 1

next.addEventListener('click', () => {
    currentActive++

    if (currentActive > 4) {
        currentActive = 4
    }

    update()
})


prev.addEventListener('click', () => {
    currentActive--

    if (currentActive < 1) {
        currentActive = 1
    }
    update()
})

function update() {
    progress.style.width = (currentActive - 1) / 3 * 100 + '%'

    if (currentActive == 1) {
        prev.disabled = true
    }
    else if (currentActive == 4) {
        next.disabled = true
    }
    else {
        prev.disabled = false
        next.disabled = false
    }


    circles.forEach((circle, index) => {
        if (index < currentActive) {
            circle.classList.add('active')
        }
        else {
            circle.classList.remove('active')
        }
    })
}