import java.io.File;
import java.util.Scanner;
import java.util.regex.Pattern;
import java.util.regex.Matcher;

public class FileSearcher {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String regex;
        Pattern pattern;
        Matcher matcher;
        boolean keepSearching = true;

        System.out.println("Welcome to the File Searcher program!");

        while (keepSearching) {
            System.out.println("Enter a regular expression to search for files: ");
            regex = scanner.nextLine();
            pattern = Pattern.compile(regex);

            System.out.println("Searching for files that match the regular expression: " + regex);
            searchFiles(pattern, new File(System.getProperty("user.home")));

            System.out.println("Do you want to search again? (y/n)");
            String input = scanner.nextLine();
            if (input.equalsIgnoreCase("n")) {
                keepSearching = false;
            }
        }
        scanner.close();
    }

    /**
     => Searching for files that match the given pattern in the home directory.
     => Printing the complete absolute path of each matched file.
     */
    public static void searchFiles(Pattern pattern, File directory) {
        File[] files = directory.listFiles();
        if (files != null) {
            for (File file : files) {
                if (file.isDirectory()) {
                    searchFiles(pattern, file);
                } else {
                    String fileName = file.getName();
                    Matcher matcher = pattern.matcher(fileName);
                    if (matcher.matches()) {
                        System.out.println(file.getAbsolutePath()); // printing matched file name
                    }
                }
            }
        }
    }
}
