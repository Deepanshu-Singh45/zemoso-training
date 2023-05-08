package ExecptionHandling.Example1;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

public class Application {

    public static void main(String[] args){
        //throws
//    } FileNotFoundException {

        try {
            read();
        }
        catch (FileNotFoundException e) {
            System.out.println("File not found");
        }

    }

    public static void read() throws FileNotFoundException {
        File file = new File("example.txt");
        Scanner readFile = new Scanner(file);
    }

}
