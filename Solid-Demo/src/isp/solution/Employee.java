package isp.solution;

// Good implementation - follows ISP
interface Work {
    void work();
    void takeBreak();
}

interface CodeBase {
    void debuggingCode();
}

interface Financial {
    void analyzingFinancial();
}

class Engineer implements Work, CodeBase {
    @Override
    public void work() {
        System.out.println("Status => Busy!");
    }

    @Override
    public void takeBreak() {
        System.out.println("Status => On Break");
    }

    @Override
    public void debuggingCode() {
        System.out.println("Engineer is busy in debugging of code.");
    }

}

class Accountant implements Work, Financial {
    @Override
    public void work() {
        System.out.println("Status => Busy!");
    }

    @Override
    public void takeBreak() {
        System.out.println("Status => On Break");
    }


    @Override
    public void analyzingFinancial() {
        System.out.println("Accountant is analyzing financials of Organization");
    }
}

public class Employee {
    public static void main(String[] args) {
        Accountant acc1 = new Accountant();
        acc1.work();
        acc1.takeBreak();
        acc1.analyzingFinancial();
        System.out.println();

        Engineer eng = new Engineer();
        eng.work();
        eng.takeBreak();
        eng.debuggingCode();

    }
}
