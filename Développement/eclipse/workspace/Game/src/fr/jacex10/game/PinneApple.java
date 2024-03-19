package fr.jacex10.game;

public class PinneApple extends Fruit{

	public PinneApple() {
		super("ananas");
	}

	@Override
	public void taste() {
		System.out.println("L'ananas  a un goût un peu acide");
		
	}

	@Override
	public int getSize() {
		return 2;
	}

	@Override
	public boolean hasSeed() {
		return false;
	}

}
