package deepanshu.assignment.data;

public class MyClass {
    int myInt;
    char myChar;

    public void printVariables() {
        System.out.println("myInt: " + myInt);
        System.out.println("myChar: " + myChar);
    }

    public void printLocalVariables() {
        int i;
        char c;
        // compilation error will occur.
        // System.out.println("i: " + i);
        // System.out.println("c: " + c);
    }
}
