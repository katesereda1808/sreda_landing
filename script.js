const open_menu = document.querySelector('.header__menu_btn');
const menu = document.querySelector('.header__menu_mobile');
const close_menu = document.querySelector('.close_menu_btn');


open_menu.addEventListener('click', ()=>{
    console.log(menu)
    menu.classList.remove('hidden')
})
close_menu.addEventListener('click', ()=>{
    menu.classList.add('hidden')
})