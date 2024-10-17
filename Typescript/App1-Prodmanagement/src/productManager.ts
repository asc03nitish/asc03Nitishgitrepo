import { Product } from "./products";
export class ProductManager{
    private products:Product[] = [];
    addProduct(product: Product):void{
        this.products.push(product);
    }
    listProducts():Product[]{
        return this.products;
    };
    removeProduct(id:number):void{
        this.products=this.products.filter(product=>product.id!==id);
    }
    searchProd(fname1:string):Product[]{
        const person = this.products.filter(product=>product.fname==fname1);
        return person;
    }
}