// Define three custom exceptions
class CustomException1 extends Exception {}
class CustomException2 extends Exception {}
class CustomException3 extends Exception {}

public class UserDefineException {
    // A method that throws all three exceptions
    public static void myMethod(int option) throws CustomException1, CustomException2, CustomException3 {
        switch (option) {
            case 1:
                throw new CustomException1();
            case 2:
                throw new CustomException2();
            case 3:
                throw new CustomException3();
            default:
                throw new NullPointerException();
        }
    }

    public static void main(String[] args) {
        try {
            myMethod(2); // Call the method with an invalid option
        } catch (CustomException1 | CustomException2 | CustomException3 | NullPointerException e) {
            System.out.println("Caught exception: " + e.getClass().getSimpleName());
        } finally {
            System.out.println("Finally block executed.");
        }
    }
}
