import java.io.*;
import java.util.HashMap;
import java.util.Map;

public class CountCharacter {

    public static void main(String[] args) throws Exception {
//        if (args.length == 0) {
//            System.out.println("Usage: java CharacterCount <filename>");
//            System.exit(1);
//        }
        File fileName = new File("D:\\Java Core\\Assignment11\\src\\text.txt");
        Map<Character, Integer> charCountMap = new HashMap<>();
        try (BufferedReader reader = new BufferedReader(new FileReader(fileName))) {
            int c;
            while ((c = reader.read()) != -1) {
                char ch = (char) c;
                if (charCountMap.containsKey(ch)) {
                    charCountMap.put(ch, charCountMap.get(ch) + 1);
                } else {
                    charCountMap.put(ch, 1);
                }
            }
        } catch (IOException e) {
            System.out.println("Error reading file: " + fileName);
            System.exit(1);
        }
        try (PrintWriter writer = new PrintWriter("charCount.txt")) {
            for (char ch : charCountMap.keySet()) {
                writer.println(ch + ": " + charCountMap.get(ch));
            }
        } catch (IOException e) {
            System.out.println("Error writing to file: charCount.txt");
            System.exit(1);
        }
        System.out.println("Character count saved to charCount.txt");

    }

}
