import java.util.*;

public class VampireNumbers {
    public static boolean isVampireNumber(long num) {
        String numStr = Long.toString(num);
        int numDigits = numStr.length();
        int halfDigits = numDigits / 2;

        // if the length of numDigits is not even then not vampire number
        if (numDigits % 2 != 0) {
            return false;
        }

        for (long i = (long)Math.pow(10, halfDigits - 1); i < (long)Math.pow(10, halfDigits); i++) {
            if (num % i == 0) {
                long factor2 = num / i;

                if (Long.toString(i).endsWith("0") && Long.toString(factor2).endsWith("0")) {
                    continue;
                }

                String factorStr = Long.toString(i) + Long.toString(factor2);
                char[] numChars = numStr.toCharArray();
                char[] factorChars = factorStr.toCharArray();

                Arrays.sort(numChars);
                Arrays.sort(factorChars);

                if (Arrays.equals(numChars, factorChars)) {
                    return true;
                }
            }
        }

        return false;
    }

    public static void main(String[] args) {

        int cnt = 0;
        long num = 10;
        while(cnt < 100) {
            if(isVampireNumber(num)) {
                System.out.println(num);
                cnt += 1;
            }
            num += 1;
        }
    }

}
