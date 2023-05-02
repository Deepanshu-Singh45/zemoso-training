
import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Scanner;

public class AssignmentThree {

    private static double pingHost(String host,int noOfTimes){
        List<Integer> pingTimeArray=new ArrayList<>();

        try{
            // this command we have to run
            String command = "ping -n "+noOfTimes+" "+host;

            // it is help to run the above command
            Process process=Runtime.getRuntime().exec(command);


            BufferedReader br = new BufferedReader(new InputStreamReader(process.getInputStream()));


            // storing the value of buffer reader in input line
            String inputLine;
            while((inputLine = br.readLine())!=null){

                // check for time=something present or not

                if(inputLine.contains("time=")){

                    // starting index of time
                    int startInd=inputLine.indexOf("time=")+5;

                    // last index of time
                    int lastInd=inputLine.indexOf("ms");

                    //  substring of input line between start index to last index
                    String time=inputLine.substring(startInd,lastInd);

                    // converting time into integer and store in the array list
                    pingTimeArray.add(Integer.parseInt(time));
                }
            }
        }catch (Exception e){
            System.out.println(e);
        }

        // sorting the ping time array
        Collections.sort(pingTimeArray);

        System.out.println(pingTimeArray.toString());

        double median=-1;

        // if even then the formula is
        if(pingTimeArray.size()%2==0){
            median= (double) (pingTimeArray.get((pingTimeArray.size() / 2) - 1)
                    + pingTimeArray.get(pingTimeArray.size() / 2)) /2;
        }else{
            median=pingTimeArray.get((pingTimeArray.size()+1)/2-1);
        }

        // this will be the median value
        return median;
    }

    public static void main(String []args){
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the name of the host : ");

        String host= sc.nextLine();

        System.out.println("Enter how many time you want to ping the host : ");

        int noOfTimes = sc.nextInt();

        System.out.println(pingHost(host,noOfTimes));
    }
}
