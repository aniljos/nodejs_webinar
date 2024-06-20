const express = require('express');
const { fetchProducts, fetchProductsById, createProduct, deleteProduct } = require('./products-controller');

const app = express();

app.use(express.json());
app.use((req, res, next) => {
    console.log(`Process ID: ${process.pid}`);
    console.log(`Request Path: ${req.path}`);
    next();
});

app.get('/', (req, res) => {
    res.send('Hello World Express');
});

app.get('/products', (req, res) => {

    return fetchProducts(req, res);

});

app.get('/products/:id', (req, res) => {

    return fetchProductsById(req, res);

});

app.post('/products', (req, res) => {

    createProduct(req, res);

});

app.delete('/products/:id', (req, res) => {

    deleteProduct(req, res);

});

const portNo=9000;
app.listen(portNo, () => {
    console.log('Server is running on port 9000');
});