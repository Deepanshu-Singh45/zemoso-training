import java.util.Scanner;

public class UserInput {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        System.out.println("Enter an integer: ");

        int value = sc.nextInt();
        System.out.println("Your number is : " + value);
        System.out.println("Enter a decimal number : ");
        double decNum = sc.nextDouble();
        System.out.println("Decimal number which is entered is : " + decNum);
    }

}
