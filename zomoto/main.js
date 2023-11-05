const arrow_btn = document.getElementById('arrow'),
    citi_content = document.getElementById('citi_content'),
    search_dish = document.querySelector('.resto_dish_search_content'),
    search_btn = document.getElementById('dish_search'),
    close_btn = document.getElementById('close_btn_banner_citi'),
    body = document.querySelector('body');



// New Object Define For Login Box And Sign In Box 

const close_login = document.querySelector('.close_login_popup'),
    login_form = document.querySelector('.login_popup'),
    input_login = document.getElementById('input_login'),
    mobile_box = document.querySelector('._mobile_box');



// Sign Object 
const close_sign = document.querySelector('.close_sign_popup'),
      sign_form = document.querySelector('.sign_up');



close_sign.addEventListener('click', () => {
    sign_form.style.opacity = '0';
})

// Navigation Define Object 

const log = document.getElementById('log'),
      sign = document.getElementById('sign');


close_login.addEventListener('click', () => {
    login_form.style.opacity = '0'
})

sign.addEventListener('click', () => {
    sign_form.style.opacity = '1'
    login_form.style.opacity = '0'
    search_dish.style.opacity = '0'
    citi_content.style.opacity = '0'
})

// Login CallBack
log.addEventListener('click', () => {
    login_form.style.opacity = '1'
    sign_form.style.opacity = '0'
    citi_content.style.opacity = '0'
    search_dish.style.opacity = '0'
})


// Search container Script 
search_btn.addEventListener('click', () => {
    search_dish.style.opacity = '1'
    arrow_btn.style.transform = 'rotate(0deg)'
    sign_form.style.opacity = '0'
    citi_content.style.opacity = '0'
    login_form.style.opacity = '0'
})

// body.addEventListener('click', () => {
//     citi_content.style.opacity = '0'
//     search_dish.style.opacity = '0'
// })

// Cityes Product Banner Script     
arrow_btn.addEventListener('click', () => {
    citi_content.style.opacity = '1'
    arrow_btn.style.transform = 'rotate(180deg)'
    login_form.style.opacity = '0'
    sign_form.style.opacity = '0'
    search_dish.style.opacity = '0'
})



// Close For Product Banner Script
close_btn.addEventListener('click', () => {
    citi_content.style.opacity = '0'
    arrow_btn.style.transform = 'rotate(0deg)'
    login_form.style.opacity = '0'
    search_dish.style.opacity = '0'
})




close_login.addEventListener('click', () => {
    login_form.style.opacity = '0'
    sign_form.style.opacity = '0'
    citi_content.style.opacity = '0'
    search_dish.style.opacity = '0'
})

