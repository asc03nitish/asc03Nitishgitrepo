package Labs;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.Scanner;

public class Q6 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int arr[] = new int[11];
        int size = 10;
        System.out.println("Enter array elements:");
        for(int i=0;i<size;i++){
            arr[i] = sc.nextInt();
        }
        System.out.println("Printing Using while loop");
        int i=0;
        while(i<size){
            System.out.println(i+""+arr[i]);
            i++;
        }
        System.out.println("Printing Using for loop");
        for (int j=0;j<size;j++){
            System.out.println(arr[j]);
        }
        Arrays.sort(arr);
        for (int j=0;j<size;j++) {
            System.out.println("Sorted Array: " + arr[j]);
        }

        HashMap<Integer, Integer> frequencyMap = new HashMap<>();

        for (int num : arr) {
            frequencyMap.put(num, frequencyMap.getOrDefault(num, 0) + 1);
        }

        System.out.println("Enter a number to count its freq:");
        int x = sc.nextInt();

        int count = frequencyMap.getOrDefault(x, 0);
        System.out.println("The number " + x + " occurs " + count + " times in the array.");

        System.out.println("Enter a number:");
        int k = sc.nextInt();

        System.out.println("Enter a position:");
        int p = sc.nextInt();

        for (int j = size; j >= p; j--) {
            arr[i] = arr[i - 1];
        }
        arr[p - 1] = k;

        int[] dupli = removeExactDuplicates(arr);
        System.out.println("Array excluding duplicate occurrences:");
        for (int num : dupli) {
            System.out.print(num + " ");
        }
    }
    public static int[] removeExactDuplicates(int[] arr) {
        ArrayList<Integer> uniqueList = new ArrayList<>();

        for (int num : arr) {
            if (!uniqueList.contains(num)) {
                uniqueList.add(num);
            }
        }


        int[] result = new int[uniqueList.size()];
        for (int i = 0; i < uniqueList.size(); i++) {
            result[i] = uniqueList.get(i);
        }

        return result;
    }


}


