import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

public class AveragePercentage {
    AveragePercentage(List<Student>list) {

        System.out.println("Average % achieved by students branch-wise: ");
        Map<String, Double> avgPercentageByDepartment = list.stream()
                .collect(Collectors.groupingBy(Student::getDepartment, Collectors.averagingDouble(Student::getMarks)));
        System.out.println(avgPercentageByDepartment);
        System.out.println();
    }
}
