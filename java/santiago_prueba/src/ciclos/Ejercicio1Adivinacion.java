package ciclos;

import javax.swing.JOptionPane;

public class Ejercicio1Adivinacion {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		int numero1=((int)(Math.random()*100));
		System.out.println(numero1);
		String numero2="";
		int numero3;
		
		do {
			numero2=JOptionPane.showInputDialog("Introduce un numero");
		    numero3=Integer.parseInt(numero2);
		}while(numero1!=numero3);
		
		System.out.println("felicidades adivinaste el numero");
		
		
	}

}
