'use strict';
const open_menu = document.querySelector('.header__menu_btn');
const all_menu = document.querySelectorAll('.header__menu');
const all_close_menu = document.querySelectorAll('.close_menu_btn');


open_menu.addEventListener('click', ()=>{
    console.log(all_menu)
    for(let i=0; i<all_menu.length; i++){
        console.log(all_menu[i]);
        all_menu[i].classList.remove('hidden');
    }
})
for (let i = 0; i < all_close_menu.length; i++) {
    all_close_menu[i].addEventListener('click',()=>{
        for(let i=0; i<all_menu.length; i++){
            console.log(all_menu[i]);
            all_menu[i].classList.add('hidden');
        }
    })
}
