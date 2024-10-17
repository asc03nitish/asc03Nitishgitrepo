import { ProductManager } from "./productmanager";
import { Product } from "./products";

const productManager = new ProductManager();

const product1 : Product={
    id: 1,
    fname: "Nitish",
    lname: "Veni",
    address: "Bengaluru",
    gender: "Male",
    options: "Latte",
    delivery: "Delivery"
    
};
productManager.addProduct(product1);

const product2 : Product={
    id:2,
    fname: "Rajat",
    lname: "Lad",
    address: "Hubballi",
    gender: "Male",
    options: "Cappucinno",
    delivery: "Delivery"
    
};
productManager.addProduct(product2);
//Listing 
var products: Product[] = productManager.listProducts();
console.log(products);
//Searching
console.log(productManager.searchProd("Rajat"));
//Removing
productManager.removeProduct(1);
products = productManager.listProducts();
console.log(products);

