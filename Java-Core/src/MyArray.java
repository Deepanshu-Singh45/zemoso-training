public class MyArray {

    public static void main(String[] args) {

        int[] numbers = new int[5];
        System.out.println(numbers[0]);

        int num = 5;
        for(int i = 0; i < numbers.length; i++) {
            numbers[i] = num;
            num = num + 5;
        }

        for(int i = 0; i < numbers.length; i++) {
            System.out.print(numbers[i] + " ");
        }

    }

}
