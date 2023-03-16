const button = document.querySelector('.btn')
const search = document.querySelector('.search')


button.addEventListener('click', () => {
    search.classList.toggle('active')
})