
public class Student {
    private int id;
    private String name;
    private int age;
    private String gender;
    private String engDepartment;
    private int year_of_enrollment;
    private double perTillDate;

    Student(int id, String name, int age, String gender, String engDepartment, int year_of_enrollment, double perTillDate) {
        this.id = id;
        this.age = age;
        this.gender = gender;
        this.engDepartment = engDepartment;
        this.year_of_enrollment = year_of_enrollment;
        this.perTillDate = perTillDate;
        this.name = name;
    }

    public String getDepartment() {
        return engDepartment;
    }

    public String getName() {
        return name;
    }

    public int getYearOfEmployment() {
        return year_of_enrollment;
    }

    public int getId() {
        return id;
    }

    public int getAge() {
        return age;
    }

    public String getGender() {
        return gender;
    }

    public double getMarks() {
        return perTillDate;
    }


}
