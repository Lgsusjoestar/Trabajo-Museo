document.addEventListener("DOMContentLoaded", () => {
  const filtroInput = document.getElementById("filtroInput");
  const ordenSelect = document.getElementById("ordenSelect");
  const contenedor = document.getElementById("contenedorTarjetas");

  const tarjetasOriginales = Array.from(contenedor.getElementsByClassName("tarjeta"));

  function filtrarYOrdenar() {
    const filtro = filtroInput.value.toLowerCase();
    const orden = ordenSelect.value;

    let filtradas = tarjetasOriginales.filter(tarjeta => {
      const texto = tarjeta.querySelector(".card-text").textContent.toLowerCase();
      return texto.includes(filtro);
    });

    filtradas.sort((a, b) => {
      const textoA = a.querySelector(".card-text").textContent.toLowerCase();
      const textoB = b.querySelector(".card-text").textContent.toLowerCase();
      return orden === "az" ? textoA.localeCompare(textoB) : textoB.localeCompare(textoA);
    });

    contenedor.innerHTML = ""; // Limpiar tarjetas

    filtradas.forEach(tarjeta => contenedor.appendChild(tarjeta));
  }

  filtroInput.addEventListener("input", filtrarYOrdenar);
  ordenSelect.addEventListener("change", filtrarYOrdenar);
});
