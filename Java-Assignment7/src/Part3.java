// Define three interfaces
interface Interface1 {
    void method1a();
    void method1b();
}

interface Interface2 {
    void method2a();
    void method2b();
}

interface Interface3 {
    void method3a();
    void method3b();
}

// Inherit a new interface by combining the three and adding a new method
interface CombinedInterface extends Interface1, Interface2, Interface3 {
    void newMethod();
}

// Define a concrete class to inherit from
class ConcreteClass {
    public void concreteMethod() {
        System.out.println("This is a concrete method.");
    }
}

// Implement the new interface and inherit from a concrete class
class MyClass extends ConcreteClass implements CombinedInterface {
    public void method1a() {
        System.out.println("Method 1a");
    }

    public void method1b() {
        System.out.println("Method 1b");
    }

    public void method2a() {
        System.out.println("Method 2a");
    }

    public void method2b() {
        System.out.println("Method 2b");
    }

    public void method3a() {
        System.out.println("Method 3a");
    }

    public void method3b() {
        System.out.println("Method 3b");
    }

    public void newMethod() {
        System.out.println("This is the new method.");
    }
}

// Define four methods that take one of the four interfaces as an argument
class MyMethods {
    public void method1(Interface1 obj) {
        obj.method1a();
        obj.method1b();
    }

    public void method2(Interface2 obj) {
        obj.method2a();
        obj.method2b();
    }

    public void method3(Interface3 obj) {
        obj.method3a();
        obj.method3b();
    }

    public void method4(CombinedInterface obj) {
        obj.method1a();
        obj.method2a();
        obj.method3a();
        obj.newMethod();
    }
}

public class Part3 {
    public static void main(String[] args) {
        MyClass myObj = new MyClass();
        MyMethods myMethods = new MyMethods();

        // Pass the object to each of the four methods
        myMethods.method1(myObj);
        myMethods.method2(myObj);
        myMethods.method3(myObj);
        myMethods.method4(myObj);
    }
}
