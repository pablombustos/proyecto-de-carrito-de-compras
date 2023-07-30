const container = document.querySelector('.container');
console.log(container);

const URL = 'productos.json';
const productos = [];

document.addEventListener('DOMContentLoaded', () => {
  // Definir función para retornar el código HTML de la Card
  function retornarCardHTML(producto) {
    return `
      <div class="card">
          <div class="card-image">${producto.imagen}</div>
          <div class="card-name">${producto.nombre}</div>
          <div class="card-price">$ ${producto.precio}</div>
          <div class="card-button">
              <button class="button button-outline button-add" id="${producto.id}" title="Clic para agregar al carrito">+</button>
          </div>
      </div>
    `;
  }

  // Definir función para cargar los productos en el contenedor
  function cargarProductos(array) {
    if (container) {
      array.forEach((producto) => {
        const cardHTML = retornarCardHTML(producto);
        container.innerHTML += cardHTML;
      });
    }
  }

  // Definir la función activarClickEnBotones
  const activarClickEnBotones = () => {
    const botonesAgregar = document.querySelectorAll('.button.button-outline.button-add');
    if (botonesAgregar !== null) {
      for (const boton of botonesAgregar) {
        boton.addEventListener('click', (event) => {
          agregarAlCarrito(event.target.id);
        });
      }
    }
  };

  // Definir la función obtenerProductos
  function obtenerProductos() {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        productos.push(...data);
        cargarProductos(productos);
        activarClickEnBotones();
      })
      .catch((error) => {
        console.error('Error al obtener los productos:', error);
      });
  }
  

  obtenerProductos();
});


  
  
  