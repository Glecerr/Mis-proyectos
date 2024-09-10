// Crear el objeto producto con propiedades iniciales
let producto = {
    nombre: 'Camiseta',
    precio: 20.0,
    cantidadDisponible: 100
};

// Modificar la propiedad nombre
producto.nombre = 'Zapatillas';

// Añadir la propiedad categoría
producto.categoria = 'calzado';

// Eliminar la propiedad cantidadDisponible
delete producto.cantidadDisponible;

// Mostrar el objeto final para verificar los cambios
console.log(producto);
