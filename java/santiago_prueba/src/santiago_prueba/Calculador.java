package santiago_prueba;

import java.util.Scanner;

public class Calculador {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		System.out.println("Introduce el numero de la operacion a realizar");
		System.out.println("1) Suma   2) Resta   3) Multiplicacion   4) Division");
		Scanner sc=new Scanner(System.in);
		int op=sc.nextInt();
		System.out.println("introduce el primer numero");
		float numero1=sc.nextFloat();
		System.out.println("introduce el segundo numero");
		float numero2=sc.nextFloat();
		sc.close();
		
		switch(op) {
		case 1:
			
			System.out.println("la suma es: " +(numero1+numero2));
			break;
		case 2:
			System.out.println("la resta es: " +(numero1-numero2));
			break;
		case 3:
			System.out.println("la multiplocacion es: " +(numero1*numero2));
			break;
		case 4:
			if (numero2==0) {
				System.out.println("no se puede dividir entre 0");
			}
			else {
			System.out.println("la division es: " +(numero1/numero2));
			}
			break;
	
			default:
				System.out.println("operacion no valida"); 
			break;
	}
	
	
	}

}
