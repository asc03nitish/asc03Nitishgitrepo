package Funda;

public class DefaultConstructor {
    public static void main(String[] args) {
//        String s1 = "Nitish";
//        String s2 = "nitish";
//        System.out.println(s1.charAt(1));
//        System.out.println(s1.compareTo(s2));
//        System.out.println(s1.equals(s2));
//        System.out.println(s1.contains("n"));
//        System.out.println(s1.endsWith("h"));
//        System.out.println(s1.concat(s2));
//        System.out.println(s1.indexOf("N"));
//        System.out.println(s1.getBytes());
            String s1 = "welcome$abc!test";
            char[] c1 = s1.toCharArray();
            char[] res = new char[c1.length];
            int index = 0;
            for (int i = 0; i < c1.length; i++) {
                if (c1[i] != '$' && c1[i] != '!') {
                    res[index++] = c1[i];
                }
            }

            String result = new String(res, 0, index);
            System.out.println(result);
        }
    }