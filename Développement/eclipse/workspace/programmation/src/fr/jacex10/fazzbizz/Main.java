package fr.jacex10.fazzbizz;
public class Main {
	public static int fazzbizz(int a, int b) {
		if (b < a) {
			System.out.println("Le deuxième nombre ne peut pas être inférieur au premier nombre");
			return 84;
		}
        for (int c = a; c <= b; c++) {
            if (c % 9 == 0 && c % 10 == 0) {
                System.out.println("Fazzbizz\n");
            }
            if (c % 9 == 0 && c % 10 != 0) {
                System.out.println("Fazz\n");
            }
            if (c % 9 != 0 && c % 10 == 0) {
                System.out.println("Bizz\n");
            }
            if (c % 9 != 0 && c % 10 != 0) {
                System.out.println(c + " ");
            }
        }
        return 0;
    }
	public static void main(String[] args) {
		if (args.length > 3) {
			System.out.println("Le nombre d'argument ne doit pas être supérieur à trois");
			return;
		}
		int a = Integer.parseInt(args[0]);
		int b = Integer.parseInt(args[1]);
		int somme = Main.fazzbizz(a, b);
		System.out.println(somme);
	}
}
