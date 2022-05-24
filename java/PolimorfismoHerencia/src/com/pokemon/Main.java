package com.pokemon;

public class Main {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		//Pokemon chikorita=new Pokemon(152,1,20,"Chikorita",false);
		//chikorita.comer();
		//chikorita.atacar();
		//chikorita.dormir();
		
		TipoPlanta chikorita2=new TipoPlanta(152,1,20,"Chikorita2",false,1);
		chikorita2.envenenar();
		chikorita2.paralizar();
		chikorita2.comer();
		chikorita2.atacar();
		chikorita2.dormir();
		
		Chikorita chikorita3=new Chikorita(152,1,20,"Chikorita3",false,1,8);
		
		chikorita3.latigo();
		chikorita3.atacar();
		
		System.out.println("---------------------------------------");
		
		Charmander charmander=new Charmander(4,3,50,"Charmander",true);
		charmander.atacar();
		charmander.saludar("ataca perro");
		charmander.volar();
		charmander.aranas();
		charmander.lanzaLlamas();
		
		

	}

}
