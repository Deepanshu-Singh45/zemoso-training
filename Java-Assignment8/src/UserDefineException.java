// Define three custom exceptions
class IncorrectFileName extends Exception {}
class AgeVerification extends Exception {}
class EmailVerification extends Exception {}

public class UserDefineException {
    // A method that throws all three exceptions
    public static void myMethod(int option) throws IncorrectFileName, AgeVerification, EmailVerification {
        switch (option) {
            case 1:
                throw new IncorrectFileName();
            case 2:
                throw new AgeVerification();
            case 3:
                throw new EmailVerification();
            default:
                throw new NullPointerException();
        }
    }

    public static void main(String[] args) {
        try {
            myMethod(2); // Call the method with an invalid option
        } catch (IncorrectFileName | AgeVerification | EmailVerification | NullPointerException e) {
            System.out.println("Caught exception: " + e.getClass().getSimpleName());
        } finally {
            System.out.println("Finally block executed.");
        }
    }
}
