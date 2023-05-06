import java.util.List;

public class EnrolledStudent {
    EnrolledStudent(List<Student> list) {
        System.out.println("Name of all Students Enrolled after 2018 : ");
        List<String> Names = list.stream().filter(std -> std.getYearOfEmployment() > 2018).map(Student::getName).toList();
        System.out.println(Names);
        System.out.println();
    }
}
