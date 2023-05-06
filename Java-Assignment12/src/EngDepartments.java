import java.util.List;
import java.util.stream.Collectors;

public class EngDepartments {
    EngDepartments(List<Student> list) {
        System.out.println("Printing name of all Engineering Department : ");
        List<String> Departments = list.stream().map(Student::getDepartment).distinct().collect(Collectors.toList());
        System.out.println(Departments);
        System.out.println();
    }
}
