package Equals;

class Laptop {
    private int id;
    private String brand;

    public Laptop(int id, String brand) {
        this.id = id;
        this.brand = brand;
    }
    @Override
    public String toString() {
        return "Laptop [ id = " + id + " , brand = " + brand + " ]";
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj)
            return true;
        if (obj == null)
            return false;
        if (getClass() != obj.getClass())
            return false;
        Laptop other = (Laptop) obj;
        if (brand == null) {
            if(other.brand != null)
                return false;
        } else if (!brand.equals(other.brand))
            return false;
        if (id != other.id)
            return false;
        return true;
    }

}

public class Application {
    public static void main(String[] args) {
        Laptop l1 = new Laptop(101, "ACER");
        Laptop l2 = new Laptop(102, "HP");

        System.out.println(l1.equals(l2));

        int firstNumber = 0;
        int secondNumber = 0;
        System.out.println(firstNumber == secondNumber);

        String a = "Yes";
        String b = "Yes";
        String c = "Yeseees".substring(0, 3);

        System.out.println(a == b);
        System.out.println(a == c); // as c = "Yes", but giving false
        System.out.println(c);

    }
}