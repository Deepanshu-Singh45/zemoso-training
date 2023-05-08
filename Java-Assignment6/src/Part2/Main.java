
//      Create a class with two (overloaded) constructors.
//      Using this, call the second constructor inside the first one.

package Part2;

class OverloadedConsClass {

    private String name;
    private int age;

    public OverloadedConsClass(String name) {
        this(name, 0);
    }

    public OverloadedConsClass(String name, int age) {
        this.name = name;
        this.age = age;
        System.out.println("NAME : " + name + " , AGE : " + age);
    }
}
public class Main {
    public static void main(String[] args) {
        OverloadedConsClass obj1 = new OverloadedConsClass("Alice"); // calling first constructor
        OverloadedConsClass obj2 = new OverloadedConsClass("Bob", 25); // calling second constructor
    }
}
