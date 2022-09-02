'use strict';
const open_menu = document.querySelector('.header__menu_btn');
const all_menu = Array.from(document.querySelectorAll('.header__menu'));
const all_close_menu = Array.from(document.querySelectorAll('.close_menu_btn'));
const menu_container = Array.from(document.querySelectorAll('.header__menu_container'));
console.log(menu_container)
// header__menu_container

menu_container.map(item=>{
    item.addEventListener('blur',()=>{
        console.log('blurrrr')
        all_menu.map(menu=>{
            menu.classList.add('hidden')
        })
    })
})

open_menu.addEventListener('click', ()=>{
    all_menu.map(item=>{
        item.classList.remove('hidden')
    })
})
all_close_menu.map(item=>{
    item.addEventListener('click',()=>{
        all_menu.map(item=>{
            item.classList.add('hidden')
        })
    })
})

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