public class EnumPoc {

    public enum Color {
        RED("Passion"), GREEN("Health"), BLUE("Trust");
        private String meaning;
        Color(String meaning) {
            this.meaning = meaning;
        }

        public String getMeaning() {
            return meaning;
        }
    }
    public static void main(String[] args) {

        Color color = Color.GREEN;

        switch (color) {
            case RED :
                System.out.println("Red"); break;
            case BLUE :
                System.out.println("Blue"); break;
            case GREEN:
                System.out.println("Green"); break;
            default:
                break;
        }

        System.out.println(Color.BLUE);
        System.out.println(Color.GREEN.getClass());
        System.out.println(Color.GREEN instanceof Color);
        System.out.println(Color.RED.getMeaning());
    }
}
