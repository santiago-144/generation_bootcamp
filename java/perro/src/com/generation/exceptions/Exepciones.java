package com.generation.exceptions;

public class Exepciones {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		int num1=10;
		Integer num2=null;
		float division;
		//System.out.println(division);
		//try - catch - finally
		try {
			//codigo que vamos a probar o ejecutar
			division=num1/num2;
		}catch(ArithmeticException ex) {//exepcion a observar
			//lo que se va a reliazar cuando se detecte una excepcion 
			division=0.0f;
			System.out.println("Error: " + ex.getMessage());
		}catch(NullPointerException ex){
			division=0.0f;
			System.out.println("Error: "+ ex.getMessage());
		}
		finally {
			System.out.println("Finalizo el try-catch");
		}
	}

}
