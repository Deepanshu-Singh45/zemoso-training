package srp.voilation;

import java.util.ArrayList;

class EmployeeSRP {
    private String name;
    private String address;
    private double salary;
    private ArrayList<String[]> employeeList = new ArrayList<String[]>();

    public EmployeeSRP(String name, String address, double salary) {
        this.name = name;
        this.address = address;
        this.salary = salary;
    }

    public double calculateSalary() {
        return this.salary;
    }

    public void saveEmployeeDetails() {

        employeeList.add(new String[]{this.name, this.address}); // violates SRP
    }

    public ArrayList<String[]> getEmployeeList() {
        return employeeList;
    }
}

public class Employee {

    public static void main(String[] args) {

        EmployeeSRP emp1 = new EmployeeSRP("Deep Singhania", "Greater Noida", 70000.0);
        emp1.saveEmployeeDetails();
        System.out.println(emp1.calculateSalary());
        EmployeeSRP emp2 = new EmployeeSRP("John Ram", "NY City", 895632.58);
        emp2.saveEmployeeDetails();


        // Traverse the employeeList
        System.out.println("Employee Details:");
        for (String[] empDetails : emp2.getEmployeeList()) {
            System.out.println("Name: " + empDetails[0] + ", Address: " + empDetails[1]);
        }
    }
}
