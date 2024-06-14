
// script.js

// Array para almacenar los productos en el carrito
let carrito = [];

// Función para agregar un producto al carrito
function agregarAlCarrito(nombreProducto, precioProducto) {
    let producto = {
        nombre: nombreProducto,
        precio: precioProducto
    };
    carrito.push(producto);
}

// Función para mostrar el contenido del carrito
function mostrarCarrito() {
    console.log("Contenido del carrito:");
    if (carrito.length === 0) {
        console.log("El carrito está vacío.");
    } else {
        carrito.forEach((producto, index) => {
            console.log(`${index + 1}. ${producto.nombre} - $${producto.precio}`);
        });
    }
}

// Ejemplo de uso
agregarAlCarrito("Camisa", 25);
agregarAlCarrito("Pantalón", 40);
mostrarCarrito();






// Función para mostrar el contenido del carrito en la página HTML
function mostrarCarrito() {
    let listaCarrito = document.getElementById('lista-carrito');
    let totalCarrito = document.getElementById('total-carrito');
    listaCarrito.innerHTML = ''; // Limpiamos la lista antes de volver a mostrar los productos
    totalCarrito.textContent = calcularTotalCarrito(); // Actualizamos el total del carrito

    if (carrito.length === 0) {
        listaCarrito.innerHTML = "<li>El carrito está vacío</li>";
    } else {
        carrito.forEach((producto, index) => {
            let itemCarrito = document.createElement('li');
            itemCarrito.textContent = `${producto.nombre} - $${producto.precio}`;
            listaCarrito.appendChild(itemCarrito);
        });
    }
}

// Función para calcular el total del carrito
function calcularTotalCarrito() {
    let total = 0;
    carrito.forEach(producto => {
        total += producto.precio;
    });
    return total;
}