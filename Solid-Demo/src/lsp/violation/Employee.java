package lsp.violation;

class EmployeeLSP {
    private String name;
    private double salary;

    public EmployeeLSP(String name, double salary) {
        this.name = name;
        this.salary = salary;
    }

    public double calculateSalary() {
        return this.salary;
    }

    public double calculateBonus() {
        return this.salary * 0.1;
    }
}

class SalesEmployee extends EmployeeLSP {
    private double commission;

    public SalesEmployee(String name, double salary, double commission) {
        super(name, salary);
        this.commission = commission;
    }

    @Override
    public double calculateSalary() {
        return super.calculateSalary() + this.commission;
    }

    @Override
    public double calculateBonus() {
        return super.calculateBonus() + this.commission * 0.05; // violates LSP as it does not meet the contract of the base class
    }
}


public class Employee {
    public static void main(String[] args) {

        EmployeeLSP emp1 = new EmployeeLSP("Shyam", 12500.50);
        System.out.println("Calculated Salary " + emp1.calculateSalary());
        System.out.println("Calculated Bonus " + emp1.calculateBonus());
        System.out.println("-----------------------");
        SalesEmployee emp = new SalesEmployee("Shyam", 125000, 1000);
        System.out.println("Calculated Salary with Commission " + emp.calculateSalary());
        System.out.println("Calculated Bonus with Commission bonus " + emp1.calculateBonus());

    }
}
