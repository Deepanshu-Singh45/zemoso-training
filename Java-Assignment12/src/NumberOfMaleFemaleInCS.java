import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

public class NumberOfMaleFemaleInCS {
    NumberOfMaleFemaleInCS(List<Student>list) {
        System.out.println("Number of Male & Female students in Computer Science : ");
        Map<String, Long> CountFreq = list.stream().filter(e -> e.getDepartment() == "Computer Science").collect(Collectors.groupingBy(e -> e.getGender(), Collectors.counting()));
        System.out.println(CountFreq);
        System.out.println();
    }
}
