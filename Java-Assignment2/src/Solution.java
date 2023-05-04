import java.util.Scanner;

public class Solution {

    public static boolean containsAllLetters(String input) {
        // Array that keep track, which letters are present or not
        boolean[] seen = new boolean[26];

        // Iterating input string, marking each letter as seen
        for (int i = 0; i < input.length(); i++) {
            char ch = Character.toLowerCase(input.charAt(i));
            if (ch >= 'a' && ch <= 'z') {
                seen[ch - 'a'] = true;
            }
        }

        // Check if we've seen all 26 letters
        for (boolean letterSeen : seen) {
            if (!letterSeen) {
                return false;
            }
        }

        return true;
    }

    public static void main(String[] args) {

        System.out.print("Enter a string, To check whether all letters are present in it or not : ");

        Scanner sc = new Scanner(System.in);
        String inpStr = sc.nextLine();

        System.out.println(containsAllLetters(inpStr) ? "All letters are present in the input string."
                : "All letters are not present in the input string.");

    }

}
