package Labs;

public class Q1 {
    public static void main(String[] args) {
        Add a = new Add();
        a.add(10,20);
        a.add(10,20,30);
        a.add(10.5, 20.1);
        a.add("Hello", 20);

    }
}
class Add{
    void add(int a, int b){
        System.out.println(a+b);
    }
    void add(int a,int b, int c){
        System.out.println(a+b+c);
    }
    void add(double a, double b){
        System.out.println(a+b);
    }
    void add(String a, int b){
        System.out.println(a+" "+b);
    }
}
