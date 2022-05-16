package santiago_prueba;

import java.util.Objects;

public class operadoresLogicos {

	public static void main(String[] args) {
		int num =32;
		num=45;
		num=Integer.parseInt("4");
		
		System.out.println(num);
		
		//operadores de comparacion
		int num1,num2;
		num1=10;
		num2=20;
		System.out.println("num: " + num1);
		System.out.println("num: " + num2);
		
		//operador de comparacion 
		System.out.println(num1==num2);
		
		//.equals
		
		System.out.println(Objects.equals(num1, num2)); 
		
		
	}
	
}
