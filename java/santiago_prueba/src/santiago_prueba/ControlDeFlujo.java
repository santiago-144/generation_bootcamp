package santiago_prueba;

import java.util.Scanner;

public class ControlDeFlujo {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		System.out.print("cual es tu edad");
		Scanner sc=new Scanner (System.in);
		int edad=sc.nextInt();
		
		
		if (edad>=18) {
			
			if (edad>=60) {
				System.out.println("Eres un adulto mayor");
			}
			else {
			System.out.println("Eres un joven adulto");
			}
			}
		else {
			System.out.println("eres menos de edad"); 
		}
		
		String mensaje=(edad>=18)? ("eres mayor de edad x2"):("eres menor de edadx2");
		System.out.println(mensaje);
		
		System.out.println("que dia es ?");
		sc.nextLine();
		String dia=sc.nextLine();
		sc.close();
		switch(dia.toLowerCase()) {
			case "lunes":
				System.out.println("5 min mas");
				break;
			case "martes":
				System.out.println("no te cases ni te embarques");
				break;
			case "miercoles":
				System.out.println("ombligo de la semana");
				break;
			case "jueves":
				System.out.println("viernes cuiquito");
				break;
			case "viernes":
				System.out.println("chelas");
				break;
				default:
					System.out.println("dia no valido"); 
				break;
		}
		
	}

}
