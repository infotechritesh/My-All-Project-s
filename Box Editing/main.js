// Javascript 

// All object Define 

const borderRadius = document.getElementById('boradi'),
    width = document.getElementById('width'),
    height = document.getElementById('height'),
    color = document.getElementById('color'),
    border = document.getElementById('border'),
    bg = document.getElementById('bg');


// Output Object Define 
const box = document.getElementById('box');


// Border Radius Process 
const circle = document.getElementById('circle'),
    squere = document.getElementById('squere'),
    magic_1 = document.getElementById('magic_1'),
    magic_2 = document.getElementById('magic_2'),
    magic_3 = document.getElementById('magic_3'),
    magic_4 = document.getElementById('magic_4'),
    magic_5 = document.getElementById('magic_5'),
    border_R_Back_btn = document.getElementById('border_radius_back_btn');

// Callback BorderRadius Container 
borderRadius.addEventListener('click', () => {
    document.querySelector('.amizing_shape').style.transform = 'translate(0%,0%)';
})

border_R_Back_btn.addEventListener('click', () => {
    document.querySelector('.amizing_shape').style.transform = 'translate(-100%,0%)';
})


// Proces AddEventLisner
circle.addEventListener('click', () => {
    box.style.borderRadius = '50%'
})

squere.addEventListener('click', () => {
    box.style.borderRadius = '0%'
})

magic_1.addEventListener('click', () => {
    box.style.borderRadius = '30% 70% 70% 30% / 30% 32% 68% 70%'
})

magic_2.addEventListener('click', () => {
    box.style.borderRadius = '30% 70% 55% 45% / 59% 5% 95% 41%'
})
magic_3.addEventListener('click', () => {
    box.style.borderRadius = '0% 100% 0% 100% / 59% 68% 32% 41%'
})
magic_4.addEventListener('click', () => {
    box.style.borderRadius = '35% 33% 21% 20% / 39% 46% 51% 55%'
})
magic_5.addEventListener('click', () => {
    box.style.borderRadius = '51% 48% 0% 51% / 44% 47% 35% 0%'
})