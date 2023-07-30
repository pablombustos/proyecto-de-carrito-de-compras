
// Definir la función agregarAlCarrito
const agregarAlCarrito = (frutaId) => {
  if (frutaId > 0) {
    const productoEncontrado = productos.find((producto) => producto.id === frutaId);
    if (productoEncontrado !== undefined) {
      carritoFrutas.push(productoEncontrado);
      almacenarCarrito(); // Almacenar el carrito en LocalStorage-----API3-----
    }
  }
  console.table(carritoFrutas);
};

// Función para recuperar el carrito desde LocalStorage---------API3------
const recuperarCarrito = () => {
  const carritoGuardado = localStorage.getItem('carritoFrutas');
  return carritoGuardado ? JSON.parse(carritoGuardado) : []; // Retornar el carrito guardado o un array vacío si no existe
};

// Crear el array vacío carritoFrutas--API3------
const carritoFrutas = recuperarCarrito();

// ------Función para almacenar el carrito en LocalStorage API3--------------
const almacenarCarrito = () => {
  if (carritoFrutas.length > 0) {
    localStorage.setItem('carritoFrutas', JSON.stringify(carritoFrutas));
  }
};



  
