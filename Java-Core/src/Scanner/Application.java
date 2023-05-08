package Scanner;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

public class Application {

    public static void main(String[] args) throws FileNotFoundException {
        String myFilePath = "D:\\newp\\test.txt";
        File file = new File(myFilePath);

        Scanner sc = new Scanner(file);


        while (sc.hasNextLine()) {

            String line = sc.nextLine();
            System.out.println(line);

        }

        sc.close();

    }

}
