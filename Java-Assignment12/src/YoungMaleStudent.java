import java.util.Comparator;
import java.util.List;
import java.util.Optional;

public class YoungMaleStudent {
    YoungMaleStudent(List<Student>list) {
        System.out.println("Youngest Male student in Electronic Department : ");
        Optional<Student> youngestMale = list.stream().filter(e -> e.getDepartment() == "Electronic").min(Comparator.comparing(Student::getAge));

        if(youngestMale.isPresent()) {
            System.out.println(youngestMale.get().getName());
        }
    }
}
