package Part4;
class MyClass {
    public MyClass(String str) {
        System.out.println("Initializing MyClass with argument: " + str);
    }
}

public class Main {
    public static void main(String[] args) {
        MyClass[] myClassArray = new MyClass[5];
        for (int i = 0; i < myClassArray.length; i++) {
            myClassArray[i] = new MyClass("Object " + i);
        }
    }
}
