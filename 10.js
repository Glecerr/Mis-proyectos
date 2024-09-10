// Datos simulados de productos
const products = [
    { id: 1, name: 'remera 1', price: 150000, image: 'book1.jpg' },
    { id: 2, name: 'remera 2', price: 150000, image: 'book2.jpg' },
    { id: 3, name: 'remera 3', price: 150000, image: 'book3.jpg' },
    { id: 4, name: 'remera 4', price: 150000, image: 'book4.jpg' },
]

// Función para mostrar los productos en la página
function displayProducts() {
    const productsContainer = document.getElementById('products');

    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product');

        productCard.innerHTML = `
            <img src="images/${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.price} $</p>
            <button onclick="addToCart(${product.id})">Añadir al carrito</button>
        `;

        productsContainer.appendChild(productCard);
    });
}

// Función para añadir productos al carrito
function addToCart(productId) {
    // Aquí puedes implementar lógica para añadir productos al carrito
    alert(`Producto ${productId} añadido al carrito`);
}

// Llamada a la función para mostrar productos al cargar la página
displayProducts();
