// Menu Functiojn Create 

function menu() {
    document.getElementById('menunav').style.display = 'block';
    document.getElementById('menu-icon-close').style.display = 'block';
    document.getElementById('menu-close-icon').style.display = 'block';
    document.getElementById('menu-icon').style.display = 'none';
}

function menuclose() {
    document.getElementById('menunav').style.display = 'none';
    document.getElementById('menu-icon').style.display = 'block';
    document.getElementById('menu-icon-close').style.display = 'none';
}

// Script Sign Page Display 
function logPage(){
    document.getElementById('pop').style.display = 'block';
    document.getElementById('main').style.display = 'none';
}

function home(){
    document.getElementById('main').style.display = 'block';
    document.getElementById('pop').style.display = 'none';
}