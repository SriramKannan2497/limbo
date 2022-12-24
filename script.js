const open = document.querySelector('.newsletter');
const box = document.querySelector('.form');
const close = document.querySelector('.close');
const body = document.querySelector('.body');

open.addEventListener('click', () => {
	box.style.display ='block'
	body.style.filter ='blur(50%)'
});
close.addEventListener('click', () => {
	box.style.display ='none'
});