// Javascript 

// Hidden Functionality 
document.getElementById('pay').style.display = 'none';
document.getElementById('pay-form').style.display = 'none';


// Select Subscription
function select() {
    document.getElementById('pay').style.display = 'block';
    document.getElementById('cards').style.display = 'none';

    document.getElementById('membership-title').innerHTML = 'Choose how to pay';
}

function creDeb() {
    document.getElementById('pay').style.display = 'none';
    document.getElementById('pay-form').style.display = 'block';

    document.getElementById('membership-title').innerHTML = 'Set up your credit or debit card';
}

// Money Define
function moneyValue() {
    let money = document.getElementById('value');
    money.innerHTML = ' $ 199';
}
function moneyValue1() {
    let money = document.getElementById('value');
    money.innerHTML = ' $ 499';
}
function moneyValue2() {
    let money = document.getElementById('value');
    money.innerHTML = ' $ 1199';
}
// Change textContent on start debit or credit form fill 

function change() {
    document.getElementById('pay').style.display = 'none';
    document.getElementById('cards').style.display = 'flex';
    document.getElementById('pay-form').style.display = 'none';


    document.getElementById('membership-title').innerHTML = ' Choose the plan that’s right for you';

}


// Next Page 

document.getElementById('next-page').style.display = ' none ';

function nextPage() {
    let next = document.getElementById('next-page');

    next.style.display = 'none'

    if (money == onclick ){
        next.style.display = 'flex'
    }
    else{
        alert('Please Get Subscription !! ');
    }
}

// On Click Subscribe button script

function subscribe() {
    alert(' Please Select Your Membership ')
}