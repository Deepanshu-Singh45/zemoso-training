import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

public class NumberOfMaleFemaleStudents {
    NumberOfMaleFemaleStudents(List<Student> list) {
        System.out.println("Number of Male & Female students : ");
        Map<String, Long> Freq = list.stream().collect(Collectors.groupingBy(e -> e.getGender(), Collectors.counting()));
        System.out.println(Freq);
        System.out.println();
    }
}
