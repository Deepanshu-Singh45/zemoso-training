
// Outer class with an inner class
class Outer {
    private String outerName;

    public Outer(String name) {
        outerName = name;
    }
    // Inner class with a non-default constructor
    class Inner {
        private String innerName;

        public Inner(String name) {
            innerName = name;
        }

        public void printNames() {
            System.out.println("Outer name: " + outerName);
            System.out.println("Inner name: " + innerName);
        }
    }
}

// Second class with an inner class
class Second {
    // here Inner class that inherits from the Inner class in the Outer class
    class InheritedInner extends Outer.Inner {
        public InheritedInner(Outer outer, String innerName) {
            outer.super(innerName);
        }
    }
}
public class Part5 {
    public static void main(String[] args) {
        Outer outer = new Outer("Outer");
        Outer.Inner inner = outer.new Inner("Inner");
        inner.printNames();

        Second second = new Second();
        Second.InheritedInner inheritedInner = second.new InheritedInner(outer, "Inherited Inner");
        inheritedInner.printNames();
    }
}

