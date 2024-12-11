package Funda;
public class MultiLevvelInheriance {
    public static void main(String[] args){
        A1 a = new A1();
        a.displayA();
        B1 b = new B1();
        b.displayA();
        b.displayB();
        C1 c = new C1();
        c.displayA();
        c.displayB();
        c.displayC();
    }
}
class A1{
    void displayA(){
        System.out.println("A");
    }
}
class B1 extends A1{
    void displayB(){
        System.out.println("B");
    }
}
class C1 extends B1{
    void displayC(){
        System.out.println("C");
    }
}
