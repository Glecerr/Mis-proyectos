newFunction();

function newFunction() {
    let productos = [
        { nombre: "Camiseta", precio: 15000, stock: 10 },
        { nombre: "Pantalón", precio: 30000, stock: 8 },
        { nombre: "Zapatos", precio: 50000, stock: 5 }
    ];

    console.log("Lista de productos:");
    for (let i = 0; i < productos.length; i++) {
        console.log(`Nombre: ${productos[i].nombre} - Precio: $${productos[i].precio} - Stock: ${productos[i].stock}`);
    }

    console.log("\nVenta de productos:");
    for (let i = 0; i < productos.length; i++) {
        console.log(`Se ha vendido 1 ${productos[i].nombre}`);
        productos[i].stock--; // Reducimos el stock en 1
        console.log(`Nuevo stock de ${productos[i].nombre}: ${productos[i].stock}`);
    }
}

