package com.generation.test;

import com.generation.model.Perro;

public class PruebaPerro {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		Perro pelusa=new Perro("pelusa","labrador","grande", 4,"negro");
		Perro solovino=new Perro("solovino", "corriente", "mediano", 1, "amarillo");
		
		
		 pelusa.setHumano("pedro");
		 solovino.setHumano("juan");
		 System.out.println(pelusa);
		 System.out.println(solovino);
		 pelusa.comer();
		 
		 System.out.println(Perro.buscarHumano(1));
		 System.out.println(Perro.buscarHumano(2));
		
	}

}
