const burger = document.getElementById("burger");
const menumovil = document.getElementById("menumovil");
burger.addEventListener("click", () => {
  menumovil.classList.toggle("menumovil--show");
});

function calcularPrecio() {
  const tipo = document.getElementById("tipo").value;
  const marca = document.getElementById("marca").value;
  const anio = document.getElementById("anio").value;

  let precioBase = 10000;

  if (tipo === "suv") precioBase += 5000;
  if (tipo === "pickup") precioBase += 7000;

  if (marca === "ford") precioBase += 3000;
  if (marca === "honda") precioBase += 2000;

  if (anio === "2022") precioBase += 2000;
  if (anio === "2024") precioBase += 4000;

  const resultado = document.getElementById("resultado");

  // Imagen representativa del auto según tipo
  let imagenSrc = "";
  switch (tipo) {
    case "sedan":
      imagenSrc = "../img/sedan.png";
      break;
    case "suv":
      imagenSrc = "https://via.placeholder.com/300x150?text=SUV";
      break;
    case "pickup":
      imagenSrc = "https://via.placeholder.com/300x150?text=Pickup";
      break;
  }

  // Mostrar el resultado en el contenedor
  resultado.innerHTML = `
      <h3>Modelo sugerido:</h3>
      <p><strong>Tipo:</strong> ${tipo.toUpperCase()}</p>
      <p><strong>Marca:</strong> ${marca.toUpperCase()}</p>
      <p><strong>Año:</strong> ${anio}</p>
      <p><strong>Precio estimado:</strong> $${precioBase.toLocaleString()}</p>
      <div class="modelo-visual">
        <img src="${imagenSrc}" alt="Modelo visual">
      </div>
      <a href="mailto:ventas@kgautoimport.com?subject=Cotización%20de%20vehículo&body=
        Tipo: ${tipo.toUpperCase()}%0A
        Marca: ${marca.toUpperCase()}%0A
        Año: ${anio}%0A
        Precio estimado: $${precioBase.toLocaleString()}" 
        class="btn-cotizar">Solicitar cotización</a>
    `;
}
