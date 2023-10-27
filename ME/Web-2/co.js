// Javascript I love You 

// function CoSelect(){
//     var course = document.getElementById('co-name');
//     course.innerHTML = ' Full Stack Web Developement '
// }


// populer courses ke function hai 

function top1(){
    document.getElementById('co-name').innerHTML = 'Android Development Training'
    document.getElementById('co-descri').innerHTML = "The Complete Android Development Course By Cs School For everyone's learn about matter's with doubt solve and big project's work !"
    document.getElementById('ruppee-value').innerHTML = "40,000"
}

function top2(){
    document.getElementById('co-name').innerHTML = 'Best Data Analysis Course'
    document.getElementById('co-descri').innerHTML = "The Complete Full Data Analysis Learn with Development Course By Cs School For everyone's learn about matter's"
    document.getElementById('ruppee-value').innerHTML = "80,000"

}

function top3(){
    document.getElementById('co-name').innerHTML = 'AI & Ml Course'
    document.getElementById('co-descri').innerHTML = "The Complete Full Data Analysis Learn with Development Course By Cs School For everyone's learn about matter's"
    document.getElementById('ruppee-value').innerHTML = "2,50,000"
}

function top4(){
    document.getElementById('co-name').innerHTML = 'M.E.R.N Stack Course'
    document.getElementById('co-descri').innerHTML = "The Complete MongoDB , Express.js , React.js and Node.js ( M.E.R.N ) Course By Cs School For everyone's learn about matter's"
    document.getElementById('ruppee-value').innerHTML = "10,000"

}


// Function's For Programmer Courses 

function pro1(){
    document.getElementById('co-name').innerHTML = "C++"
    document.getElementById('co-descri').innerHTML = "The Complete C++ Basic To High Level programming skill developement Course By Cs School For everyone's learn about matter's"
    document.getElementById('ruppee-value').innerHTML = "899"
}


function pro2(){
    document.getElementById('co-name').innerHTML = "JAVA"
    document.getElementById('co-descri').innerHTML = "The Complete Java Programming Language Course By Cs School For everyone's learn about matter's with doubt solve and big project's work !"
    document.getElementById('ruppee-value').innerHTML = "899"
}


function pro3(){
    document.getElementById('co-name').innerHTML = "Javascript"
    document.getElementById('co-descri').innerHTML = "The Complete Full Javascript Basic To Advanced Level with Core Javascript Course By Cs School For everyone's learn about matter's"
    document.getElementById('ruppee-value').innerHTML = "899"
}


function pro4(){
    document.getElementById('co-name').innerHTML = "Python Programming"
    document.getElementById('co-descri').innerHTML = "The Complete Python Programming Course By Cs School For everyone's learn about matter's"
    document.getElementById('ruppee-value').innerHTML = "899"
}


function pro5(){
    document.getElementById('co-name').innerHTML = "PHP"
    document.getElementById('co-descri').innerHTML = "The Complete Full php Course By Cs School For everyone's learn about matter's"
    document.getElementById('ruppee-value').innerHTML = "899"
}


function pro6(){
    document.getElementById('co-name').innerHTML = "English Speaking Course"
    document.getElementById('co-descri').innerHTML = "The Complete Full English With Better Comminication Skill's and day by day training every one group to speak english Course By Cs School For everyone's ."
    document.getElementById('ruppee-value').innerHTML = "899"
}


function pro7(){
    document.getElementById('co-name').innerHTML = "Operating System"
    document.getElementById('co-descri').innerHTML = "The Complete Full Operating System ( OS ) With Basics To advanced Course By Cs School For everyone's learn about matter's"
    document.getElementById('ruppee-value').innerHTML = "899"
}


function pro8(){
    document.getElementById('co-name').innerHTML = "Flask Framework In Python"
    document.getElementById('co-descri').innerHTML = "The Complete Full Flask Web Framework in Python use in web Development By Cs School For everyone's learn about matter's"
    document.getElementById('ruppee-value').innerHTML = "899"
}


function pro9(){
    document.getElementById('co-name').innerHTML = "Foundamental Of Software Development"
    document.getElementById('co-descri').innerHTML = "The Complete Full Fundamental Of Software Development Course By Cs School For everyone's learn about matter's"
    document.getElementById('ruppee-value').innerHTML = "899"
}

function pro10(){
    document.getElementById('co-name').innerHTML = "Structure Quiary Language ( SQL ) "
    document.getElementById('co-descri').innerHTML = "The Complete Full Structure queiry Language ( SQL ) with create Database System in web Development By Cs School For everyone's learn about matter's"
    document.getElementById('ruppee-value').innerHTML = "899"
}


function pro11(){
    document.getElementById('co-name').innerHTML = "React.Js Framework Library "
    document.getElementById('co-descri').innerHTML = "The Complete Full React Js Framework for Frontend developer's Course By Cs School For everyone's learn about matter's"
    document.getElementById('ruppee-value').innerHTML = "899"
}

// Payment Processes Loader Cheaking 
function load(){
    let payForm = document.getElementById('co-pay');
    let load = document.getElementById('pay-process');

    payForm.style.display = 'none'
    load.style.display = 'block'
}

function CancelPay(){
    document.getElementById('process-box').style.border = "20px solid red"
    document.getElementById('pay-pro-content').innerHTML = "Payment Cancel"
    document.getElementById('pay-pro-content').style.color = "red"
    document.getElementById('canlpay').style.display = 'none'
    document.getElementById('conpay').style.display = "none"
}

function ContinuiePay(){
    document.getElementById('process-box').style.border = "20px solid blue"
    document.getElementById('pay-pro-content').innerHTML = "Payment Successfully"
    document.getElementById('pay-pro-content').style.color = "blue"
    document.getElementById('canlpay').style.display = 'none'
    document.getElementById('canlpay').style.display = 'none'
    document.getElementById('conpay').style.display = 'none'

    
}