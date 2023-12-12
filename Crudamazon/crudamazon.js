const url = 'https://striveschool-api.herokuapp.com/api/product/'; 
const token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc4MjlkY2MwNTgzNTAwMTg1MjJkMTAiLCJpYXQiOjE3MDIzNzM4NTIsImV4cCI6MTcwMzU4MzQ1Mn0.0RDwTvivw29DMLU7hcU6a_6S0kq9EgA8_fgVIKVtuwA'; 
const headers = {
    'Authorization': token,
    'Accept': 'application/json',
    'Content-Type': 'application/json'
}

// BACKOFFICE 

document.addEventListener("DOMContentLoaded", function() {
    // Funzione per popolare le card con i dati del prodotto
    function populateProductCard(data, productId) {
        const productImage = document.getElementById(`productImage${productId}`);
        const productName = document.getElementById(`productName${productId}`);
        const productDescription = document.getElementById(`productDescription${productId}`);

        if (productImage && productName && productDescription) {
            productImage.src = data.imageUrl;
            productName.innerText = data.name;
            productDescription.innerText = data.description;
        } else {
            console.error('Uno degli elementi HTML non è stato trovato.');
        }
    }

    function inviaDati() {
        const nomeProdotto = document.getElementById('nome').value;
        const prezzoProdotto = document.getElementById('price').value;

        // Esempio di dati del prodotto 1
        const productData1 = {
            "_id": "65783046c058350018522e7f",
            "name": "Nokia 3310",
            "description": "Indestructible cellphone",
            "brand": "Nokia",
            "imageUrl": "https://cdn.pixabay.com/photo/2018/01/23/01/24/cellphone-3100428_1280.png",
            "price": 99
        };

        // Invoca la funzione con i dati del prodotto 1
        populateProductCard(productData1, 1);

        // Esempio di dati del prodotto 2
        const productData2 = {
            "_id": "1234567890",
            "name": "huawei p20",
            "description": "Description for product 2",
            "brand": "huawei",
            "imageUrl": "https://cdn.pixabay.com/photo/2018/01/23/01/24/cellphone-3100428_1280.png",
            "price": 49
        };

        // Invoca la funzione con i dati del prodotto 2
        populateProductCard(productData2, 2);
    }
    inviaDati();
});