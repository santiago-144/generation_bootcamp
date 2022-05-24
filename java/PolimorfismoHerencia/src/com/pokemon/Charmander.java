package com.pokemon;

public class Charmander extends Pokemon implements TipoFuego, TipoVolador {

	//oonstructor
	public Charmander(int id, int edad ,int nivel,String nombre, boolean evolucion) {
		super(id,edad,nivel,nombre,evolucion);
	}
	@Override
	public void lanzaLlamas() {
		// TODO Auto-generated method stub
		System.out.println("lanza llamas");
		
	}

	@Override
	public void aranas() {
		// TODO Auto-generated method stub
		System.out.println("arañaso");
	}

	@Override
	public void volar() {
		// TODO Auto-generated method stub
		System.out.println("volar");
		
	}
	@Override
	public void saludar(String mensaje) {
		// TODO Auto-generated method stub
		System.out.println(getNombre() + " dice " + mensaje);
		
	}

}
