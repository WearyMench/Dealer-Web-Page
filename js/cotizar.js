const burger = document.getElementById("burger");
const menumovil = document.getElementById("menumovil");
burger.addEventListener("click", () => {
  menumovil.classList.toggle("menumovil--show");
});

const tipoSelect = document.getElementById("tipo");
const marcaSelect = document.getElementById("marca");
const anioSelect = document.getElementById("anio");
const colorSelect = document.getElementById("color");

[tipoSelect, marcaSelect, anioSelect, colorSelect].forEach((select) => {
  select.addEventListener("change", calcularPrecio);
});

function calcularPrecio() {
  const basePath =
    window.location.hostname === "wearymench.github.io"
      ? "/Dealer-Web-Page/"
      : "/";
  const tipo = tipoSelect.value;
  const marca = marcaSelect.value;
  const anio = anioSelect.value;
  const color = colorSelect.value;

  const precios = {
    tipo: { suv: 5000, pickup: 7000 },
    marca: { ford: 3000, honda: 2000 },
    anio: { 2022: 2000, 2024: 4000 },
    color: { rojo: 300, blanco: 500, negro: 700, gris: 350 },
  };

  let precioBase = 10000;
  precioBase += precios.tipo[tipo] || 0;
  precioBase += precios.marca[marca] || 0;
  precioBase += precios.anio[anio] || 0;
  precioBase += precios.color[color] || 0;

  const imagenes = {
    sedan: `${basePath}img/sedan.png`,
    suv: `${basePath}img/suv.png`,
    pickup: `${basePath}img/pickup.png`,
  };

  const tipoDescripcion = {
    sedan: "sedán",
    suv: "vehículo utilitario deportivo",
    pickup: "camioneta",
  };

  /**
   * Verde: hue-rotate(310deg) saturate(180%)
   * Blanco: grayscale(100%) brightness(1.7)
   * Negro: grayscale(100%) brightness(0.3)
   * Rosado: hue-rotate(140deg) saturate(180%)
   * azul violeta: hue-rotate(60deg) saturate(220%) brightness(1.2)
   * otro azul: hue-rotate(20deg) saturate(200%) brightness(1.1)
   * mamey rosado: hue-rotate(180deg) saturate(200%)
   * amarillo verdoso: hue-rotate(250deg) saturate(180%)
   */

  const colorFilters = {
    verde: "hue-rotate(310deg) saturate(140%)",
    gris: "grayscale(100%) brightness(0.8)",
    rojo: "hue-rotate(176deg) saturate(270%) brightness(0.7)",
    amarillo: "hue-rotate(240deg) saturate(200%)",
    morado: "hue-rotate(78deg) saturate(160%) brightness(1.2)",
    naranja: "hue-rotate(200deg) saturate(180%)",
    rosa: "hue-rotate(140deg) saturate(140%)",
    blanco: "grayscale(93%) brightness(1.5)",
    negro: "grayscale(100%) brightness(0.3)",
  };

  const resultado = document.getElementById("resultado");
  resultado.innerHTML = `
      <h3>Modelo sugerido:</h3>
      <p><strong>Tipo:</strong> ${tipo.toUpperCase()}</p>
      <p><strong>Marca:</strong> ${marca.toUpperCase()}</p>
      <p><strong>Año:</strong> ${anio}</p>
      <p><strong>Color:</strong> ${color.toUpperCase()}</p>
      <p><strong>Precio estimado:</strong> $${precioBase.toLocaleString()}</p>
      <p><strong>Descripción:</strong> ${
        tipo.charAt(0).toUpperCase() + tipo.slice(1)
      } (${tipoDescripcion[tipo] || "tipo desconocido"}) de la marca ${
    marca.charAt(0).toUpperCase() + marca.slice(1)
  } del año ${anio} en color ${
    color.charAt(0).toUpperCase() + color.slice(1)
  }.</p>
      <div class="modelo-visual">
        <img src="${imagenes[tipo] || ""}" alt="Modelo visual" style="filter: ${
    colorFilters[color] || "none"
  };">
      </div>
      <button type="button" class="btn-cotizar" id="btnSolicitarCotizacion" onClick="openModal()">Solicitar cotización</button>
    `;
}

function openModal() {
  document.getElementById("modal").style.display = "block";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
  document.getElementById("modalMessage").innerHTML = ""; // Limpiar el mensaje al cerrar el modal
  document.getElementById("modalMessage").style.display = "none"; // Ocultar el mensaje al cerrar el modal
}

document.getElementById("clientForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("clientName").value;
  const email = document.getElementById("clientEmail").value;
  const messageContainer = document.getElementById("modalMessage");
  messageContainer.innerHTML = `¡Gracias, ${name}! Hemos recibido los detalles de su cotización. Nuestro equipo revisará la información y le responderá a la brevedad.`;
  messageContainer.style.display = "block";
  document.getElementById("clientForm").reset(); // Reset the form fields
});
