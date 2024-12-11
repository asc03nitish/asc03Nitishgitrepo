package Labs;

import java.util.Scanner;
import java.util.SortedMap;

public class Q3 {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);
        System.out.println("Enter number: ");
        int n = sc.nextInt();
//        for(int i=1;i<=10;i++){
//            int x=n*i;
//            System.out.println(n+"x"+i+"="+x);
//        }
        mul(n);
    }


    public static void mul(int n) {
        int i = 1;
        int j = 1;
        while (i <= 10) {
            int x = n * i;
            System.out.println(n+"x"+i+"="+x);
            i++;
        }
        System.out.println("\n\n");
        do{
            int x = n * j;
            System.out.println(n+"x"+j+"="+x);
            j++;
        }while(j<=10);
    }
}