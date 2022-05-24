package com.pokemon;

public class Chikorita extends TipoPlanta{
	//atributos
	private int numeroCuernitos;
	//constructor
	public Chikorita(int id, int edad ,int nivel,String nombre, boolean evolucion, int numeroHojas, int numeroCuernitos) 
	
	{
			super(id,edad,nivel,nombre,evolucion,numeroHojas);
		this.numeroCuernitos=numeroCuernitos;	
		
	}

	//metodos
	public void latigo() {
		System.out.println(getNombre()+ " uso el latigo");
	
	}
	public int getNumeroCuernitos() {
		return numeroCuernitos;
	}

	public void setNumeroCuernitos(int numeroCuernitos) {
		this.numeroCuernitos = numeroCuernitos;
	}

	@Override
	public String toString() {
		return "Chikorita [numeroCuernitos=" + numeroCuernitos + "]";
	}
	
	public void atacar() {
		System.out.println(getNombre()+ " tipo planta esta atacandox2");
	}
	
	
}
