
const products = [];

products.push({id: 1, name: "IPhone 15", price: 5000});
products.push({id: 2, name: "Lenovo Thinkpad", price: 15000});
products.push({id: 3, name: "HP printer", price: 3000});


const fetchProducts = async (request, response) => {

    response.json(products);
}

const fetchProductsById = async (request, response) => {

    const id = request.params.id;
    const product = products.find(p => p.id == id);
    if(product){
        response.json(product);
    }else{
        response.status(404).send("Product not found");
    }

};

const createProduct = async (request, response) => {

    const product = request.body;
    console.log(product);
    if(product && product.id){
        products.push(product);
        response.status(201)
            .header('location', `http://localhost:9000/products/${product.id}`).json(product);
    }
    else{
        response.status(400).send('Invalid product');
    
    }

};

const deleteProduct = async (request, response) => {

    const id = request.params.id;
    const index = products.findIndex(p => p.id == id);
    if(index != -1){
        products.splice(index, 1);
        response.status(200).send();
    }else{
        response.status(404).send("Product not found");
    }

};

module.exports = { fetchProducts, fetchProductsById, createProduct, deleteProduct };