package dip.violation;

import java.util.ArrayList;

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

class Database {
    public void printEmployeeDetails(ArrayList<EmployeeDetails>  employeeList) {

        for(int i = 0; i < employeeList.size(); i++) {
            System.out.println("Name : " + employeeList.get(i).getName() + " Salary : " + employeeList.get(i).getSalary());
        }

    }
}
class EmployeeDatabase extends  Database{
//    private Database database;
    private ArrayList<EmployeeDetails>  employeeList = new ArrayList<>();
    public void save(EmployeeDetails employeeDetail) {

        employeeList.add(employeeDetail);
    }
    public void fetchEmployeeDetail() {

        this.printEmployeeDetails(employeeList);
    }

}



public class Employee {
    public static void main(String[] args) {

        EmployeeDetails emp = new EmployeeDetails("Ashutosh", 18000);
        EmployeeDatabase empDB = new EmployeeDatabase();
        empDB.save(emp);
        empDB.fetchEmployeeDetail();
    }
}