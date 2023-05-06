import java.util.List;
import java.util.stream.Collectors;

public class StudentsOfCS {
    StudentsOfCS(List<Student> list) {
        System.out.println("Details of Male Student in Computer Science Department : ");
        List<String> Details = list.stream().filter(std -> std.getDepartment().equals("Computer Science") && std.getGender().equals("Male")).map(Student::getName).collect(Collectors.toList());
        System.out.println(Details);
        System.out.println();
    }
}
