import java.util.*;


public class Main {
    public static void main(String[] args) {
        List<Student> list = StudentList.getList();

        EngDepartments engineeringDepartments = new EngDepartments(list);
        EnrolledStudent enrolledStudentAfter2018 = new EnrolledStudent(list);
        StudentsOfCS maleStudentsOfCS = new StudentsOfCS(list);
        NumberOfMaleFemaleStudents numberOfMaleFemaleStudents = new NumberOfMaleFemaleStudents(list);
        AverageAgeOfMaleFemale averageAgeOfMaleFemale = new AverageAgeOfMaleFemale(list);
        StudentWithHighestPercentage studentWithHighestPercentage = new StudentWithHighestPercentage(list);
        NumberOfStudentsBranchWise numberOfStudentsBranchWise = new NumberOfStudentsBranchWise(list);
        AveragePercentage averagePercentage = new AveragePercentage(list);
        YoungMaleStudent youngMaleStudent = new YoungMaleStudent(list);
        NumberOfMaleFemaleInCS numberOfMaleFemaleInCS = new NumberOfMaleFemaleInCS(list);

    }

}
