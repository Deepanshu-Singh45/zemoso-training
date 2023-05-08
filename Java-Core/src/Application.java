public class Application {

    public static void main(String[] args) {
        System.out.println("Hello, World!");
        double num1 = 1, num2 = 2.3;
        String text = "Hi";
        String blank = " ";
        String moreText = "there!";
        String hiThere = text + blank + moreText;
        System.out.println(text);
        System.out.println(text + blank + moreText);
        System.out.println("Hi" + " " + "there!");
        System.out.println(hiThere);
        System.out.println("My numbers " + num1 + ", " + num2);
    }

}
