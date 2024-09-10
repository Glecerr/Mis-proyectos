
var nombreProducto = "collar"; // Nombre del producto
var precioUnitario = 10000; // Precio por unidad en dólares
var cantidadDeseada;

cantidadDeseada = prompt(" cuantos quiere :");

cantidadDeseada = parseInt(cantidadDeseada);


var costoTotal = precioUnitario * cantidadDeseada;

alert("El costo total de su compra de " + cantidadDeseada + " " + nombreProducto + " es: $" + costoTotal);
