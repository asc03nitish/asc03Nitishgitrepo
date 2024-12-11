package Labs;
import java.util.*;
public class Q222 {
    public static void main(String[] args) {
        Scanner sc  = new Scanner(System.in);
        System.out.println("Enter Your Name:");
        String name = sc.nextLine();
        String result = message(name);
        System.out.println(result);
    }
    public static String message(String name){
        return "Hello "+name+", Welcome to Java World! ";
    }
}
