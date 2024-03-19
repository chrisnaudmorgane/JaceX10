package fr.jacex10.game;

public class Apple extends Fruit {

	public Apple() {
		super("pomme");
	}

	@Override
	public void taste() {
		System.out.println("La pomme à un goût sucré");
		super.miam();
	}

	@Override
	public int getSize() {
		return 1;
	}

	@Override
	public boolean hasSeed() {
		return true;
	}

}
