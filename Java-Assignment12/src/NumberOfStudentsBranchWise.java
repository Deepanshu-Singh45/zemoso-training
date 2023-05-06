import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

public class NumberOfStudentsBranchWise {

    NumberOfStudentsBranchWise(List<Student> list) {
        System.out.println("Count of number of students from each Branch : ");
        Map<String, Long> CountBranch = list.stream().collect(Collectors.groupingBy(e -> e.getDepartment(),
                Collectors.counting()));
        System.out.println(CountBranch);
        System.out.println();
    }
}
