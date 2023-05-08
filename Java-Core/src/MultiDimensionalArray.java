public class MultiDimensionalArray {

    public static void main(String[] args) {

        int[] oneDimensionalArray = {12, 13, 14};
        System.out.println(oneDimensionalArray[1]);

        int[][] TwoDimensionalArray = {{12, 13, 14}, {20, 21, 22}, {40, 41, 42}};

        System.out.println(TwoDimensionalArray[1][1]); // 21
        System.out.println(TwoDimensionalArray[2][1]); // 41

        double[][] array = new double[4][2];
        System.out.println(array[0][1]);

        // iterating 2-D array
        for(int i = 0; i < TwoDimensionalArray.length; i++) {
            for(int k = 0; k < TwoDimensionalArray[i].length; k++) {
                System.out.print(TwoDimensionalArray[i][k] + " ");
            }
            System.out.println();
        }

    }

}
