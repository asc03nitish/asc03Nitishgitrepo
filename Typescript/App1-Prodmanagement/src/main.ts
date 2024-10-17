import { ProductManager } from "./productmanager";
import { Product } from "./products";
const productManager = new ProductManager();
const product : Product={
    id: 1,
    fname: "Nitish",
    lname: "Veni",
    address: "Bengaluru",
    gender: "Male",
    options: "Latte",
    delivery: "Delivery"
    
};
productManager.addProduct(product);
var products : Product[] = productManager.listProducts();
console.log(products);

const product1 : Product={
    id:2,
    fname: "Rajat",
    lname: "Lad",
    address: "Hubballi",
    gender: "Male",
    options: "Cappucinno",
    delivery: "Delivery"
    
};
productManager.addProduct(product1);
var products: Product[] =productManager.listProducts();
console.log(products);

productManager.removeProduct(1);
products = productManager.listProducts();
console.log(products);