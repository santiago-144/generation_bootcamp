package ciclos;

import java.util.Scanner;

public class Ejercicio2 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		String correo="";
		Scanner sc=new Scanner (System.in);
		System.out.println("cual es tu correo");
		correo=sc.nextLine();
		
		sc.close();
		for (int n = 0; n <correo.length (); n++) 
		{ char c = correo.charAt (n); 
		//System.out.println (c); 
		if(c=='@') {
			System.out.println("correo valido"); 
			break;	
		}
		
		}
	}

}
