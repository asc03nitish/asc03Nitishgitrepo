package Funda;

public class Hierarchial {
    public static void main(String[] args){
       A a = new A();
       a.displayA();
       B b = new B();
       b.displayA();
       b.displayB();
       C c = new C();
       c.displayA();
       c.displayC();
    }
}

class A{
    void displayA(){
        System.out.println("A");
    }
}
class B extends A{
    void displayB(){
        System.out.println("B");
    }
}
class C extends A{
    void displayC(){
        System.out.println("C");
    }
}
