document.addEventListener('DOMContentLoaded', () => {
const menuIcon = document.getElementById('menu-icon');
const hiddenList = document.getElementById('hidden-list');
const closeIcon = document.getElementById('close-icon');
const hiddenClassCar = document.getElementsByClassName('block-1')[0];

menuIcon.addEventListener('click', () => {
    hiddenList.style.display = 'block';
    menuIcon.style.display = 'none';
    hiddenClassCar.classList.add('hidden-block');
});

closeIcon.addEventListener('click', () => {
    hiddenList.style.display = 'none';
    menuIcon.style.display = 'block';
    hiddenClassCar.classList.remove('hidden-block');
});
});


