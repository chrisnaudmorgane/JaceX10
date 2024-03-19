public class fazzbizz{
    public static int fazzbizz(int a, int b) {
        for (int c = a; c <= b; c++) {
            if (c % 9 == 0 && c % 10 == 0) {
                System.out.println("Fazzbizz");
            }
            if (c % 9 == 0 && c % 10 != 0) {
                System.out.println("Fazz");
            }
            if (c % 9 != 0 && c % 10 == 0) {
                System.out.println("Bizz");
            }
            if (c % 9 != 0 && c % 10 != 0) {
                System.out.println(c + " ");
            }
        }
        return 0;
    }
    public static void main(String[] args) {
        if (args.length > 3 || args.length < 2){
            System.out.println("Le nombre d'argument doit être supérieur à 3");
            return;
        }
        int a = Integer.parseInt(args[0]);
        int b = Integer.parseInt(args[1]);
		int somme = fazzbizz.fazzbizz(a, b);
        if (b < a){
            System.out.println("Le deuxième nombre ne peut pas être inférieur au premier nombre");
        }
		System.out.println(somme);
	}
}