package santiago_prueba;

import java.util.Scanner;

public class Ejercicio1 {
public static void main(String[] args){
	
	int numero;
	Scanner leer=new Scanner(System.in);
	System.out.println("ingrese un numero entre 0 y 10");
	numero=leer.nextInt();
//	System.out.println(numero);
	leer.close();
	if(numero<3) {
		System.out.println("failed");
	}
	if (numero>=3 && numero<5) {
		System.out.println("insufficient!");
	}
	if (numero>=5 && numero<9) {
		System.out.println("Good!");
	}
	if (numero==10) {
		System.out.println("Excelent!");
	}
}
}
