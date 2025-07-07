let carrito = [];

function agregarAlCarrito(nombre, precio) {
  const existente = carrito.find(p => p.nombre === nombre);
  if (existente) {
    existente.cantidad++;
  } else {
    carrito.push({ nombre, precio, cantidad: 1 });
  }
  actualizarCarrito();
}

function eliminarDelCarrito(nombre) {
  carrito = carrito.filter(p => p.nombre !== nombre);
  actualizarCarrito();
}

function actualizarCarrito() {
  const tabla = document.getElementById("tabla-carrito");
  const totalSpan = document.getElementById("total");
  tabla.innerHTML = "";
  let total = 0;

  carrito.forEach(producto => {
    const subtotal = producto.precio * producto.cantidad;
    total += subtotal;

    const fila = document.createElement("tr");
    fila.innerHTML = `
      <td>${producto.nombre}</td>
      <td>${producto.cantidad}</td>
      <td>$${producto.precio}</td>
      <td>$${subtotal}</td>
      <td><button onclick="eliminarDelCarrito('${producto.nombre}')">X</button></td>
    `;
    tabla.appendChild(fila);
  });

  totalSpan.textContent = total;

  const resumen = carrito.map(p => `${p.nombre} x${p.cantidad}`).join(", ");
  document.getElementById("pedidoInput").value = resumen;
  document.getElementById("totalInput").value = total;
}

document.getElementById("pedidoForm").addEventListener("submit", function (e) {
  const form = e.target;
  const nombre = form.nombre.value;
  const curso = form.curso.value;
  const pedido = form.pedido.value;
  const total = form.total.value;

  const baseURL = "https://docs.google.com/forms/d/e/1FAIpQLSeEHto7mpaMoEKbnbYbYvUiLQB9MYNetrVJvnoerR6WP-5L-A/viewform";

  const params = new URLSearchParams({
    "entry.1458051335": nombre,
    "entry.75037266": curso,
    "entry.1475518901": pedido,
    "entry.2072842704": total
  });

  const urlFinal = `${baseURL}?${params.toString()}`;
  window.open(urlFinal, "_blank");
});

window.addEventListener("load", function () {
  const intro = document.getElementById("intro");
  setTimeout(() => {
    intro.classList.add("fade-out");
  }, 2000); 
});

