let block_menu = document.querySelector('.burger-block')
let block_bg = document.querySelector('.burger-bg')
const burger = () => {
    block_menu.classList.add('burger-active')
    block_bg.classList.add('burger-active')
}
const burger_close = () => {
    block_menu.classList.remove('burger-active')
    block_bg.classList.remove('burger-active')
}