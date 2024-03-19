package fr.jacex10.fazzbizz;

public class strlen {

	public static int str(String str) {
		return str.length();
	}

	public static void main(String[] args) {
		String b = "Chrisnaud";
		int str = strlen.str(b);
		System.out.println(str);
	}
}
