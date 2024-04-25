document.addEventListener('DOMContentLoaded', function() {
  var btnAgregar = document.querySelectorAll('.btn-agregar');
  var listaCarrito = document.getElementById('lista-carrito');
  var btnVaciarCarrito = document.getElementById('vaciar-carrito');
  var totalCarrito = document.getElementById('total');
  var totalPagar = document.getElementById('total-pagar');

  var total = 0;
  var montoPagar = 0;

  function actualizarTotal() {
    totalCarrito.textContent = total + ' MXN';
    totalPagar.textContent = montoPagar + ' MXN';
  }

  btnAgregar.forEach(function(btn) {
    btn.addEventListener('click', function() {
      var producto = btn.parentElement.textContent.trim();
      var precio = parseInt(btn.parentElement.dataset.precio);
      var li = document.createElement('li');
      li.textContent = producto + ' - ' + precio + ' MXN';
      listaCarrito.appendChild(li);

      total += precio;
      montoPagar = total * 1.16;
      actualizarTotal();
    });
  });

  btnVaciarCarrito.addEventListener('click', function() {
    listaCarrito.innerHTML = '';
    total = 0;
    montoPagar = 0;
    actualizarTotal();
  });

  document.getElementById('pagar').addEventListener('click', function() {
    if (total > 0) {
      alert('Pago completado. Total a pagar: ' + montoPagar + ' MXN');
      listaCarrito.innerHTML = '';
      total = 0;
      montoPagar = 0;
      actualizarTotal();
    } else {
      alert('No hay productos en el carrito.');
    }
  });
});
