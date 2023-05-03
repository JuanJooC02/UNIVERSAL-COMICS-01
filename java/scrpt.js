const juan = document.querySelector('.juan');
const loginlink = document.querySelector('.login-link');
const registerlink = document.querySelector('.register-link');
const btnpopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');

registerlink.addEventListener('click', ()=> {
    juan.classList.add('active');
});

loginlink.addEventListener('click', ()=> {
    juan.classList.remove('active');
});

btnpopup.addEventListener('click', ()=> {
    juan.classList.add('active-popup');
});

iconClose.addEventListener('click', ()=> {
    juan.classList.remove('active-popup');
});