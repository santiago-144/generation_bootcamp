package com.perritos;

public class PruebaPerro {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		Perro perro1=new Perro("Patitas",3);
		//atributos
		Perro.mensaje();
		
		perro1.raza="husky";
		perro1.tamano="mediano";
		
		//metodo
		perro1.ladrar();
		int edadP1=perro1.edadPerruna();
		System.out.println("LA edad es de: " + edadP1);
		
		Perro.mensaje();
		
		Perro perro2=new Perro("Frida",1);
		
		perro2.raza="labrador";
		perro2.tamano="grande";
		
		perro2.ladrar();
		
		}

	}


