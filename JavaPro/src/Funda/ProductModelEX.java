package Funda;

class ProductModel {
    private String productId = "ISP001";
    private String productName = "Laptop";
    private int productPrice = 1000;

    @Override
    public String toString() {
        return "ProductModel [productId=" + productId + ", ProductName= " + productName +", Product Price="+productPrice+ "]";
    }

    public void setProductPrice(int productPrice) {
        if (productPrice < 0 || productPrice > 10000) {
            System.out.println("\n Invalid product price");
            return;
        }
        else{
            this.productPrice = productPrice;
        }
    }

    public String getProductId() {
        return productId.substring(2);
    }
    public int getProductPrice() {
        return productPrice;
    }
}
    public class ProductModelEX{
        public static void main(String[] args) {
        ProductModel productModel = new ProductModel();
        System.out.println(productModel);
        productModel.setProductPrice(2000);
        System.out.println(productModel);
        productModel.setProductPrice(1000000);
        System.out.println(productModel);
        System.out.println(productModel.getProductId());
        System.out.println(productModel.getProductPrice());

    }

}

