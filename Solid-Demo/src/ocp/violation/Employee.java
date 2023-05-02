package ocp.violation;

class EmployeeOCP {
    private String name;
    private double salary;

    public EmployeeOCP(String name, double salary) {
        this.name = name;
        this.salary = salary;
    }

    public double calculateSalary() {
        return this.salary;
    }

    public double calculateBonus() {
        return this.salary * 0.1; // violating the OCP as it modifies the existing code
    }
}

public class Employee {
    public static void main(String[] args) {
        EmployeeOCP emp1 = new EmployeeOCP("Deepanshu Singh", 100000.35);

        System.out.println(emp1.calculateSalary());
        System.out.println(emp1.calculateBonus());

    }
}
