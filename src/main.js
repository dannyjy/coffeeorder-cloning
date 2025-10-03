const menu = document.getElementById('menu')
const dropDown = document.getElementById('toggledMenu');
const close = document.getElementById('close')

menu.addEventListener('click', () => dropDown.style.display = "block")
close.addEventListener('click', () => dropDown.style.display = "none")