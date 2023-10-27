// I love Javascript


const menu = document.getElementById('menu');
const sideBar = document.getElementById('side');
const nav = document.getElementById('nav');
const logo = document.getElementById('logo');
const close_btn = document.getElementById('close_btn');

menu.addEventListener('click',function(){
    sideBar.style.marginLeft = '0.1%';
    logo.style.zIndex = '5';
})

close_btn.addEventListener('click', function () {
    sideBar.style.marginLeft = '-100%'
})