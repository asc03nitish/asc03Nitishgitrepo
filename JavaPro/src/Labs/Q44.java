package Labs;
import java.util.*;
public class Q44 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter a number between 100-999");
        String n = sc.nextLine();
        char arr[] = n.toCharArray();
        String res[] = new String[arr.length];
        for(int i=0;i<arr.length;i++){
            if(arr[i]=='1'){
                res[i] = "One";
                            }
            else if(arr[i]=='2'){
                res[i] = "Two";

            }
            else if(arr[i]=='3'){
                res[i] = "Three";

            }
            else if(arr[i]=='4'){
                res[i] = "Four";

            }
            else if(arr[i]=='5'){
                res[i] = "Five";

            }
            else if(arr[i]=='6'){
                res[i] = "Six";

            }
            else if(arr[i]=='7'){
                res[i] = "Seven";

            }
            else if(arr[i]=='8'){
                res[i] = "Eight";

            }
            else if(arr[i]=='9'){
                res[i] = "Nine";

            }
            else{
                res[i]="Zero";
            }


        }
        for(int i=0;i<res.length;i++) {
            System.out.println(res[i]);
        }
    }
}
