const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if(bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active')
    })
}
if(close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active')
    })
}
button.addEventListener('onclick',() => {

    navigator.url('https://api.whatsapp.com/send?phone=254773765693&text=Welcome%20to%20watopia%20how%20may%20i%20help%20you?')
})