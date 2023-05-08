package Part3;
class MyClass {
    public MyClass(String str) {
        System.out.println("Initializing MyClass with argument: " + str);
    }
}

public class Main {
    public static void main(String[] args) {
        MyClass[] myClassArray = new MyClass[5];
    }
}
