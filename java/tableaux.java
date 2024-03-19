public class tableaux {
    public static void main(String[] args) {
        int money = 5000;
        int pricephone = 2500;
        boolean hasphone = false;
    
        if(money >= pricephone && !hasphone){
            System.out.println("Tu peux acheter ce téléphone");
        } else{
            System.out.println("Tu n'as pas assez d'argent pour acheter ce téléphone et en plus tu as déjà un téléphone");
        }
        String name = "Chrisnaud";
        String [] names = {"Morgane", "Ibukun", "AGOSSOU"};
        System.out.println(name);
    }
}
