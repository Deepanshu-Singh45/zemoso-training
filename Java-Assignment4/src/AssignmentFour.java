import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.Scanner;


public class AssignmentFour {
    public static void main(String[] args) {


        Scanner sc = new Scanner(System.in);

        String n = sc.nextLine();

        String input;
        for(int i = 0; i < Integer.parseInt(n); i++) {

            input = sc.next();
            input += sc.nextLine();

            String[] dates = input.split(" ");

            String signupDateString = dates[0];
            String currentDateString = dates[1];

            //signup and current dates
            LocalDate signupDate = LocalDate.parse(signupDateString, DateTimeFormatter.ofPattern("dd-MM-yyyy"));

            LocalDate currentDate = LocalDate.parse(currentDateString, DateTimeFormatter.ofPattern("dd-MM-yyyy"));

            // current year's anniversary date
            LocalDate currentAnniversaryDate = LocalDate.of(currentDate.getYear(), signupDate.getMonthValue(), signupDate.getDayOfMonth());


            // range for the form date
            LocalDate rangeStart = currentAnniversaryDate.minusDays(30);
            LocalDate rangeEnd = currentAnniversaryDate.plusDays(30);

            // checks for range, if rangeEnd date is after currentDate, set it to current date
            if (rangeEnd.isAfter(currentDate)) {
                rangeEnd = currentDate;
            }

            // Output the range of dates
            if (rangeEnd.equals(rangeStart)) {
                System.out.println("No range");
            } else {
                String rangeStartString = rangeStart.format(DateTimeFormatter.ofPattern("dd-MM-yyyy"));
                String rangeEndString = rangeEnd.format(DateTimeFormatter.ofPattern("dd-MM-yyyy"));
                System.out.println(rangeStartString + " " + rangeEndString);
            }
        }

    }
}
