package toStringMethod;

class Employee {
    private int id;
    private String name;

    public Employee(int id, String name) {
        this.id = id;
        this.name = name;
    }

    public String toString() {
        return ("ID: " + id + " , NAME : " + name);
    }

}

public class Application {
    public static void main(String[] args) {

        Employee employee1 = new Employee(201, "John Brown");
        Employee employee2 = new Employee(202, "Kamrain Roses");

        System.out.println(employee1);
        System.out.println(employee2);

    }
}
