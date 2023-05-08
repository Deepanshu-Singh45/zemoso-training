package Part4;

// Define the Cycle interface
interface Cycle {
    void ride();
}

// Implementations of the Cycle interface
class Unicycle implements Cycle {
    public void ride() {
        System.out.println("Riding a unicycle.");
    }
}

class Bicycle implements Cycle {
    public void ride() {
        System.out.println("Riding a bicycle.");
    }
}

class Tricycle implements Cycle {
    public void ride() {
        System.out.println("Riding a tricycle.");
    }
}

// Factories for each type of Cycle
interface CycleFactory {
    Cycle createCycle();
}

class UnicycleFactory implements CycleFactory {
    public Cycle createCycle() {
        return new Unicycle();
    }
}

class BicycleFactory implements CycleFactory {
    public Cycle createCycle() {
        return new Bicycle();
    }
}

class TricycleFactory implements CycleFactory {
    public Cycle createCycle() {
        return new Tricycle();
    }
}

// Code that uses the factories
public class Part4 {
    public static void rideCycle(CycleFactory factory) {
        Cycle cycle = factory.createCycle();
        cycle.ride();
    }

    public static void main(String[] args) {
        // Use the factories to create and ride cycles
        rideCycle(new UnicycleFactory());
        rideCycle(new BicycleFactory());
        rideCycle(new TricycleFactory());
    }
}

