package santiago_prueba;

import java.util.Scanner;

public class scanner {
	public static void main(String[] args) {
		
		Scanner escaner=new Scanner(System.in);
		System.out.println("escribe tu peso en Kg");
		float peso=escaner.nextFloat();
		System.out.println("escribe tu altura en metros");
		float altura=escaner.nextFloat();
		float imc=peso/(altura*altura);
		escaner.close();
		//Si tiene un IMC entre 18.5 y 25:
			//"Your weigh ratio is good"
		if (imc<=25 && imc>=18.5) {
			System.out.println("Your weigh ratio is good");
		}
		//si es menor de 18.5 o mayor de 25:
			//"Your health is not good"
		else if (imc<18.5 || imc>25) {
			System.out.println("Your health is not good");
		}
		}
		
	}
