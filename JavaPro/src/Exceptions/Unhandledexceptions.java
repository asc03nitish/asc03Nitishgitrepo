package Exceptions;

public class Unhandledexceptions {
    public static void main(String[] args) {
        int age = 100;
            if(age < 21 || age > 60) {
                AgeInvalidException ageInvalidException = new AgeInvalidException("Invalid Age for an Employee");
                try {
                    throw ageInvalidException;
                } catch (AgeInvalidException e) {
                    System.out.println(e.getMessage());
                }
                }
                else{
                    System.out.println("Eligible");
                }


            System.out.println("Done");
    }
}

class AgeInvalidException extends RuntimeException{
    public AgeInvalidException(String message){
        super(message);
    }

}