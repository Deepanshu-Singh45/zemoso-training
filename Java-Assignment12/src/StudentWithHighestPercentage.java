import java.util.Comparator;
import java.util.List;
import java.util.Optional;

public class StudentWithHighestPercentage {
    StudentWithHighestPercentage(List<Student> list) {
        System.out.println("Get details of student having highest % : ");
        Optional<Student> maxPerStudentDetails = list.stream().max(Comparator.comparing(Student::getMarks));

        if(maxPerStudentDetails.isEmpty()) {
            System.out.println("No such student found!");
        }else {
            System.out.println("Students are below : ");
            System.out.println("Name : " + maxPerStudentDetails.get().getName());
            System.out.println("ID : " + maxPerStudentDetails.get().getId());
            System.out.println("Age : " + maxPerStudentDetails.get().getAge());
            System.out.println("Gender : " + maxPerStudentDetails.get().getGender());
            System.out.println("Branch : " + maxPerStudentDetails.get().getDepartment());
            System.out.println("Year of Employment : " + maxPerStudentDetails.get().getYearOfEmployment());
            System.out.println("Percentage : " + maxPerStudentDetails.get().getMarks());
        }
        System.out.println( );
    }
}
