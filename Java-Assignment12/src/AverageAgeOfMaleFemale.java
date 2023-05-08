import java.util.List;
import java.util.OptionalDouble;

public class AverageAgeOfMaleFemale {
    AverageAgeOfMaleFemale(List<Student> list) {
        System.out.println("Average age of Male & Female students : ");
        OptionalDouble maleAverage = list.stream().filter(std -> std.getGender().equals("Male")).mapToDouble(Student::getAge).average();
        System.out.println("Male avg Age : "+maleAverage.getAsDouble());

        OptionalDouble femaleAvgAge = list.stream().filter(std -> std.getGender().equals("Female")).mapToDouble(Student::getAge).average();
        System.out.println("Female avg Age : " +femaleAvgAge.getAsDouble());
        System.out.println();
    }
}
