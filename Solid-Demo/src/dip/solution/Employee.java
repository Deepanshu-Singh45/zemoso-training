package dip.solution;
// follow DIP principle
import java.util.ArrayList;

interface Database {
    void save();
}

class EmployeeDetails {
    private String name;
    private double salary;

    public EmployeeDetails(String name, double salary) {
        this.name = name;
        this.salary = salary;
    }

    public String getName() {
        return name;
    }

    public double getSalary() {
        return salary;
    }
}

class EmployeeDIP {
    private Database database;

    public EmployeeDIP(Database database) {

        this.database = database;
    }

    public void saveEmployee() {

        database.save();
    }
}

class EmployeeDatabase implements Database {
    private ArrayList<EmployeeDetails> employees;

    public EmployeeDatabase() {

        employees = new ArrayList<>();
    }

    @Override
    public void save() {
        employees.add(new EmployeeDetails("John Doe", 50000.0));
    }

    public ArrayList<EmployeeDetails> getEmployees() {

        return employees;
    }
}

public class Employee {
    public static void main(String[] args) {

        Database employeeDatabase = new EmployeeDatabase();
        EmployeeDIP employeeDIP = new EmployeeDIP(employeeDatabase);
        employeeDIP.saveEmployee();

        ArrayList<EmployeeDetails> employees = ((EmployeeDatabase) employeeDatabase).getEmployees();
        for (EmployeeDetails employee : employees) {
            System.out.println("Name: " + employee.getName() + ", Salary: " + employee.getSalary());
        }
    }
}
