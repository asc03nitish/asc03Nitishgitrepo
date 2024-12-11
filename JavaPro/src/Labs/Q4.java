package Labs;

public class Q4 {
    public static void main(String[] args) {
        String input = "Sum of 12 and 20 is 32";
        int result = countWords(input);
        System.out.println("The number of words is: " + result);
    }
    public static int countWords(String input) {

        String[] parts = input.split(" ");
        int wordCount = 0;

        for (String part : parts) {
            if (isAlphabeticWord(part)) {
                wordCount++;
            }
        }
        return wordCount;
    }
    private static boolean isAlphabeticWord(String str) {
        for (int i = 0; i < str.length(); i++) {
            if (!Character.isLetter(str.charAt(i))) {
                return false;
            }
        }
        return !str.isEmpty();
    }
}
