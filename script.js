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


const img_gallery = document.querySelector('.gallery_mobile_images');
const arrow_left = document.querySelector('.arrow_left');
const arrow_right = document.querySelector('.arrow_right');

arrow_left.addEventListener('click', ()=>{
    console.log('arrow_left')
  img_gallery.scrollLeft-=300;
})
arrow_right.addEventListener('click', ()=>{
    console.log('arrow_right')
  img_gallery.scrollLeft+=300;
})

// arrow_right