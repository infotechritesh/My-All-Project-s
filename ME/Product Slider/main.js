const img1 = document.getElementById('img1');
const img2 = document.getElementById('img2');
const img3 = document.getElementById('img3');
const img4 = document.getElementById('img4');

img2.addEventListener('click', () => {
    document.getElementById('product_1').style.transform = 'translate(-100%,0%)';
    document.getElementById('product_2').style.transform = 'translate(-100%,0%)';
    document.getElementById('product_3').style.transform = 'translate(-100%,0%)';
    document.getElementById('product_4').style.transform = 'translate(-100%,0%)';
})

img3.addEventListener('click', () => {
    document.getElementById('product_1').style.transform = 'translate(-200%,0%)';
    document.getElementById('product_2').style.transform = 'translate(-200%,0%)';
    document.getElementById('product_3').style.transform = 'translate(-200%,0%)';
    document.getElementById('product_4').style.transform = 'translate(-100%,0%)';
})
img4.addEventListener('click', () => {
    document.getElementById('product_1').style.transform = 'translate(-300%,0%)';
    document.getElementById('product_2').style.transform = 'translate(-300%,0%)';
    document.getElementById('product_3').style.transform = 'translate(-300%,0%)';
    document.getElementById('product_4').style.transform = 'translate(-300%,0%)';
})
img1.addEventListener('click', () => {
    document.getElementById('product_1').style.transform = 'translate(1%,0%)';
    document.getElementById('product_2').style.transform = 'translate(100%,0%)';
    document.getElementById('product_3').style.transform = 'translate(100%,0%)';
    document.getElementById('product_4').style.transform = 'translate(100%,0%)';
})