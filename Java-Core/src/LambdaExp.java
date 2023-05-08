interface  FunctionalInterface {
    void start();
}

class  Car {
    public void drive(FunctionalInterface obj) {
        System.out.println("Driving the Car...");
        obj.start();
    }
}

public class LambdaExp {

    public static void main(String[] args) {

        Car car = new Car();
        // Anonymous Class
        car.drive(new FunctionalInterface() {
            public void start() {
                System.out.println("Start driving...");
            }
        });
        System.out.println(" ");

        // Lambda expression

        car.drive(() -> {
            System.out.println("Start driving ...");
            System.out.println("Continue driving ...");

        });

    }

}
