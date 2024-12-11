package Labs;
import java.util.*;
public class Q33 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter a, b, c\n");
        int a = sc.nextInt();
        int b= sc.nextInt();
        int c= sc.nextInt();
        int res = highest(a, b, c);
        System.out.println("Highest"+res);
    }
    public static int highest(int a, int b, int c){
        if(a>b && a>c){
            return a;
        }
        else if(b>a && b>c){
            return b;

        }
        else{
            return c;
        }
    }
}

