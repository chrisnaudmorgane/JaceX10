package fr.jacex10.game;

public class Main {

	public static void main(String[] args) {
		Player player1 = new Player("Chrisnaud", 30.0, 500.0);
		System.out.println("name : "+player1.getName());
		System.out.println("Vie : "+player1.getHealth());
		player1.setAttack(150);
		System.out.println("Vie : "+player1.getHealth());
		
		Player player2 = new Player("Morgane", 25.0, 250.0);
		player2.damage(player1.getAttack());
		System.out.println("name : "+player2.getName());
	}

//	public static void main(String[] args) {
//		Apple a = new Apple();
//		a.taste();
//		a.miam();
//		
//		PinneApple b = new PinneApple();
//		b.taste();
//		b.miam();
//	}
}
