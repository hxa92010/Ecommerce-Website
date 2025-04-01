let cart = [];

const products = [
    { id: 1, name: "Wireless Earbuds", price: 29.99, image: "https://via.placeholder.com/150" },
    { id: 2, name: "Smartphone", price: 499.99, image: "https://via.placeholder.com/150" },
    { id: 3, name: "Laptop", price: 999.99, image: "https://via.placeholder.com/150" },
    { id: 4, name: "Gaming Console", price: 299.99, image: "https://via.placeholder.com/150" }
];

function loadProducts() {
    let productList = document.getElementById("product-list");
    products.forEach(product => {
        let productCard = `
            <div class="col-md-3">
                <div class="card">
                    <img src="${product.image}" class="card-img-top" alt="${product.name}">
                    <div class="card-body">
                        <h5 class="card-title">${product.name}</h5>
                        <p class="card-text">$${product.price.toFixed(2)}</p>
                        <button class="btn btn-primary" onclick="addToCart(${product.id})">Add to Cart</button>
                    </div>
                </div>
            </div>`;
        productList.innerHTML += productCard;
    });
}

function addToCart(productId) {
    let product = products.find(p => p.id === productId);
    cart.push(product);
    document.getElementById("cart-count").innerText = cart.length;
    alert(`${product.name} added to cart!`);
}

window.onload = loadProducts;
