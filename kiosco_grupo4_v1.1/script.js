let carrito = [];
let total = 0;

function agregarAlCarrito(nombre, precio) {
  carrito.push({ nombre, precio });
  total += precio;
  actualizarCarrito();
}

function actualizarCarrito() {
  const lista = document.getElementById("lista-carrito");
  const totalSpan = document.getElementById("total");

  lista.innerHTML = "";

  carrito.forEach((producto, index) => {
    const item = document.createElement("li");
    item.textContent = `${producto.nombre} - $${producto.precio}`;
    
    // Botón para eliminar un producto del carrito
    const btnEliminar = document.createElement("button");
    btnEliminar.textContent = "Eliminar";
    btnEliminar.style.marginLeft = "10px";
    btnEliminar.style.backgroundColor = "#c62828";
    btnEliminar.style.color = "white";
    btnEliminar.style.border = "none";
    btnEliminar.style.borderRadius = "4px";
    btnEliminar.style.cursor = "pointer";

    btnEliminar.onclick = () => {
      eliminarDelCarrito(index);
    };

    item.appendChild(btnEliminar);
    lista.appendChild(item);
  });

  totalSpan.textContent = total;
}

function eliminarDelCarrito(index) {
  total -= carrito[index].precio;
  carrito.splice(index, 1);
  actualizarCarrito();
}
