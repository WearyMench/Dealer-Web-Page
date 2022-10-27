//llamaremos el id burger para que al hacer click en el div, aparezca el menu en el movil.
const burger = document.getElementById('burger')
const menumovil = document.getElementById('menumovil')
burger.addEventListener('click', () => {
    menumovil.classList.toggle('menumovil--show')
});


