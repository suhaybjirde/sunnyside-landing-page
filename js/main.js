const toggler = document.querySelector('.toggler');
const nav = document.querySelector('.header-nav')
toggler.addEventListener('click', (e)=> {
    e.preventDefault()
    nav.classList.toggle('open')
})