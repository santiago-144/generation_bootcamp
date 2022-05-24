package com.generation.arreglos;

import java.util.Arrays;

public class Arreglos {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		//arreglos o matrices
		int [] arrNumeros=new int [5];
		System.out.println(arrNumeros);
		arrNumeros[0]=1;
		arrNumeros[1]=Integer.parseInt("2");
		arrNumeros[2]=3;
		arrNumeros[3]=4;
		arrNumeros[4]=5;
		System.out.println(Arrays.toString(arrNumeros));
	for(int i=0; i<arrNumeros.length;i++) {
		System.out.println(arrNumeros[i]);
		
	}
	//for each
	for(int elemento:arrNumeros) {
		
		System.out.println("Elemento = " + elemento);
	}
	
	//arreglo que guarda objetos 
	
	persona persona1=new persona("patricia",30);
	persona persona2=new persona("santiago",31);
	persona persona3=new persona("ghadieel",14);
	
	//Object arrPersona[]=new Object[3];
	persona arrPersona[]=new persona[3];
	 arrPersona[0]=persona1;
	 arrPersona[1]=persona2;
	 arrPersona[2]=persona3;
	 
	 System.out.println(Arrays.toString(arrPersona));
	 
	 for (persona e:arrPersona) {
		 System.out.println(e.nombre + " " + e.edad);
	 }
	 
	 //arreys literales
	 String []arregloString= {"hola", "mi","nombre", "es","santiago"};	 
	 System.out.println(Arrays.toString(arregloString));
	
	
	}
}
