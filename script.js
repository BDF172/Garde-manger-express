    const productList = [
        { name: "Pommes", price: 2.99 },
        { name: "Bananes", price: 1.99 },
        { name: "Oranges", price: 3.49 },
        { name: "Poires", price: 2.79 },
        { name: "Raisins", price: 4.99 },
        { name: "Carottes", price: 1.49 },
        { name: "Brocolis", price: 2.29 },
        { name: "Tomates", price: 2.19 },
        { name: "Concombres", price: 1.89 },
        { name: "Lait", price: 1.99 },
        { name: "Oeufs", price: 2.49 },
        { name: "Poulet", price: 8.99 },
        { name: "Saumon", price: 12.99 },
        { name: "Fromage", price: 5.99 },
        { name: "Yaourt", price: 3.29 },
        { name: "Pain complet", price: 2.49 },
        { name: "Céréales", price: 4.99 },
        { name: "Jus d'orange", price: 2.99 },
        { name: "Café moulu", price: 6.49 },
        { name: "Pâtes", price: 1.79 },
        { name: "Riz", price: 3.99 },
        { name: "Chocolat noir", price: 3.49 },
        { name: "Chips de pomme", price: 4.79 },
        { name: "Barre de céréales", price: 1.29 },
        { name: "Eau minérale", price: 0.99 },
        { name: "Savon liquide", price: 2.99 },
        { name: "Shampooing", price: 4.49 },
        { name: "Papier toilette", price: 3.99 },
        { name: "Lessive", price: 5.99 },
        { name: "Nettoyant tout usage", price: 1.99 },
        { name: "Brosse à dents", price: 1.49 },
        { name: "Dentifrice", price: 2.79 },
        { name: "Serviettes en papier", price: 2.29 },
        { name: "Couches", price: 9.99 },
        { name: "Shampooing pour animaux", price: 4.99 },
        { name: "Croquettes pour chiens", price: 7.99 },
        { name: "Litière pour chats", price: 5.49 },
        { name: "Plantes d'intérieur", price: 12.99 },
        { name: "Ampoules LED", price: 3.99 },
        { name: "Cahier", price: 1.99 },
        { name: "Stylos", price: 0.99 },
        { name: "Agenda", price: 4.49 },
        { name: "Post-it", price: 2.29 },
        { name: "Saucisson", price: 99999.99 },
    ];
    
    
    function generateProductList() {
        const productsContainer = document.getElementById("productsContainer");

        for (const product of productList) {
            const productDiv = document.createElement("div");
            productDiv.className = "product";

            const productNameHeading = document.createElement("h3");
            productNameHeading.textContent = product.name;

            const productPrice = document.createElement("p");
            productPrice.textContent = `${product.price.toFixed(2)}€`;

            const addToCartButton = document.createElement("button");
            addToCartButton.className = "productbutton";
            addToCartButton.textContent = "Ajouter au panier";
            addToCartButton.onclick = function () {
                addToCart(product.name);
            };

            productDiv.appendChild(productNameHeading);
            productDiv.appendChild(productPrice);
            productDiv.appendChild(addToCartButton);

            productsContainer.appendChild(productDiv);
        }
    }

    generateProductList();

function addToCart(productName) {
    alert("Produit ajouté au panier : " + productName);
}

const searchInput = document.getElementById("searchInput");
searchInput.addEventListener("input", filterProducts);

function filterProducts() {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredProducts = productList.filter(product => product.name.toLowerCase().includes(searchTerm));

    const productsContainer = document.getElementById("productsContainer");
    productsContainer.innerHTML = "";

    if (filteredProducts.length === 0) {
        const noResultsMessage = document.createElement("p");
        noResultsMessage.textContent = "Aucun résultat trouvé.";

        productsContainer.appendChild(noResultsMessage);
    } else {
        for (const product of filteredProducts) {
            const productDiv = document.createElement("div");
            productDiv.className = "product";

            const productNameHeading = document.createElement("h3");
            productNameHeading.textContent = product.name;

            const productPrice = document.createElement("p");
            productPrice.textContent = `${product.price.toFixed(2)}€`;

            const addToCartButton = document.createElement("button");
            addToCartButton.textContent = "Ajouter au panier";
            addToCartButton.onclick = function () {
                addToCart(product.name);
            };

            productDiv.appendChild(productNameHeading);
            productDiv.appendChild(productPrice);
            productDiv.appendChild(addToCartButton);

            productsContainer.appendChild(productDiv);
        }
    }
}
