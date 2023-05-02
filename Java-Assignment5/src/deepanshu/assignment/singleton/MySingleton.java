package deepanshu.assignment.singleton;

public class MySingleton {
    private String myString;

    public static MySingleton initializeString(String str) {
        MySingleton singleton = new MySingleton();
        singleton.myString = str;
        return singleton;
    }

    public void printString() {
        System.out.println("myString: " + myString);
    }



    public static void main(String[] args) {
        MySingleton mySingletonClass = new MySingleton();
        mySingletonClass.printString();
    }
}