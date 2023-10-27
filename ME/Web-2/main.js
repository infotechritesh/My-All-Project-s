// Javascript Use Start 
let co_pay = document.getElementById('co-pay').style.display = 'none';
let co_process = document.getElementById('pay-process').style.display = 'none';

// Home Function Display 
function home() {
    document.getElementById('main').style.display = 'block';
    document.getElementById('com').style.display = 'block';
    document.getElementById('students').style.display = 'block';
    document.getElementById('co').style.display = 'block';
    document.getElementById('co-pro').style.display = 'block';
    document.getElementById('co-pay').style.display = 'none';
    document.getElementById('founder').style.display = 'block';
    co_process.style.display = 'none'
}

function Course() {
    document.getElementById('main').style.display = 'none';
    document.getElementById('com').style.display = 'none';
    document.getElementById('students').style.display = 'none';
    document.getElementById('co-pay').style.display = 'none';

}
function co() {
    document.getElementById('co-pay').style.display = 'block';
    document.getElementById('main').style.display = 'none';
    document.getElementById('com').style.display = 'none';
    document.getElementById('students').style.display = 'none';
    document.getElementById('co').style.display = 'none';
    document.getElementById('co-pro').style.display = 'none';
    document.getElementById('founder').style.display = 'none';
}

