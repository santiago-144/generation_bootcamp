package com.perritos;

public class Perro {
	//atributos o propiedades 
	String nombre;
	int edad;
	String raza;
	String tamano;
	//constructor
	public Perro(String nombre,int edad) {
		
		this.nombre=nombre;
		this.edad=edad;
	}
	
	//metodo 
			public void ladrar() {
				System.out.println(" el perro " + nombre + " hace guauf" );
			}
			public int edadPerruna() {
				return edad*7;
			}
			
	//Mutates estaticos 
	//nos permite utilizar el metodo sin instanciar un objeto 
	public static void mensaje() {
		System.out.println("esta es una clase de perro");
		
	}
		
	

}
