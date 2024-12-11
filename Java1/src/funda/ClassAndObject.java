package funda;

class Car{
    String type;
    int price;
    Car(){
        type = "Petrol";
        price = 100;
    }
    void display(){
        System.out.println(type);
        System.out.println(price);
    }
    @Override        
    public String toString(){
        String message = "Type of Car: "+type+"\nPrice: "+price;
        return message;
    }
}

public class ClassAndObject {
    public static void main(String[] args){
        Car car = null;
        car = new Car();
        // System.out.println(car.type);
        // System.out.println(car.price);

        // car.display();
        // System.out.println(car);
        // String message = car.toString();
        // System.out.println(message);

        System.err.println(car.toString());
    }
    
}
