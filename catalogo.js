document.addEventListener('DOMContentLoaded', function () {
    const carrito = document.getElementById('carrito-items');
    const continuarCompra = document.getElementById('continuar-compra');

    continuarCompra.addEventListener('click', function () {
        // Redirige a la página de pago o formulario (ajusta la URL según tu necesidad).
        window.location.href = '/formulario.html';
    });

    // Función para agregar un producto al carrito
    function agregarProductoAlCarrito(nombre, precio, imagen) {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><img src="${imagen}" alt="${nombre}" width="50"></td>
            <td>${nombre}</td>
            <td>${precio}</td>
            <td><input type="number" value="1" min="1"></td>
            <td><button class="eliminar-producto btn btn-danger">Eliminar</button></td>
        `;

        const eliminarBtn = row.querySelector('.eliminar-producto');
        eliminarBtn.addEventListener('click', function () {
            // Eliminar el producto del carrito
            carrito.removeChild(row);
        });

        carrito.appendChild(row);
    }

    // Agregar productos al carrito cuando se hace clic en los botones
    const botonesAgregar = document.querySelectorAll('.button-carrito');
    botonesAgregar.forEach((boton) => {
        boton.addEventListener('click', function () {
            const nombre = boton.getAttribute('data-nombre');
            const precio = parseFloat(boton.getAttribute('data-precio'));
            const imagen = boton.getAttribute('data-imagen');
            agregarProductoAlCarrito(nombre, `$${precio.toFixed(2)}`, imagen);
        });
    });
});
