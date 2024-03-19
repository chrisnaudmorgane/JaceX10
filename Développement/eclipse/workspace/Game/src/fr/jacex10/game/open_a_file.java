package fr.jacex10.game;

import java.io.BufferedReader;

import java.io.FileReader;

import java.io.IOException;

public class open_a_file {

	public static void file(String str) {
		try {
            BufferedReader reader = new BufferedReader(new FileReader(str));
            String line;
            while ((line = reader.readLine()) != null) {
                System.out.println(line);
            }
            reader.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
	}
}
