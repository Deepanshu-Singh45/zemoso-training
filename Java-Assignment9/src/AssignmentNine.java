
// Problem Statement : Using the documentation for java.util.regex.Pattern as a resource,
//                      write and test a regular expression that checks a sentence to see
//                      that it begins with a capital letter and ends with a period.

import java.util.Scanner;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class AssignmentNine {

    public static void main(String[] args) {

        Scanner scan = new Scanner(System.in);

        System.out.println("Enter a sentence, To test whether it begins with a capital letter and ends with a period or not : ");
        String sentence = scan.nextLine();
//                "The quick brown fox jumps over the lazy dog.";
        Pattern pattern = Pattern.compile("^[A-Z].*[.]$");
        Matcher matcher = pattern.matcher(sentence);
        if (matcher.matches()) {
            System.out.println("The sentence is valid.");
        } else {
            System.out.println("The sentence is not valid.");
        }
    }

}
