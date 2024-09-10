var [nombreProducto, cantidadDeseada, precioUnitario] = [prompt("Nombre del producto:"), parseInt(prompt("Cantidad deseada:")), parseFloat(prompt("Precio unitario:"))];
var costoTotal = cantidadDeseada * precioUnitario * (cantidadDeseada >= 5 ? 0.9 : 1);
alert("Costo total de la compra: $" + costoTotal.toFixed(2));
