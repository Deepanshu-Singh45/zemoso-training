package deepanshu.assignment.main;
import deepanshu.assignment.data.MyClass;
import deepanshu.assignment.singleton.MySingleton;


public class Main {
    public static void main(String[] args) {
        MyClass obj1 = new MyClass();
        obj1.printVariables();
        obj1.printLocalVariables();


        MySingleton obj2 = MySingleton.initializeString("Hello World");
        obj2.printString();
    }
}

