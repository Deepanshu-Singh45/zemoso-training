package ocp.solution;

interface EmployeeSalaryCalculator {
    double calculateSalary();
}

class EmployeeOCP implements EmployeeSalaryCalculator {
    private String name;
    private double salary;

    public EmployeeOCP(String name, double salary) {
        this.name = name;
        this.salary = salary;
    }

    public double calculateSalary() {
        return this.salary;
    }
}

class EmployeeBonusCalculator implements EmployeeSalaryCalculator {
    private EmployeeSalaryCalculator employee;

    public EmployeeBonusCalculator(EmployeeSalaryCalculator employee) {

        this.employee = employee;
    }

    @Override
    public double calculateSalary() {

        return employee.calculateSalary() * 1.1;
    }
}

public class Employee {
    public static void main(String[] args) {
        EmployeeOCP emp1 = new EmployeeOCP("Shyam", 1000);
        System.out.println(emp1.calculateSalary());

        EmployeeBonusCalculator emp2 = new EmployeeBonusCalculator(emp1);
        System.out.println(emp2.calculateSalary());

    }
}
