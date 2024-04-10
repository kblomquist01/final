const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');
const reservation = document.querySelector('#join');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
	reservation.classList.toggle('shift');
});