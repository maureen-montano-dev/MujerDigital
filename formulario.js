
const productosSeleccionados = [
    {
        producto: "Producto 1",
        precio: "$19.99",
        cantidad: 2,
    },
    {
        producto: "Producto 2",
        precio: "$24.99",
        cantidad: 1,
    },
];

// Función para mostrar el resumen de la compra
function mostrarResumenCompra() {
    const resumenCarrito = document.getElementById("resumen-carrito");
    resumenCarrito.innerHTML = "";

    for (const producto of productosSeleccionados) {
        const fila = document.createElement("tr");
        fila.innerHTML = `
            <td>${producto.producto}</td>
            <td>${producto.precio}</td>
            <td>${producto.cantidad}</td>
            <td>${calcularSubtotal(producto)}</td>
        `;
        resumenCarrito.appendChild(fila);
    }
}

// Función para calcular el subtotal de un producto
function calcularSubtotal(producto) {
    const precioNumerico = parseFloat(producto.precio.replace("$", ""));
    return (precioNumerico * producto.cantidad).toFixed(2);
}

mostrarResumenCompra();
