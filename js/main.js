//llamaremos el id burger para que al hacer click en el div, aparezca el menu en el movil.
const burger = document.getElementById("burger");
const menumovil = document.getElementById("menumovil");
burger.addEventListener("click", () => {
  menumovil.classList.toggle("menumovil--show");
});

document.getElementById("formulario").addEventListener("submit", function (e) {
  e.preventDefault(); // Evitar el envío del formulario por defecto
  // Validar los campos del formulario
  const nombre = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const mensaje = document.getElementById("message").value.trim();

  const confirmationElement = document.getElementById("confirmation");
  confirmationElement.textContent = `¡Gracias, ${nombre}! Hemos recibido tu mensaje.`;
  confirmationElement.style.display = "block";

  // Ocultar el mensaje de confirmación después de 5 segundos
  setTimeout(() => {
    confirmationElement.textContent = "";
    confirmationElement.style.display = "none";
  }, 10000);

  // Reiniciar el formulario
  document.getElementById("formulario").reset();
});
