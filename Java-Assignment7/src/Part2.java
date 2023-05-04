
class Cycle {
    int wheels;
    public Cycle(int wheels) {
        this.wheels = wheels;
    }

    public void ride() {
         System.out.println("Riding on " + wheels + " wheels cycle.");
    }

}

class Unicycle extends  Cycle {

    public Unicycle(int wheels) {
        super(wheels);
    }
    public void balance() {
        System.out.println("Unicyle is Balanced on 1 wheel.");
    }
}

class Bicycle extends Cycle {

    public Bicycle(int wheels) {
        super(wheels);
    }
    public void balance() {
        System.out.println("Unicyle is Balanced on 1 wheel.");
    }
}

class Tricycle extends Cycle {

    public Tricycle(int wheels) {
        super(wheels);
    }
}

public class Part2 {
    public static void main(String[] args) {

        Cycle[] cycles = {new Unicycle(1), new Bicycle(2), new Tricycle(3)};

        for(Cycle cycle : cycles) {
            cycle.ride();

            // try calling balance() on each element
            if (cycle instanceof Unicycle) {
                ((Unicycle) cycle).balance(); // downcasting
            } else if (cycle instanceof Bicycle) {
                ((Bicycle) cycle).balance(); // downcasting
            }
        }

    }
}
