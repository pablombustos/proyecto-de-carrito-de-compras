const tbody = document.getElementById('tablaProductos');

function retornarTablaHTML(producto) {
  return `
    <tr>
      <td>${producto.nombre}</td>
      <td>${producto.descripcion}</td>
      <td>$ ${producto.importe}</td>
      <td><button class="button button-clear">Quitar</button></td>
    </tr>
  `;
}

document.addEventListener('DOMContentLoaded', () => {
  // Verificar si carritoFrutas posee productos
  if (carritoFrutas.length > 0) {
    // Vaciar el cuerpo de la tabla HTML
    tbody.innerHTML = '';

    // Recorrer el array carritoFrutas
    carritoFrutas.forEach((producto) => {
      // Invocar a la función retornarTablaHTML
      const tablaHTML = retornarTablaHTML(producto);
      // Agregar la fila a la tabla HTML
      tbody.innerHTML += tablaHTML;
    });
  }
});

const btnComprar = document.getElementById('btnComprar');

btnComprar.addEventListener('click', () => {
  // Mostrar mensaje de agradecimiento
  alert('¡Gracias por tu compra!');

  // Vaciar el array carritoFrutas
  carritoFrutas.length = 0;

  // Vaciar LocalStorage
  localStorage.removeItem('carritoFrutas');

  // Vaciar la tabla HTML
  tbody.innerHTML = '';
});

