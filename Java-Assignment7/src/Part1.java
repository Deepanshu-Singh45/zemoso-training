abstract class Rodent {
    Rodent() {
        System.out.println("This is a Rodent.");
    }
    abstract void eat();
    abstract void sleep();
    abstract void run();
}

class Mouse extends Rodent {
    Mouse() {
        System.out.println("This is a Mouse.");
    }

    void eat() {
        System.out.println("Mouse is eating.");
    }

    void sleep() {
        System.out.println("Mouse is sleeping.");
    }

    void run() {
        System.out.println("Mouse is running.");
    }
}

class Gerbil extends Rodent {
    Gerbil() {
        System.out.println("This is a Gerbil.");
    }

    void eat() {
        System.out.println("Gerbil is eating.");
    }

    void sleep() {
        System.out.println("Gerbil is sleeping.");
    }

    void run() {
        System.out.println("Gerbil is running.");
    }
}

class Hamster extends Rodent {
    Hamster() {
        System.out.println("This is a Hamster.");
    }

    void eat() {
        System.out.println("Hamster is eating.");
    }

    void sleep() {
        System.out.println("Hamster is sleeping.");
    }

    void run() {
        System.out.println("Hamster is running.");
    }
}


public class Part1 {
    public static void main(String[] args) {
        Rodent[] rodents = new Rodent[3];
        rodents[0] = new Mouse();
        rodents[1] = new Gerbil();
        rodents[2] = new Hamster();

        for (Rodent rodent : rodents) {
            rodent.eat();
            rodent.sleep();
            rodent.run();
        }
    }

}
