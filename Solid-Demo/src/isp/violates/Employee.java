package isp.violates;

// Bad implementation - violates ISP
interface EmployeeISP {
    void work();
    void takeBreak();
    void debuggingCode();
    void analysingFinancial();
}

class Engineer implements EmployeeISP {
    @Override
    public void work() {
        System.out.println("Engineer is busy for now.");
    }

    @Override
    public void takeBreak() {
        System.out.println("Engineer is on break.");
    }

    @Override
    public void debuggingCode() {
        System.out.println("Engineer is debugging the code base.");
    }

    @Override
    public void analysingFinancial() {
        System.out.println("Engineer don't need to analyze the financials.");
    }
}

class Accountant implements EmployeeISP {
    @Override
    public void work() {
        System.out.println("Accountant is Busy!");
    }

    @Override
    public void takeBreak() {

        System.out.println("Accountant is on break");
    }

    @Override
    public void debuggingCode() {
        System.out.println("Accountant not required to debug the code.");
    }

    @Override
    public void analysingFinancial() {
        System.out.println("Accountant analyzing the financials f firm.");
    }

}

public class Employee {
    public static void main(String[] args) {

        Accountant acc1 = new Accountant();
        acc1.work();
        acc1.takeBreak();
        acc1.debuggingCode();
        acc1.analysingFinancial();
        System.out.println();
        Engineer eng = new Engineer();
        eng.work();
        eng.takeBreak();
        eng.debuggingCode();
        eng.analysingFinancial();

    }
}