const meetAndGreet = document.getElementById('meetAndGreet');

const closeMeetAndGreet = document.getElementById('close');

closeMeetAndGreet.addEventListener('click', function() {
    meetAndGreet.classList.toggle('close');
});